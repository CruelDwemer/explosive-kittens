import React, { ComponentType } from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'
import { withErrorBoundary } from './features'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  withErrorBoundary((<App />) as unknown as ComponentType)
)
