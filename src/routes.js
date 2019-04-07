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

const Login = lazy(() => import('./pages/Login'))
const Callback = lazy(() => import('./pages/Callback'))

export default function Routes() {
  const [hydrated, setHydrated] = useState(false)
  const { state, dispatch } = useUser()

  if (!hydrated) {
    dispatch({ type: 'HYDRATE' })
    setHydrated(true)
  }

  return (
    <Fragment>
      <HeaderBar />
      <Router history={history}>
        <Suspense
          fallback={<img src={logo} className="App-logo" alt="logo" />}
        >
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/callback" component={Callback} />
          </Switch>
        </Suspense>
      </Router>
    </Fragment>
  )
}
