import React from 'react'
import useUser from '../hooks/useUser'
import Button from '../components/Button'

export default function UpdateAvatar() {
  const { state, loading, dispatch } = useUser()
  
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
