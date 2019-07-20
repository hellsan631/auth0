import {
  handleCallback,
  handleLogin,
  handleHydrate,
  handleLogout,
  handleChangePassword,
  handleMetadataChange,
  handleAddQuote,
  handleRemoveQuote,
  handleEditQuote,
} from './UserActions'

const UserReducer = async (state, { type, payload }) => {
  switch (type) {
    case 'EDIT_QUOTE':
      return {
        ...state,
        ...await handleEditQuote(payload, state),
      }
    case 'REMOVE_QUOTE':
      return {
        ...state,
        ...await handleRemoveQuote(payload, state),
      }
    case 'ADD_QUOTE':
      return {
        ...state,
        ...await handleAddQuote(payload, state),
      }
    case 'UPDATE_METADATA':
      return {
        ...state,
        ...await handleMetadataChange(
            state.auth,
            {
              ...state.user.user_metadata,
              ...payload,
            }
        ),
      }
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
