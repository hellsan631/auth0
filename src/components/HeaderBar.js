import styled from 'styled-components'
import React from 'react'
import useUser from '../hooks/useUser'
import Button from './Button'

const HeaderContainer = styled.div`
  padding: 1em;
`

export default function HeaderBar() {
  const { state, loading, dispatch } = useUser()

  const loginClick = () => dispatch({ type: 'LOGIN' })
  const logoutClick = () => dispatch({ type: 'LOGOUT' })

  return (
    <HeaderContainer
      className="container"
    >
      <div className="row">
        <div className="eight columns">Eight</div>
        {
          !state.user &&
          <div className="four columns">
            <Button
              className="u-pull-right"
              onClick={loginClick}
              disabled={loading}
            >
              Login
            </Button>
          </div>
        }
        {
          state.user &&
          <div className="four columns">
            <Button
              className="u-pull-right"
              onClick={logoutClick}
              disabled={loading}
            >
              Logout
            </Button>
          </div>
        }
      </div>
    </HeaderContainer>
  )
}
