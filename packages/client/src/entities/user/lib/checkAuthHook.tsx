import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getInfo } from '../api'

function useCheckAuth(page?: string) {
  const navigate = useNavigate()
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const response = await getInfo()
      if (response.ok && page) {
        navigate(page)
      }
    }

    checkUserLoggedIn()
  }, [])
}

export { useCheckAuth }
