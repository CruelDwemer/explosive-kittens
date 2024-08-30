const BASE_URL = 'https://ya-praktikum.tech/api/v2'

const loginUser = (data: string) => {
  return fetch(`https://ya-praktikum.tech/api/v2/auth/signin`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })
}

export { loginUser }
