import auth0 from 'auth0-js'
import { AUTH_CONFIG } from './variables'
import { reject } from 'q';

class Manager {
  accessToken
  api

  init(accessToken) {
    this.accessToken = accessToken
    this.api = new auth0.Management({
      token: accessToken,
      domain: AUTH_CONFIG.domain,
    })
  }

  getUser(userId) {
    return new Promise((resolve) => {
      this.api.getUser(userId, (err, userInfo) => {
        if (err) return reject(err)

        // If the user metadata doesn't exist, provide some default data
        if (!userInfo.user_metadata) {
          userInfo.user_metadata = {}
        }

        // If quote data doesn't exist on the user metadata, create a blank array
        if (!userInfo.user_metadata.quotes) {
          userInfo.user_metadata.quotes = []
        }

        resolve(userInfo)
      })
    })
  }

  patchUserMetadata(userId, userMetadata) {
    return new Promise((resolve) => {
      this.api.patchUserMetadata(userId, userMetadata, (err, userInfo) => {
        if (err) return reject(err)
        resolve(userInfo)
      })
    })
  }
}

export default new Manager()
