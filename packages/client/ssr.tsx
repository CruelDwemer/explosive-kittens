import App from './src/app/App'
import { renderToString } from 'react-dom/server'

export function render() {
  return renderToString(<App />)
}
