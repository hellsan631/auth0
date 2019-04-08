import React, { useState } from 'react'

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
    onChange({ field: value, type: radio })
  }

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
          style={{ width: '80%' }}
        />
      </div>
    </div>
  )
}
