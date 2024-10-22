import { useLayoutEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getUserInfoQuery, signUpWithYandex } from '../../entities/user/api'
import { ROUTER_PATH } from '../models'

function useCheckAuth() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [searchParams] = useSearchParams()

  useLayoutEffect(() => {
    const checkUserLoggedIn = async () => {
      const code = searchParams.get('code')
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
          if (code) {
            const response = await signUpWithYandex(
              code,
              'http://localhost:3000'
            )
            if (response.ok) {
              checkUserLoggedIn()
            }
          } else {
            navigate(ROUTER_PATH.LOGIN)
          }
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
