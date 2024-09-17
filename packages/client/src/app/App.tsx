import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Navigate,
} from 'react-router-dom'
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
} from '../pages'
import Fullscreen from '../widgets/fullscreen/fullscreen'
import { ErrorBoundary } from '../features'

// TODO: Возможно добавить lazy загрузку
// TODO: Стоит квынести в однельный файл
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
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
        path: '/lobby/:id',
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
      {
        path: '/',
        element: <Navigate to="play" />,
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
    path: '*',
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
