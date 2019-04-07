import React from 'react';

import loading from '../logo.svg'
import useUser from '../hooks/useUser'
import { AUTH_CONFIG } from '../lib/auth0/variables'
import history from '../lib/history'

function Callback({ location }) {
  const { state, dispatch } = useUser()

  if (!state) {
    dispatch({ type: 'CALLBACK' })
  } else {
    history.replace(AUTH_CONFIG.loginRoute)
  }

  const style = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  }

  return (
    <div style={style}>
      <img src={loading} alt="loading"/>
    </div>
  );
}

export default Callback
