import React, { Fragment, Suspense, useState } from 'react'
import QuoteChunk from './QuoteChunk'

export default function QuoteList({ page = 1, ...initial }) {
  const [currentPage, setCurrentPage] = useState(page)
  const [params, setParams] = useState([{ page, ...initial }])
  const handleIncrementPage = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage)
    setParams([...params, { page: newPage, ...initial }])
  }

  return (
    <Fragment>
      {
        params.map((paramSet) => {
          return (
            <QuoteChunk
              key={`page-${paramSet.page}`}
              params={paramSet}
              onScrollFire={handleIncrementPage}
            />
          )
        })
      }
    </Fragment>
  )
}
