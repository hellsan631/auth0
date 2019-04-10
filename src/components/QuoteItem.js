import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import {
  Redirect,
} from 'react-router-dom'
import QuoteItemContainer, { QuoteDelete, QuoteEdit } from './QuoteItemContainer'
import useUserContext from '../hooks/useUserContext'

const getRandomGradient = (id) => {
  const grads = [
    'linear-gradient( 135deg, #97ABFF -10%, #123597 140%)',
    'linear-gradient( 315deg, #F97794 -60%, #623AA2 80%)',
  ];

  return grads[Math.round(id % grads.length)]
}

export default function QuoteItem({ id, text, authorName, userId, className, index }) {
  const { state: { user }, dispatch } = useUserContext()
  const [editQuote, setEditQuote] = useState(false)
  const [removed, setRemoved] = useState(false)
  const canAdmin = user && user.user_id === userId

  if (removed) {
    return null
  }

  if (editQuote) {
    return (
      <Redirect
        to={{
          pathname: `/edit-quote`,
          search: `?quoteId=${id}`,
        }}
      />
    )
  }

  const removeFn = () => {
    dispatch({
      type: 'REMOVE_QUOTE',
      payload: { quoteId: id },
      onSuccess: () => setRemoved(true),
    })
  }

  const showCopyFn = () => {
    if (canAdmin) {
      return
    }
    toast.info('Quote copied to clipboard', { autoClose: 2000 })
  }

  return (
    <CopyToClipboard
      text={`${text} - ${authorName || 'Anonymous'}`}
      onCopy={showCopyFn}
    >
      <QuoteItemContainer
        className={className}
        backgroundImage={getRandomGradient(typeof index === 'number' ? index : id)}
      >
        <blockquote>"{text}"</blockquote>
        <cite
          className="u-pull-right"
        >
          - {authorName || 'Anonymous'}
        </cite>
        {
          canAdmin &&
            <QuoteDelete
              onClick={removeFn}
            >
              <span
                role="img"
                aria-label={`Delete Quote - ${text} by ${authorName || 'Anonymous'}`}>
                🗑️
              </span>
            </QuoteDelete>
        }
        {
          canAdmin &&
            <QuoteEdit
              onClick={() => setEditQuote(true)}
            >
              <span
                role="img"
                aria-label={`Edit Quote - ${text} by ${authorName || 'Anonymous'}`}>
                📝
              </span>
            </QuoteEdit>
        }
      </QuoteItemContainer>
    </CopyToClipboard>

  )
}
