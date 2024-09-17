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
} from '../pages'
import Fullscreen from '../widgets/fullscreen/fullscreen'
import { ErrorBoundary } from '../features'

// TODO: Возможно добавить lazy загрузку
const router = createBrowserRouter([
  {
    path: '/',
    // element: (
    //   <div>
    //     <Link to="/login">Login</Link>
    //     <br />
    //     <Link to="/register">Register</Link>
    //     <br />
    //     <Link to="/400">Error 400</Link>
    //     <br />
    //     <Link to="/500">Error 500</Link>
    //     <br />
    //     <Link to="/play">Play</Link>
    //     <br />
    //     <Link to="/finish">Finish</Link>
    //     <br />
    //     <Link to="/test-error">Test Error Boundary</Link>
    //     <br />
    //     <Link to="/leader-board">Leaderboard</Link>
    //   </div>
    // ),
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
        path: '/lobby',
        element: <Lobby />,
      },
      {
        path: '/user',
        element: <User />,
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
    path: '/play',
    element: <Play />,
  },
  {
    path: '/finish',
    element: <Finish />,
  },
  {
    path: '/test-error',
    element: <TestErrorBoundary />,
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
