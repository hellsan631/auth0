import React, { Fragment } from 'react'
import { useAllQuotes } from '../hooks/useQuotes'

export default function QuoteItem({ id, text, authorName }) {
  return (
    <div
      className="twelve columns"
    >
      <div>"{text}"</div>
      <div
        className="u-pull-right"
      >
        - {authorName || 'Anonymous'}
      </div>
    </div>
  )
}
