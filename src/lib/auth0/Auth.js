import auth0 from 'auth0-js'
import { AUTH_CONFIG } from './variables'
import Manager from './Manager';

class Auth {
  api = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientID,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: 'token id_token',
    scope: 'openid profile read:current_user',
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

  async getAllUserData(accessToken) {
    console.log(accessToken)
    Manager.init(accessToken)
    const { sub: userId } = await this.getUserInfo()
    return await Manager.getUser(userId)
  }

  getUserInfo(accessToken) {
    return new Promise((resolve, reject) => {
      this.api.client.userInfo(accessToken, (err, user) => {
        if (err) {
          return reject(err)
        }
        console.log(user)
        resolve(user)
      })
    })
  }

  authorize() {
    return this.api.authorize()
  }

  logout() {
    return this.api.logout({
      returnTo: AUTH_CONFIG.logoutRoute,
    })
  }
}


export default new Auth()
