import { BASE_URL } from '../../../shared/constants/api'

export const createPlay = (title: string) => {
  return fetch(`${BASE_URL}/chats`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
    }),
  })
}

export const getUserLobby = () => {
  return fetch(`${BASE_URL}/chats`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const playerList = (chatId: number) => {
  return fetch(`${BASE_URL}/chats/${chatId}/users`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
  })
}

export const addUserToChat = (chatId: number, userId: number) => {
  return fetch(`${BASE_URL}/chats/users`, {
    method: 'PUT',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      users: [userId],
      chatId: chatId,
    }),
  })
}

export const deleteUserFromChat = (chatId: number, userId: number) => {
  return fetch(`${BASE_URL}/chats/users`, {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      users: [userId],
      chatId: chatId,
    }),
  })
}

export const randomWord = () => {
  return window.fetch(
    `http://free-generator.ru/generator.php?action=word&type=1`,
    {
      method: 'GET',
      // credentials: 'include',
      // mode: 'no-cors',
      // headers: {
      //   'Access-Control-Allow-Origin': '*'
      // }
    }
  )
}
