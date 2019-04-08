import React from 'react'
import { ToastContainer } from 'react-toastify'
import ChangePassword from '../components/ChangePassword'

export default function Profile() {
  return (
    <div className="container">
      <ToastContainer />
      <ChangePassword />
    </div>
  )
}
