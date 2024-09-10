import './App.css'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import { Login, Play, Register, Finish, Layout } from '../pages'
import { Box } from '@mui/material'

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
  return <RouterProvider router={router} />
}

export default App
