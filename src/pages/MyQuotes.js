import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function MyQuotes() {
  
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
    </div>
  )
}
