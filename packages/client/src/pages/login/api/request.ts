const BASE_URL = 'https://ya-praktikum.tech/api/v2'

// TODO: Переместить в папку entities/user/api
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
// TODO: Переместить в папку entities/user/api
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
