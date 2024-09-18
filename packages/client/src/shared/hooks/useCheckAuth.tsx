import { useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserInfoQuery } from '../../entities/user/api'
import { ROUTER_PATH } from '../models'

function useCheckAuth() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  useLayoutEffect(() => {
    const checkUserLoggedIn = async () => {
      const path = document.location.pathname as ROUTER_PATH
      const isNeedAuthRoute = ![
        ROUTER_PATH.LOGIN,
        ROUTER_PATH.REGISTER,
      ].includes(path)

      setIsLoading(true)
      const response = await getUserInfoQuery().finally(() => {
        setIsLoading(false)
      })
      if (!response.ok) {
        if (isNeedAuthRoute) {
          navigate(ROUTER_PATH.LOGIN)
        }
      } else {
        if (!isNeedAuthRoute) {
          navigate(ROUTER_PATH.PLAY)
        }
      }
    }

    checkUserLoggedIn()
  }, [])
  return { isLoading }
}

export { useCheckAuth }
