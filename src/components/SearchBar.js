import React, { useState } from 'react'
import useDebounce from 'react-use/lib/useDebounce'

export default function SearchBar({
  onChange,
  placeholder = 'ex. Albert',
  defaultField = '',
  defaultRadio = 'authorName',
}) {
  const [search, setSearch] = useState(defaultField)
  const [radio, setRadio] = useState(defaultRadio)
  const onInputChange = ({ target: { value } }) => {
    setSearch(value)
  }

  useDebounce(
    () => {
      onChange({ field: search, type: radio })
    },
    250,
    [search]
  )

  return (
    <div className="row">
      <div className="nine columns">
        <label htmlFor="search">Search</label>
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
