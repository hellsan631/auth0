import React from 'react'
import useUser from '../hooks/useUser'
import Button from '../components/Button'

export default function ChangePassword() {
  const { state, loading, dispatch } = useUser()
  const changePassword = () => dispatch({ type: 'CHANGE_PASSWORD' })

  return (
    <div className="row">
      <div className="four columns">
        Change Password
      </div>
      <div className="eight columns">
        <Button
          onClick={changePassword}
          disabled={loading || state.sent}
          primary
        >
          {
            state.sent ? 'Email Sent' : 'Send Reset Email'
          }
        </Button>
      </div>
    </div>
  )
}
