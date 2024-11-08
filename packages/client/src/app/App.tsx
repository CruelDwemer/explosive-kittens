import './App.css'
import type { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Fullscreen } from '../widgets'
import { ErrorBoundary } from '../features'
import { useEffect } from 'react'

interface AppProps {
  router: ReturnType<typeof createBrowserRouter>
}

function App({ router }: AppProps) {

  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:3001/api/topics/`
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          name: "My new topic"
        })
      })
      console.log('RESPONSE: ', response)
      // const data = await response.json()
      // console.log('RESULT: ', data)
    }

    // const response = await fetch(url, {
    //   method: 'POST',
    //   body: {
    //     //@ts-expect-error error error
    //     name: "My new topic"
    //   }
    // })

    fetchServerData()
  }, [])

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
