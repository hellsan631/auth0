import React from 'react'
import './App.css';
import { UserProvider } from './context/UserContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './routes'

function App() {
  return (
    <UserProvider>
      <ToastContainer />
      <Routes />
    </UserProvider>
  )
}

export default App
