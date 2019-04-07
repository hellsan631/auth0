import React, { Suspense } from 'react'
import QuoteQueryChunk from './QuoteQueryChunk'
import Loading from './Loading'

export default function QuoteChunk({ params, onScrollFire }) {
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
