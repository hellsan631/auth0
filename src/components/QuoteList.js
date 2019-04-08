import React, { Fragment, Suspense, useState, memo, useEffect } from 'react'
import QuoteChunk from './QuoteChunk'

function QuoteList({ page = 1, pageSize, authorName, text, sortBy }) {
  const params = { authorName, text, sortBy, pageSize }
  const [currentPage, setCurrentPage] = useState(page)
  const [pageArray, setPageArray] = useState([{ page }])
  const handleIncrementPage = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage)
    setPageArray([...pageArray, { page: newPage }])
  }

  useEffect(() => {
    if (pageArray.length > 1) {
      setPageArray([{ page }])
    }
  }, [authorName, text, sortBy, pageSize])

  return (
    <Fragment>
      {
        pageArray.map(({ page }) => {
          return (
            <QuoteChunk
              key={`quote-chunk-${JSON.stringify({ ...params, page })}`}
              params={{
                ...params,
                page,
              }}
              onScrollFire={handleIncrementPage}
            />
          )
        })
      }
    </Fragment>
  )
}

export default memo(QuoteList)
