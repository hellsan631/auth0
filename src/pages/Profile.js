import React, { Fragment } from 'react'
import useUser from '../hooks/useUser'
import Button from '../components/Button'
import { ToastContainer } from 'react-toastify'
import ChangePassword from '../components/ChangePassword'
import UpdateAvatar from '../components/UpdateAvatar'

export default function Profile() {
  const { state, loading, dispatch } = useUser()

  return (
    <div className="container">
      <ToastContainer />
      <ChangePassword />
      <UpdateAvatar />
    </div>
  )
}
