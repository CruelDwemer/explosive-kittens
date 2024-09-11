import './App.css'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import { Login, Play, Register, Finish, Lobby } from '../pages'
import Fullscreen from '../widgets/fullscreen/fullscreen'
import { MessageBubble, MessagesContainer } from '../entities/chat/ui'

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
    path: '/lobby',
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
      <div className="App" style={{ display: 'none', position: 'absolute' }}>
        Вот тут будет жить ваше приложение :)
      </div>
      <MessagesContainer>
        <MessageBubble
          messageId={1}
          userName={'Вася'}
          messageContent={'не знаю'}
        />
        <MessageBubble messageId={2} userName={'Петя'} messageContent={'ого'} />
        <MessageBubble
          messageId={3}
          userName={'Коля'}
          messageContent={'класс'}
        />
      </MessagesContainer>
      <Fullscreen />
      <RouterProvider router={router} />
    </>
  )
}

export default App
