import {
  Route,
  Redirect,
} from 'react-router-dom'
import useUserContext from '../hooks/useUserContext'
import React from 'react'

export default function PrivateRoute({ component: Component, ...rest }) {
  const { state } = useUserContext()
  return (
    <Route
      {...rest}
      render={(props) => {
        return state.user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/home',
              state: { from: props.location },
            }}
          />
        )
      }}
    />
  )
}
