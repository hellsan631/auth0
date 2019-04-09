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

  // If we've reached the end of the quotes API generated list
  // page zero is an indication that quotes are coming from the user,
  // which is a different data source.
  // We want our infinite scroll to trigger to get results from the quotes apis as well.
  if (!quotes.length && page !== 0) {
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
