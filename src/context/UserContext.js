import React, { useContext, createContext } from 'react'
import UserReducer from './UserReducer'
import useAsyncReducer from '../hooks/useAsyncReducer'

const UserContext = createContext({})

export function UserProvider({ children }) {
  const context = useContext(UserContext)
  const reducer = useAsyncReducer(UserReducer, context, 'user-context')

  return (
    <UserContext.Provider value={reducer}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
