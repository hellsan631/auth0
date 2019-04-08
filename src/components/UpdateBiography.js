import React, { useState } from 'react'
import useUser from '../hooks/useUser'
import Button from '../components/Button'

export default function UpdateBiography({ maxLength = 250 }) {
  const { state, loading, dispatch } = useUser()
  const [biography, setBiography] = useState('')
  const handleBiographyChange = ({ target: { value } }) => {
    setBiography(value)
  }
  
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
          className="u-full-width" 
          placeholder={`Write a little something about yourself, ${state.user.name}`}
          id="biography"
        />
        <div className="u-pull-right">{biography.length}/{maxLength}</div>
      </div>
    </div>
  )
}
