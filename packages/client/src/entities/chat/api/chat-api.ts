import { CHAT_API_PATH } from '.'
import { BASE_URL } from '../../../shared/constants/api'

export type Message = {
  chat_id: number
  content: string
  file: string
  id: number
  is_read: boolean
  time: string
  type: 'message'
  user_id: number
}

export const getChatToken = async (id: number) => {
  console.log(`${BASE_URL}${CHAT_API_PATH.TOKEN}${id}`, '--')
  return fetch(`${BASE_URL}${CHAT_API_PATH.TOKEN}${id}`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
