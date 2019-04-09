import React, { Fragment, useState, memo } from 'react'
import { useSearchQuotes } from '../hooks/useQuotes'
import QuoteItem from './QuoteItem'
import ViewportBlock from './ViewportBlock'
import Button from './Button'
import Loading from './Loading'

function QuoteChunk({ page, params, onScrollFire }) {
  const [hasFired, setHasFired] = useState(false)
  const { quotes } = useSearchQuotes(params, page)

  if (quotes === false) {
    return (
      <div className="twelve columns">
        <Loading />
      </div>
    )
  }

  // If we've reached the end of the list
  if (!quotes.length) {
    return null
  }

  const onVisable = () => {
    setHasFired(true)
    onScrollFire()
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
      {
        !hasFired &&
        <div className="twelve columns">
          <Button
            onClick={onVisable}
            primary
          >
            Load More
          </Button>
        </div>
      }
      <ViewportBlock
        onVisable={onVisable}
      />
    </Fragment>
  )
}

export default memo(QuoteChunk)
