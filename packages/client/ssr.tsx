import React from 'react'
import App from './src/app/App'
import { renderToString } from 'react-dom/server'
import type { Request, Response } from 'express'
import { Provider } from 'react-redux'
import { createSsrStore } from './src/shared/lib'
import {
  createStaticRouter,
  createStaticHandler,
} from 'react-router-dom/server'

export function render(req: Request, res: Response) {
  const store = createSsrStore()
  const initialState = store.getState()

  return {
    html: renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    ),
    preloadedState: initialState,
  }
}
