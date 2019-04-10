import React, {
  Fragment, memo,
} from 'react'
import useSearchQuotes from '../hooks/useSearchQuotes'
import QuoteItem from './QuoteItem'
import Loading from './Loading'
import InfiniteLoader from './InfiniteLoader'

function QuoteChunk({ page, params, onScrollFire }) {
  const { quotes } = useSearchQuotes(params, page)

  if (quotes === false) {
    return (
      <div className="twelve columns">
        <Loading />
      </div>
    )
  }

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

export default memo(QuoteChunk)
