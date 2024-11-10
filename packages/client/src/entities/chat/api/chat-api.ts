import { CHAT_API_PATH } from '.'
import { BASE_URL } from '../../../shared/constants/api'

export const getChatToken = async (id: number) => {
  return fetch(`${BASE_URL}${CHAT_API_PATH.TOKEN}${id}`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: null,
  })
}

export const sendFile = async (file: File) => {
  const body = new FormData()
  body.append('resource', file)

  const response = await window.fetch(`${BASE_URL}/resources`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    body: body,
  })
  return await response.json()
}

export const getFile = async (path: string) => {
  return await fetch(`${BASE_URL}/resources${path}`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
