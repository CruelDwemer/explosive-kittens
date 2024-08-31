const BASE_URL = 'https://ya-praktikum.tech/api/v2'

const loginUser = (data: string) => {
  return fetch(`https://ya-praktikum.tech/api/v2/auth/signin`, {
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
  return fetch(`https://ya-praktikum.tech/api/v2/auth/logout`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export { loginUser, logout }
