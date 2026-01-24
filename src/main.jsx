import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { PreferencesProvider } from './contexts/PreferencesContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <PreferencesProvider>
          <App />
        </PreferencesProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
