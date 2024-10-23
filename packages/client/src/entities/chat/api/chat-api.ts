import { CHAT_API_PATH } from '.'
import { BASE_URL } from '../../../shared/constants/api'

export const getChatToken = async (id: number) => {
  return fetch(`${BASE_URL}${CHAT_API_PATH.TOKEN}${id}`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
