import App from './App'
import { render, screen } from '@testing-library/react'
import { store } from '../shared/lib'
import { Provider } from 'react-redux'
import ThemeProvider from '../features/theme-provider'
import React from 'react'
const appContent = 'Вот тут будет жить ваше приложение :)'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

test('Example test', async () => {
  render(
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  )
  expect(screen.getByText(appContent)).toBeDefined()
})
