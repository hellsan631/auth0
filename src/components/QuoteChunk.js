import React, { Fragment, useState, useEffect, memo } from 'react'
import { useSearchQuotes } from '../hooks/useQuotes'
import QuoteItem from './QuoteItem'
import ViewportBlock from './ViewportBlock'
import Button from './Button'
import Loading from './Loading'

function QuoteChunk({ params, onScrollFire }) {
  const [hasFired, setHasFired] = useState(false)
  const { quotes } = useSearchQuotes(params)

  if (!quotes || !quotes.length) {
    return (
      <div className="twelve columns">
        <Loading />
      </div>
    )
  }

  const onVisable = () => {
    setHasFired(true)
    onScrollFire()
  }

  return (
    <Fragment>
      {
        quotes.map((quote) => {
          return (
            <QuoteItem
              key={quote.id}
              {...quote}
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
