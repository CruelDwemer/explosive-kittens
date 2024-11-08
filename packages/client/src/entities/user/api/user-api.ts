import { BASE_URL } from '../../../shared/constants/api'

export const loginUser = (data: string) => {
  return fetch(`${BASE_URL}/auth/signin`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })
}

export const logout = () => {
  return fetch(`${BASE_URL}/auth/logout`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const registerUser = (data: string) => {
  return fetch(`${BASE_URL}/auth/signup`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })
}

export const userSearch = (login: string) => {
  return fetch(`${BASE_URL}/user/search`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login: login,
    }),
  })
}

export const getUserInfo = async () => {
  const response = await fetch(`${BASE_URL}/auth/user`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  return data
}

export const getUserInfoQuery = async () => {
  return fetch(`${BASE_URL}/auth/user`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const changePassword = async (data: {
  oldPassword: string
  newPassword: string
}) => {
  const response = await fetch(`${BASE_URL}/user/password`, {
    method: 'PUT',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (response.ok) {
    alert('Пароль успешно изменен')
  } else {
    alert('Произошла ошибка')
  }
}

export const updateAvatar = async (data: FormData) => {
  const response = await fetch(`${BASE_URL}/user/profile/avatar`, {
    method: 'PUT',
    mode: 'cors',
    credentials: 'include',
    body: data,
  })

  if (response.ok) {
    alert('Аватар успешно изменен')
  } else {
    alert('Произошла ошибка')
  }

  return response
}

type UserInfo = {
  userId: number,
  first_name: string,
  second_name: string,
  display_name: string,
  avatar?: string
}

export const saveUserToDb = async (data: UserInfo) => {

  const url = `http://localhost:3001/api/user`
  
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
}
