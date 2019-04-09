import React from 'react'
import ChangePassword from '../components/ChangePassword'
import UpdateBiography from '../components/UpdateBiography'

export default function Profile() {
  return (
    <div className="container">
      <ChangePassword />
      <UpdateBiography />
    </div>
  )
}
