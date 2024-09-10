import './App.css'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import { Login, Play, Register, Finish, LeaderBoard } from '../pages'

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
        <Link to="/leader-board">Leaderboard</Link>
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
    path: '/leader-board',
    element: <LeaderBoard />,
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
