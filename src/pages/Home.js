import React, { useState } from 'react'
import QuoteList from '../components/QuoteList'
import SearchBar from '../components/SearchBar'

export default function Home() {
  const [params, setParams] = useState({})
  const onSearchChange = ({ field, type }) => {
    if (!field) {
      return setParams({})
    }
    setParams({ [type]: field })
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
