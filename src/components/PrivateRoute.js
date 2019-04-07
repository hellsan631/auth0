import {
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import useUser from '../hooks/useUser'
import React from 'react'

export default function PrivateRoute({ component: Component, ...rest }) {
  const { state } = useUser()
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
