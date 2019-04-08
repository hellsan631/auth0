import React, { Suspense, memo } from 'react'
import QuoteQueryChunk from './QuoteQueryChunk'
import Loading from './Loading'

function QuoteChunk({ params, onScrollFire }) {
  return (
    <Suspense
      fallback={
        <div className="twelve columns">
          <Loading />
        </div>
      }
      maxDuration={500}
    >
      <QuoteQueryChunk
        params={params}
        onScrollFire={onScrollFire}
      />
    </Suspense>
  )
}

export default memo(QuoteChunk)
