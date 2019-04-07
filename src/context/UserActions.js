import history from '../lib/history'
import { AUTH_CONFIG } from '../lib/auth0/variables'
import Auth from '../lib/auth0/Auth'

const fetchAndCombineUserData = async (auth) => {
  if (!auth) {
    return {}
  }
  const { accessToken, idTokenPayload } = auth
  return {
    auth,
    user: await Auth.getAllUserData(accessToken, idTokenPayload),
  }
}

export const handleCallback = async () => {
  try {
    const auth = await Auth.parseHash()
    return await fetchAndCombineUserData(auth)
  } catch (error) {
    history.replace(AUTH_CONFIG.defaultRoute)
    throw error
  }
}

export const handleHydrate = async () => {
  try {
    const auth = await Auth.renewSession()
    return await fetchAndCombineUserData(auth)
  } catch (error) {
    console.log(error)
    return {}
  }
}

export const handleLogin = () => {
  return Auth.authorize()
}

export const handleLogout = () => {
  return Auth.logout()
}
