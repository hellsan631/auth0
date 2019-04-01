import React, { useReducer, useContext, createContext } from 'react'
import UserReducer from './UserReducer'

const UserContext = createContext(false)

export function UserProvider({ children }) {
  const context = useContext(UserContext)
  const [state, dispatch] = useReducer(UserReducer, context)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
