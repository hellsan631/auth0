import React, { Fragment } from 'react'
import { useAllQuotes } from '../hooks/useQuotes';
import QuoteList from '../components/QuoteList';

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <QuoteList />
      </div>
    </div>
  )
}
