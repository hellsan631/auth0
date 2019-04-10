import React, { useState } from 'react'
import {
  Redirect,
} from 'react-router-dom'
import useUserContext from '../hooks/useUserContext'
import QuoteInput from '../components/QuoteInput'

export default function AddQuote() {
  const { loading, dispatch } = useUserContext()
  const [quoteAdded, setQuoteAdded] = useState(false)

  const onSubmit = (payload) => {
    dispatch({
      type: 'ADD_QUOTE',
      payload,
      onSuccess: () => setQuoteAdded(true),
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
      <QuoteInput
        onSubmit={onSubmit}
        disabled={loading}
      />
    </div>
  )
}
