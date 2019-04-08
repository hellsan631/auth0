import React, { Fragment, Suspense, useState, memo, useMemo, useEffect, useCallback } from 'react'
import QuoteChunk from './QuoteChunk'

function QuoteList({ page = 1, pageSize, authorName, text, sortBy }) {
  const params = useMemo(() => {
    return { authorName, text, sortBy, pageSize }
  }, [authorName, text, sortBy, pageSize])
  const [currentPage, setCurrentPage] = useState(page)
  const [pageArray, setPageArray] = useState([{ page }])

  const handleIncrementPage = useCallback(() => {
    setPageArray((pages) => {
      const currentPageNumber = pages[pages.length - 1].page;
      return [
        ...pages,
        { page: currentPageNumber + 1 },
      ]
    })
    setCurrentPage((current) => current + 1)
  }, [])

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
