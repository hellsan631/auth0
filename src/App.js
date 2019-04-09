import React, { Component } from 'react'
import './App.css';
import { UserProvider } from './context/UserContext'
import { QuoteProvider } from './context/QuoteContext'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <UserProvider>
        <QuoteProvider>
          <Routes />
        </QuoteProvider>
      </UserProvider>
    );
  }
}

export default App
