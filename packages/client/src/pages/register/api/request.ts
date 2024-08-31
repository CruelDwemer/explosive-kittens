// const BASE_URL = "https://ya-praktikum.tech/api/v2";

const registerUser = (data: string) => {
  // console.log("STR DATA: ", data);
  return fetch(`https://ya-praktikum.tech/api/v2/auth/signup`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })
}

export { registerUser }
