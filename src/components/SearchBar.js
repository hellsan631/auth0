import React, { useState } from 'react'
import useDebounce from 'react-use/lib/useDebounce'

export default function SearchBar({
  onChange,
  placeholder = 'ex. Albert',
  defaultField = '',
}) {
  const [search, setSearch] = useState(defaultField)
  const onInputChange = ({ target: { value } }) => {
    setSearch(value)
  }

  useDebounce(
      () => {
        onChange({ field: search, type: 'authorName' })
      },
      250,
      [search]
  )

  return (
    <div className="row">
      <div className="nine columns">
        <label htmlFor="search">Search By Author Name</label>
        <input
          type="search"
          value={search}
          onChange={onInputChange}
          placeholder={placeholder}
          id="search"
          className="u-full-width"
        />
      </div>
    </div>
  )
}
