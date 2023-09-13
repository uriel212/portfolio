import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './MainPage'
import Navbar from './components/Navbar/Navbar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
      <MainPage />
  </React.StrictMode>,
)
