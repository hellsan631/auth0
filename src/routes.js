import React, { Suspense, lazy, Fragment, useState } from 'react'
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom'
import logo from './logo.svg'
import history from './lib/history'
import HeaderBar from './components/HeaderBar'
import useUser from './hooks/useUser'
import PrivateRoute from './components/PrivateRoute';

export const RouteList = [
  {
    path: '/profile',
    component: lazy(() => import('./pages/Profile')),
    title: 'Profile',
    order: 2,
    authenticated: true,
  },
  {
    path: '/callback',
    component: lazy(() => import('./pages/Callback')),
  },
  {
    path: '/',
    component: lazy(() => import('./pages/Home')),
    title: 'Home',
    order: 1,
  },
]

export default function Routes() {
  const [hydrated, setHydrated] = useState(false)
  const { state, dispatch } = useUser()

  if (!hydrated) {
    dispatch({ type: 'HYDRATE' })
    setHydrated(true)
  }

  return (
    <Fragment>
      <Router history={history}>
        <HeaderBar />
        <Suspense
          fallback={<img src={logo} className="App-logo" alt="logo" />}
        >
          <Switch>
            {
              RouteList.map((props) => {
                if (props.authenticated) {
                  return (
                    <PrivateRoute key={props.path} {...props} />
                  )
                }

                return (
                  <Route key={props.path} {...props} />
                )
              })
            }
          </Switch>
        </Suspense>
      </Router>
    </Fragment>
  )
}
