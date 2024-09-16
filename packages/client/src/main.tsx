import React, { ComponentType } from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'
import { withErrorBoundary } from './features'

if ('serviceWorker' in navigator) {
  try {
    const registration = await navigator.serviceWorker.register('./sw.ts', {
      scope: './',
    })
    if (registration.installing) {
      console.log('Service worker installing')
    } else if (registration.waiting) {
      console.log('Service worker installed')
    } else if (registration.active) {
      console.log('Service worker active')
    }
  } catch (error) {
    console.error(`Registration failed with ${error}`)
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // withErrorBoundary((<App />) as unknown as ComponentType)
  <App />
)
