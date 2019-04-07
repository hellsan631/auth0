import history from '../lib/history'
import { AUTH_CONFIG } from '../lib/auth0/variables'
import Auth from '../lib/auth0/Auth'

export const handleCallback = async () => {
  try {
    const auth = await Auth.parseHash()

    return {
      auth,
      user: await Auth.getAllUserData(auth.accessToken),
    }
  } catch (error) {
    history.replace(AUTH_CONFIG.defaultRoute)

    throw error
  }
}

export const handleHydrate = async () => {
  try {
    const auth = await Auth.renewSession()
    if (!auth) {
      return {}
    }

    return {
      auth,
      user: await Auth.getAllUserData(auth.accessToken),
    }
  } catch (error) {
    console.log(error)
  }
}

export const handleLogin = () => {
  return Auth.authorize()
}

export const handleLogout = () => {
  return Auth.logout()
}
