import React, { Component } from 'react'
import './App.css';
import { UserProvider } from './context/UserContext';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <Routes />
      </UserProvider>
    );
  }
}

export default App
