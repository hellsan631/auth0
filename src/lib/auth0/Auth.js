import auth0 from 'auth0-js'
import { AUTH_CONFIG } from './variables'
import Manager from './Manager';

class Auth {
  api = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    audience: `https://${AUTH_CONFIG.domain}/api/v2/`,
    clientID: AUTH_CONFIG.clientID,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: 'token id_token',
    scope: AUTH_CONFIG.scopes,
  })

  renewSession() {
    return new Promise((resolve, reject) => {
      this.api.checkSession({}, (err, authResult) => {
        if (err) {
          console.log(err)
          return reject(err)
        }

        resolve(authResult)
      });
    })
  }

  parseHash() {
    return new Promise((resolve, reject) => {
      this.api.parseHash((err, authResult) => {
        if (err) {
          return reject(err)
        }
        resolve(authResult)
      });
    })
  }

  async getAllUserData(accessToken, { sub: userId }) {
    Manager.init(accessToken)
    return await Manager.getUser(userId)
  }

  authorize() {
    return this.api.authorize()
  }

  logout() {
    return this.api.logout({
      returnTo: AUTH_CONFIG.logoutUrl,
    })
  }
}


export default new Auth()
