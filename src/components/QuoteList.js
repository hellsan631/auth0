import React, {
  Fragment, memo, useMemo,
} from 'react'
import QuoteChunk from './QuoteChunk'
import usePagedArray from '../hooks/usePagedArray'

function QuoteList({ pageSize, authorName, text, sortBy, startingPage = 1 }) {
  const memoizedFields = [pageSize, authorName, text, sortBy]
  const params = useMemo(() => {
    return { authorName, text, sortBy, pageSize }
  }, memoizedFields)
  const [pageArray, handleIncrementPage] = usePagedArray(
      memoizedFields,
      startingPage,
  )

  return (
    <Fragment>
      {
        pageArray.map(({ page }) => {
          return (
            <QuoteChunk
              key={`quote-chunk-${JSON.stringify({ params, page })}`}
              params={params}
              page={page}
              onScrollFire={handleIncrementPage}
            />
          )
        })
      }
    </Fragment>
  )
}

export default memo(QuoteList)
