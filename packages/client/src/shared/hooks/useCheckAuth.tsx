import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserInfoQuery } from '../../entities/user/api'

function useCheckAuth() {
  const navigate = useNavigate()
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const response = await getUserInfoQuery()
      if (response.ok) {
        navigate('/play')
      } else {
        navigate('/login')
      }
    }

    checkUserLoggedIn()
  }, [])
}

export { useCheckAuth }
