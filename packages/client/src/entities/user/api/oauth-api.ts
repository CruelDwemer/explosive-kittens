import { BASE_URL } from '../../../shared/constants/api'

export const getYandexServiceId = async (redirect_uri: string) => {
  const response = await fetch(
    `${BASE_URL}/oauth/yandex/service-id?redirect_uri=${redirect_uri}`,
    {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const data = await response.json()
  return data
}

export const signUpWithYandex = (code: string, redirect_uri: string) => {
  return fetch(`${BASE_URL}/oauth/yandex`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code: code,
      redirect_uri: redirect_uri,
    }),
  })
}
