import './App.css'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import { Login, Register, Error400, Error500, Play, Finish } from '../pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/register">Register</Link>
        <br />
        <Link to="/error400">Error 400</Link>
        <br />
        <Link to="/error500">Error 500</Link>
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
    path: '/error400',
    element: <Error400 />,
  },
  {
    path: '/error500',
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
    <div>
      <div className="App" style={{ display: 'none', position: 'absolute' }}>
        Вот тут будет жить ваше приложение :)
      </div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
