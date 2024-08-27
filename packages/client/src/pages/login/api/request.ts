const BASE_URL = 'https://ya-praktikum.tech/api/v2'

const loginUser = (requestString: string) => {
  return fetch(`${BASE_URL}/auth/signin${requestString}`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
  })
}

export { loginUser }
