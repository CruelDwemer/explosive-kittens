import App from './App'
import { render, screen } from '@testing-library/react'
import { store } from '../shared/lib'
import { Provider } from 'react-redux'
import { routes } from '../router'

const appContent = 'Вот тут будет жить ваше приложение :)'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

test('Example test', async () => {
  render(
    <Provider store={store}>
      <App router={undefined!} />
    </Provider>
  )
  expect(screen.getByText(appContent)).toBeDefined()
})
