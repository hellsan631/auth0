import {
  handleCallback,
  handleLogin,
  handleHydrate,
  handleLogout,
} from './UserActions';

const UserReducer = async (state, { type, payload }) => {
  console.log('type', type)
  switch (type) {
    case 'HYDRATE':
      return {
        ...state,
        ...await handleHydrate(),
      }
    case 'CALLBACK':
      return {
        ...state,
        ...await handleCallback(),
      }
    case 'LOGIN':
      handleLogin()
      return state
    case 'LOGOUT':
      handleLogout()
      return state
    default:
      return state
  }
}

export default UserReducer
