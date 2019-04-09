import React, { useState } from 'react'
import useUserContext from '../hooks/useUserContext'
import Button from '../components/Button'
import useDebounce from 'react-use/lib/useDebounce'

export default function UpdateBiography({ maxLength = 250 }) {
  const { state: { user }, loading, dispatch } = useUserContext()
  const [biography, setBiography] = useState(user.user_metadata.biography || '')
  const handleBiographyChange = ({ target: { value } }) => {
    setBiography(value)
  }

  useDebounce(
    () => {
      if (user.user_metadata.biography !== biography) {
        dispatch({ type: 'UPDATE_METADATA', payload: { biography } })
      }
    },
    1000,
    [biography]
  )
  
  return (
    <div className="row">
      <div className="four columns">
        Update Biography
      </div>
      <div className="eight columns">
        <label htmlFor="biography">Biography</label>
        <textarea 
          maxLength={maxLength}
          onChange={handleBiographyChange}
          value={biography}
          className="u-full-width" 
          placeholder={`Write a little something about yourself, ${user.name}`}
          id="biography"
        />
        <div className="u-pull-right">{biography.length}/{maxLength}</div>
      </div>
    </div>
  )
}
