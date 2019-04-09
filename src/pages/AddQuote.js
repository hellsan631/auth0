import React, { useState } from 'react'
import {
  Redirect,
} from 'react-router-dom'
import useUserContext from '../hooks/useUserContext'
import NewQuoteInput from '../components/NewQuoteInput'

export default function AddQuote() {
  const { loading, dispatch } = useUserContext()
  const [quoteAdded, setQuoteAdded] = useState(false)

  const onSubmit = (payload) => {
    dispatch({
      type: 'ADD_QUOTE',
      payload,
      success: () => setQuoteAdded(true)
    })
  }

  // Redirect on quote added
  if (quoteAdded) {
    return (
      <Redirect
        to={{
          pathname: '/my-quotes',
          state: { from: '/add-quote' },
        }}
      />
    )
  }

  return (
    <div className="container">
      <NewQuoteInput
        onSubmit={onSubmit}
        disabled={loading}
      />
    </div>
  )
}
