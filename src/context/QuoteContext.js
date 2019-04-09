import React, { useContext, createContext } from 'react'
import QuoteReducer from './QuoteReducer'
import useAsyncReducer from '../hooks/useAsyncReducer'

const QuoteContext = createContext([])

export function QuoteProvider({ children, userContext }) {
  const context = useContext(QuoteContext)
  const reducer = useAsyncReducer(QuoteReducer, context)
  return (
    <QuoteContext.Provider value={reducer}>
      {children}
    </QuoteContext.Provider>
  )
}

export default QuoteContext
