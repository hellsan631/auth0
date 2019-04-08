import React, { Fragment, Suspense, useState, memo } from 'react'
import QuoteChunk from './QuoteChunk'

function QuoteList({ page = 1, ...params }) {
  const [currentPage, setCurrentPage] = useState(page)
  const [pageArray, setPageArray] = useState([{ page }])
  const handleIncrementPage = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage)
    setPageArray([...pageArray, { page: newPage }])
  }

  return (
    <Fragment>
      {
        pageArray.map((paramSet) => {
          return (
            <QuoteChunk
              key={`page-${paramSet.page}`}
              params={{
                ...paramSet,
                ...params,
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
