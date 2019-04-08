import React, { Fragment } from 'react'
import { useAllQuotes } from '../hooks/useQuotes'

export default function QuoteItem({ id, text, authorName }) {
  return (
    <div
      className="twelve columns"
    >
      <blockquote>"{text}"</blockquote>
      <cite
        className="u-pull-right"
      >
        - {authorName || 'Anonymous'}
      </cite>
    </div>
  )
}
