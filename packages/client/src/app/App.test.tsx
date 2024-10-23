import App from './App'
import { render, screen } from '@testing-library/react'
import { store } from '../shared/lib'
import { Provider } from 'react-redux'

const appContent = 'Вот тут будет жить ваше приложение :)'

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') } as Response)
)

test('Example test', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(screen.getByText(appContent)).toBeDefined()
})
