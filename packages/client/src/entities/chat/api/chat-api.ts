import { CHAT_API_PATH } from '.'
import { SOCKET_URL } from '../../../shared/constants/api'

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
  return fetch(`${SOCKET_URL}${CHAT_API_PATH.TOKEN}${id}`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
