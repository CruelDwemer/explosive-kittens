import './App.css'
// import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import type { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
// import {
//   Login,
//   Play,
//   Register,
//   Finish,
//   Lobby,
//   User,
//   TestErrorBoundary,
//   LeaderBoard,
//   Error400,
//   Error500,
//   Layout,
//   Forum,
//   Landing,
// } from '../pages'
import { Fullscreen } from '../widgets'
import { ErrorBoundary } from '../features'
// import { ROUTER_PATH } from '../shared/models'
// import type { RouteObject } from 'react-router-dom'

interface AppProps {
  router: ReturnType<typeof createBrowserRouter>
}

// TODO: Возможно добавить lazy загрузку
// TODO: Стоит квынести в однельный файл

// const router = createBrowserRouter(routes)

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
