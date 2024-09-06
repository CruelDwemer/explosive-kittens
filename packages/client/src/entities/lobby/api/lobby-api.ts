import { BASE_URL } from '../..'

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
