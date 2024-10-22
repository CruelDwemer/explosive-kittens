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
import { routes } from './src/router'

const handler = createStaticHandler(routes)

export function createFetchRequest(req: Request, res: Response) {
  const origin = `${req.protocol}://${req.get('host')}`
  const url = new URL(req.originalUrl || req.url, origin)

  const controller = new AbortController()
  res.on('close', () => controller.abort())

  const headers = new Headers()

  for (const [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (const value of values) {
          headers.append(key, value)
        }
      } else {
        headers.set(key, values)
      }
    }
  }

  const init = {
    method: req.method,
    headers,
    signal: controller.signal,
    body: undefined,
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = req.body
  }

  return new Request(url.href, init)
}

export async function render(req: Request, res: Response) {
  const store = createSsrStore()
  const initialState = store.getState()

  const fetchRequest = createFetchRequest(req, res)
  const context = await handler.query(fetchRequest)

  if (context instanceof Response) {
    throw context
  }

  const router = createStaticRouter(handler.dataRoutes, context)

  return {
    html: renderToString(
      <Provider store={store}>
        <App router={router} />
      </Provider>
    ),
    preloadedState: initialState,
  }
}
