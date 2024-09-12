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
} from '../pages'
import Fullscreen from '../widgets/fullscreen/fullscreen'
import { ErrorBoundary } from '../features'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/register">Register</Link>
        <br />
        <Link to="/play">Play</Link>
        <br />
        <Link to="/finish">Finish</Link>
        <br />
        <Link to="/test-error">Test Error Boundary</Link>
      </div>
    ),
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
  {
    path: '/lobby',
    element: <Lobby />,
  },
  {
    path: '/user',
    element: <User />,
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
