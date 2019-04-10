import React from 'react'
import useQuotes from '../hooks/useQuotes'
import QuoteInput from './QuoteInput'

export default function EditQuoteInput({ quoteId, disabled, onSubmit }) {
  const [quote] = useQuotes({ id: quoteId, pageSize: 1, page: 1 })
  return (
    <QuoteInput
      disabled={disabled}
      onSubmit={onSubmit}
      defaultText={quote.text}
      defaultAuthorName={quote.authorName}
      actionText="Save Quote"
    />
  )
}
