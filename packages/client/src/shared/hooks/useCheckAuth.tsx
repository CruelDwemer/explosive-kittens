import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserInfoQuery } from '../../entities/user/api'
import { ROUTER_PATH } from '../models'

function useCheckAuth() {
  const navigate = useNavigate()
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const response = await getUserInfoQuery()
      if (!response.ok) {
        navigate(ROUTER_PATH.LOGIN)
      } else {
        const path = document.location.pathname as ROUTER_PATH
        if ([ROUTER_PATH.LOGIN, ROUTER_PATH.REGISTER].includes(path)) {
          navigate(ROUTER_PATH.PLAY)
        }
      }
    }

    checkUserLoggedIn()
  }, [])
}

export { useCheckAuth }
