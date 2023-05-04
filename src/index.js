import reportWebVitals from './reportWebVitals'
import { HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './colorSettings.css'
import { App } from './App'
import React from 'react'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)

reportWebVitals()
