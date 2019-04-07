import React, { Fragment, useState } from 'react'
import { useAllQuotes } from '../hooks/useQuotes'
import QuoteItem from './QuoteItem'
import ViewportBlock from './ViewportBlock'
import Button from './Button';

export default function QuoteQueryChunk({ params, onScrollFire }) {
  const [hasFired, setHasFired] = useState(false)
  const quotes = useAllQuotes(params)
  if (!quotes || !quotes.length) {
    return null
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
