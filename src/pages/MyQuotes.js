import React, { useState } from 'react'
import QuoteList from '../components/QuoteList'
import SearchBar from '../components/SearchBar'

const initialParams = {
  sortBy: '-id',
}

export default function MyQuotes() {
  const [params, setParams] = useState(initialParams)
  const onSearchChange = ({ field, type }) => {
    if (!field) {
      return setParams(initialParams)
    }
    setParams({ ...initialParams, [type]: field })
  }
  return (
    <div className="container">
      <SearchBar
        onChange={onSearchChange}
      />
      <div className="row">
        <QuoteList
          pageSize={25}
          {...params}
        />
      </div>
    </div>
  )
}
