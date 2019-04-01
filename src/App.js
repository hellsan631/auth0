import React, { Component, Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { UserProvider } from './context/UserContext';

const Login = lazy(() => import('./pages/Login'))

class App extends Component {
  render() {
    return (
      <UserProvider>
        <Router>
          <Suspense
            fallback={<img src={logo} className="App-logo" alt="logo" />}
          >
            <Switch>
              <Route path="/login" component={Login} />
            </Switch>
          </Suspense>
        </Router>
      </UserProvider>
    );
  }
}

export default App
