import React from 'react'
import useInput from '../hooks/useInput'
import Button from '../components/Button'
import useUserContext from '../hooks/useUserContext'
import NewQuoteInput from '../components/NewQuoteInput'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function AddQuote() {
  const { state, loading, dispatch } = useUserContext()

  const onSubmit = (payload) => {
    dispatch({
      type: 'ADD_QUOTE',
      payload,
    })
  }

  return (
    <div className="container">
      <ToastContainer />
      <NewQuoteInput
        onSubmit={onSubmit}
        disabled={loading}
      />
    </div>
  )
}
