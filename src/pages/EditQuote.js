import React, { Suspense, useState } from 'react'
import {
  Redirect,
} from 'react-router-dom'
import useUserContext from '../hooks/useUserContext'
import EditQuoteInput from '../components/EditQuoteInput'
import Loading from '../components/Loading'

export default function EditQuote({ location }) {
  const params = new URLSearchParams(location.search)
  const quoteId = params.get('quoteId')
  const { loading, dispatch } = useUserContext()
  const [quoteEdit, setQuoteEdit] = useState(false)

  const onSubmit = (payload) => {
    dispatch({
      type: 'EDIT_QUOTE',
      payload: {
        ...payload,
        id: quoteId,
      },
      onSuccess: () => setQuoteEdit(true),
    })
  }

  // Redirect on quote Edit
  if (quoteEdit) {
    return (
      <Redirect
        to={{
          pathname: '/my-quotes',
          state: { from: '/edit-quote' },
        }}
      />
    )
  }

  return (
    <div className="container">
      <Suspense
        fallback={
          <div className="row">
            <div className="twelve columns">
              <Loading />
            </div>
          </div>
        }
      >
        <EditQuoteInput
          onSubmit={onSubmit}
          disabled={loading}
          quoteId={quoteId}
        />
      </Suspense>
    </div>
  )
}
