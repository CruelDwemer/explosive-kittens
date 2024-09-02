const BASE_URL = 'https://ya-praktikum.tech/api/v2'

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
