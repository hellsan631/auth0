import React, { Suspense, Fragment, memo } from 'react'
import Loading from './Loading'
import MyQuotesChunk from './MyQuotesChunk'
import usePagedArray from '../hooks/usePagedArray'

function MyQuotesList({ params, onScrollFire }) {
  const [pageArray, handleIncrementPage] = usePagedArray(
      params,
      1,
  )
  return (
    <Fragment>
      {
        pageArray.map(({ page }) => {
          return (
            <Suspense
              fallback={
                <div className="twelve columns">
                  <Loading />
                </div>
              }
              key={`my-quote-chunk-${JSON.stringify({ params, page })}`}
            >
              <MyQuotesChunk
                params={params}
                page={page}
                onScrollFire={handleIncrementPage}
              />
            </Suspense>
          )
        })
      }
    </Fragment>
  )
}

export default memo(MyQuotesList)
