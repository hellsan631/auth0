// import {
//   handleCallback,
//   handleLogin,
//   handleHydrate,
//   handleLogout,
//   handleChangePassword,
//   handleMetadataChange,
// } from './UserActions'

const QuoteProducer = async (state, { type, payload }) => {
  console.log('quote reducer', state, type, payload) 
  switch (type) {
    default:
      return state
  }
}

export default QuoteProducer
