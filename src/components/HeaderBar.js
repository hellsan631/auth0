import styled from 'styled-components'
import React from 'react'
import useUser from '../hooks/useUser'
import Button from './Button'
import { withRouter } from 'react-router-dom'
import { RouteList } from '../routes'
import HeaderItem from './HeaderItem'

const HeaderContainer = styled.div`
  padding: 1em;

  .link-container {
    flex-direction: row;
  }
`

function HeaderBar({ location, match }) {
  // console.log(location, match)
  const { state, loading, dispatch } = useUser()

  const loginClick = () => dispatch({ type: 'LOGIN' })
  const logoutClick = () => dispatch({ type: 'LOGOUT' })

  // Placed inside func because RouteList is undefined outside of func scope
  const SortedRouteList = RouteList
      .filter(({ title, order }) => title && order)
      .sort((alpha, bravo) => alpha.order - bravo.order)

  return (
    <HeaderContainer
      className="container"
    >
      <div className="row">
        <div className="eight columns link-container">
          {
            SortedRouteList.map((route) => {
              if (
                (!state.user && route.authenticated)
              ) {
                return null
              }

              return (
                <HeaderItem
                  key={route.path}
                  isActive={route.path === location.pathname}
                  {...route}
                />
              )
            })
          }
        </div>
        {
          !state.user &&
          <div className="four columns">
            <Button
              className="u-pull-right"
              onClick={loginClick}
              disabled={loading}
              primary
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

export default withRouter(HeaderBar)
