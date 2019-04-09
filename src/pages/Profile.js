import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ChangePassword from '../components/ChangePassword'
import UpdateBiography from '../components/UpdateBiography'

export default function Profile() {
  return (
    <div className="container">
      <ToastContainer />
      <ChangePassword />
      <UpdateBiography />
    </div>
  )
}
