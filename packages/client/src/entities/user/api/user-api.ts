const BASE_URL = 'https://ya-praktikum.tech/api/v2'

const login = (data: string) => {
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

const logout = () => {
  return fetch(`${BASE_URL}/auth/logout`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

const register = (data: string) => {
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

const getInfo = () => {
  return fetch(`${BASE_URL}/auth/user`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
  })
}

export { login, logout, register, getInfo }
