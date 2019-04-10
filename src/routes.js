import React, { Suspense, lazy, Fragment, useState } from 'react'
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom'
import history from './lib/history'
import HeaderBar from './components/HeaderBar'
import useUserContext from './hooks/useUserContext'
import PrivateRoute from './components/PrivateRoute';
import Loading from './components/Loading';

export const RouteList = [
  {
    path: '/profile',
    component: lazy(() => import('./pages/Profile')),
    title: 'Profile',
    order: 3,
    authenticated: true,
  },
  {
    path: '/my-quotes',
    component: lazy(() => import('./pages/MyQuotes')),
    title: 'My Quotes',
    order: 2,
    authenticated: true,
  },
  {
    path: '/edit-quote',
    component: lazy(() => import('./pages/EditQuote')),
    authenticated: true,
  },
  {
    path: '/add-quote',
    component: lazy(() => import('./pages/AddQuote')),
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
  const { state, dispatch } = useUserContext()

  if (!hydrated) {
    dispatch({
      type: 'HYDRATE',
    })
    setHydrated(true)
  }

  if (!state.hydrated) {
    return (<Loading />)
  }

  return (
    <Fragment>
      <Router history={history}>
        <HeaderBar />
        <Suspense
          fallback={<Loading />}
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
