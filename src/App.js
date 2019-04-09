import React, { Component } from 'react'
import './App.css';
import { UserProvider } from './context/UserContext'
import { QuoteProvider } from './context/QuoteContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <UserProvider>
        <QuoteProvider>
          <ToastContainer />
          <Routes />
        </QuoteProvider>
      </UserProvider>
    );
  }
}

export default App
