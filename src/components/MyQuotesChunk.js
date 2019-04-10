import React, { Fragment, useState, memo } from 'react'
import useQuotes from '../hooks/useQuotes'
import QuoteItem from './QuoteItem'
import InfiniteLoader from './InfiniteLoader'

function MyQuotesChunk({ page, params, onScrollFire }) {
  const quotes = useQuotes(params, page)

  if (!quotes.length) {
    return null
  }

  return (
    <Fragment>
      {
        quotes.map((quote, index) => {
          return (
            <QuoteItem
              key={quote.id}
              {...quote}
              className="twelve columns"
              index={index}
            />
          )
        })
      }
      <InfiniteLoader
        onScrollFire={onScrollFire}
      />
    </Fragment>
  )
}

export default memo(MyQuotesChunk)
