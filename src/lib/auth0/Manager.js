import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './variables';

class Manager {
  accessToken;
  api;

  init(accessToken) {
    this.accessToken = accessToken;
    this.api = new auth0.Management({
      token: accessToken,
      domain: AUTH_CONFIG.domain,
    })
  }

  getUser(userId) {
    return new Promise((resolve) => {
      this.api.getUser(userId, (err, userInfo) => {
        resolve(userInfo)
      });
    })
  }
}

export default new Manager()
