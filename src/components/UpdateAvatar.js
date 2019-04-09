import React from 'react'
import useUserContext from '../hooks/useUserContext'
import Button from '../components/Button'

export default function UpdateAvatar() {
  const { state, loading, dispatch } = useUserContext()

  return (
    <div className="row">
      <div className="four columns">
        Update Avatar
      </div>
      <div className="eight columns">
        Hi
      </div>
    </div>
  )
}
