import React, { Fragment } from 'react'
import QuoteList from '../components/QuoteList'

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <QuoteList
          pageSize={25}
        />
      </div>
    </div>
  )
}
