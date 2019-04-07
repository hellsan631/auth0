import {
  handleCallback,
  handleLogin,
  handleHydrate,
  handleLogout,
  handleChangePassword,
} from './UserActions';

const UserReducer = async (state, { type, payload }) => {
  console.log('type', type)
  switch (type) {
    case 'CHANGE_PASSWORD':
      return {
        ...state,
        ...await handleChangePassword(state.user),
      }
    case 'HYDRATE':
      return {
        ...state,
        ...await handleHydrate(),
        hydrated: true,
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
