import './App.css'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import {
  Login,
  Play,
  Register,
  Finish,
  Lobby,
  User,
  TestErrorBoundary,
  LeaderBoard,
  Error400,
  Error500,
  Layout,
  Forum,
  Spinner,
} from '../pages'
import Fullscreen from '../widgets/fullscreen/fullscreen'
import { ErrorBoundary } from '../features'
import { useEffect } from 'react'

// TODO: Возможно добавить lazy загрузку
// TODO: Стоит квынести в однельный файл

const redirect = (path: string) => {
  window.location.href = path
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        loader: async () => redirect('/spinner'),
      },
      {
        path: '/play',
        element: <Play />,
      },
      {
        path: '/finish',
        element: <Finish />,
      },
      {
        path: '/leader-board',
        element: <LeaderBoard />,
      },
      {
        path: '/lobby',
        element: <Lobby />,
      },
      {
        path: '/user',
        element: <User />,
      },
      {
        path: '/forum',
        element: <Forum />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/400',
    element: <Error400 />,
  },
  {
    path: '/500',
    element: <Error500 />,
  },
  {
    path: '/test-error',
    element: <TestErrorBoundary />,
  },
  {
    path: '/spinner',
    element: <Spinner />,
  },
])

function App() {
  // useEffect(() => {
  //   const fetchServerData = async () => {
  //     const url = `http://localhost:${__SERVER_PORT__}`
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     console.log(data)
  //   }

  //   fetchServerData()
  // }, [])

  // if (window.location.pathname === '/') {
  //   console.log('REDIRECT')
  //   window.location.href = '/spinner'
  // }

  // useEffect(() => {
  //   if (window.location.pathname === '/') {
  //     console.log('REDIRECT')
  //     window.location.href = '/spinner'
  //   }
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
