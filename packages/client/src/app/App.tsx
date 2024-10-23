import './App.css'
import type { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Fullscreen } from '../widgets'
import { ErrorBoundary } from '../features'

interface AppProps {
  router: ReturnType<typeof createBrowserRouter>
}

function App({ router }: AppProps) {
  // useEffect(() => {
  //   const fetchServerData = async () => {
  //     const url = `http://localhost:${__SERVER_PORT__}`
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     console.log(data)
  //   }

  //   fetchServerData()
  // }, [])
  return (
    <ErrorBoundary>
      <div className="App" style={{ display: 'none', position: 'absolute' }}>
        Вот тут будет жить ваше приложение :)
      </div>
      <Fullscreen />
      <RouterProvider router={router} />
    </ErrorBoundary>
  )
}

export default App
