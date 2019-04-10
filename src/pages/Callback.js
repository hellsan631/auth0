import React from 'react';
import useUserContext from '../hooks/useUserContext'
import { AUTH_CONFIG } from '../lib/auth0/variables'
import history from '../lib/history'
import Loading from '../components/Loading'

function Callback({ location }) {
  const { state, dispatch } = useUserContext()

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
      <Loading />
    </div>
  );
}

export default Callback
