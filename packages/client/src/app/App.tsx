import './App.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
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
  Landing,
} from '../pages'
import { Fullscreen } from '../widgets'
import { ErrorBoundary } from '../features'
import { ROUTER_PATH } from '../shared/models'

// TODO: Возможно добавить lazy загрузку
// TODO: Стоит квынести в однельный файл
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTER_PATH.PLAY,
        element: <Play />,
      },
      {
        path: ROUTER_PATH.FINISH,
        element: <Finish />,
      },
      {
        path: ROUTER_PATH.LEADER_BOARD,
        element: <LeaderBoard />,
      },
      {
        path: ROUTER_PATH.LOBBY,
        element: <Lobby />,
      },
      {
        path: ROUTER_PATH.USER,
        element: <User />,
      },
      {
        path: ROUTER_PATH.FORUM,
        element: <Forum />,
      },
      {
        path: '/landing',
        element: <Landing />,
      },
      {
        path: ROUTER_PATH.MAIN,
        element: <Navigate to={ROUTER_PATH.PLAY} />,
      },
    ],
  },
  {
    path: ROUTER_PATH.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTER_PATH.REGISTER,
    element: <Register />,
  },
  {
    path: ROUTER_PATH.NOT_FOUND,
    element: <Error400 />,
  },
  {
    path: ROUTER_PATH.ERROR,
    element: <Error500 />,
  },
  {
    path: '/test-error',
    element: <TestErrorBoundary />,
  },
  {
    path: ROUTER_PATH.ANOTHER,
    element: <Error400 />,
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
