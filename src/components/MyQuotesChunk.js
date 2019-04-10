import React, { Fragment, useState, memo } from 'react'
import useQuotes from '../hooks/useQuotes'
import QuoteItem from './QuoteItem'
import ViewportBlock from './ViewportBlock'
import Button from './Button'

function MyQuotesChunk({ page, params, onScrollFire }) {
  const [hasFired, setHasFired] = useState(false)
  const quotes = useQuotes(params, page)

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

export default memo(MyQuotesChunk)
