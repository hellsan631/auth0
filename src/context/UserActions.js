import history from '../lib/history'
import { AUTH_CONFIG } from '../lib/auth0/variables'
import Auth from '../lib/auth0/Auth'
import { toast } from 'react-toastify'
import { addQuote } from '../lib/Quote'

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

export const handleAddQuote = async (payload, { user, auth }) => {
  try {
    const quote = await addQuote(payload)
    console.log(quote)
    return {
      
    }
  } catch (error) {
    console.log(error)
    toast.error(error.message)
    return {}
  }
}

export const handleMetadataChange = async (auth, userMetadata) => {
  try {
    const { idTokenPayload } = auth
    const user = await Auth.updateUser(idTokenPayload, userMetadata)
    return {
      user,
    }
  } catch (error) {
    toast.error(error.message)
    return {}
  }
}

export const handleChangePassword = async ({ email }) => {
  try {
    toast.success(await Auth.changePassword(email))
    return {
      sent: true,
    }
  } catch (error) {
    toast.error(error.message)
    return {
      sent: false,
    }
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
