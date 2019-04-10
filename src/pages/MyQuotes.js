import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MyQuotesList from '../components/MyQuotesList'
import useUserContext from '../hooks/useUserContext'

export default function MyQuotes() {
  const { state: { user } } = useUserContext()
  const params = {
    userId: user.user_id,
    pageSize: 25,
  }
  return (
    <div className="container">
      <div className="row">
        <div className="twelve columns">
          <Link
            to="/add-quote"
            className="button button-primary u-pull-right"
          >
            New Quote
          </Link>
        </div>
      </div>
      <div className="row">
        <MyQuotesList
          params={params}
        />
      </div>
    </div>
  )
}
