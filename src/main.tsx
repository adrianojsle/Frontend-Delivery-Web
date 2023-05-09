import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomeScreen from './pages/Home/home.screen'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HomeScreen />
  </React.StrictMode>,
)
