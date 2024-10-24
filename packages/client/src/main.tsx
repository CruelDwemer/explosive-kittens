import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'
import { createSsrStore } from './shared/lib'
import { Provider } from 'react-redux'
import ThemeProvider from './features/theme-provider/ThemeProvider'
import { createBrowserRouter } from 'react-router-dom'
import { routes } from './router'

const store = createSsrStore()
const router = createBrowserRouter(routes)

// if ('serviceWorker' in navigator) {
//   try {
//     const registration = await navigator.serviceWorker.register('./sw.ts', {
//       scope: './',
//     })
//     if (registration.installing) {
//       console.log('Service worker installing')
//     } else if (registration.waiting) {
//       console.log('Service worker installed')
//     } else if (registration.active) {
//       console.log('Service worker active')
//     }
//   } catch (error) {
//     console.error(`Registration failed with ${error}`)
//   }
// }
const root = document.getElementById('root') as HTMLElement

const app = (
  <ThemeProvider>
    <Provider store={store}>
      <App router={router} />
    </Provider>
  </ThemeProvider>
)

if (root.innerHTML === '<!--ssr-outlet-->') {
  ReactDOM.createRoot(root).render(app)
} else {
  ReactDOM.hydrateRoot(root, app)
}
