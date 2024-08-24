import { useEffect } from 'react'
import './App.css'

import Login from './pages/login/login'
import Register from './pages/register/register'
//

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
    <div className="App">
      <Register />
    </div>
  )
}

export default App
