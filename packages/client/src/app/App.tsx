import './App.css'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import { Login, Play, Register, Finish, Lobby } from '../pages'
import Fullscreen from '../widgets/fullscreen/fullscreen'

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
    path: '/lobby-test',
    element: <Lobby />,
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
    <>
      <Fullscreen />
      <RouterProvider router={router} />
    </>
  )
}

export default App
