import { registerUser } from '../api/request'

const handleRegiser = async (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll('input')
  const data: Record<string, string> = {}
  inputs.forEach((input: HTMLInputElement) => {
    data[input.name] = input.value
  })
  const userData = JSON.stringify(data)
  const response = await fetch('https://ya-praktikum.tech/api/v2/auth/signup', {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'content-type': 'application/json',
    },
    body: userData,
  })
  if (response.status === 200) {
    console.log('Регистрация успешно выполнена.')
  }
  // console.log(response);
}

export { handleRegiser }

// const handleRegiser = async (form: HTMLFormElement) => {
//     const inputs = form.querySelectorAll('input')
//     const data: Record<string, string> = {}
//     inputs.forEach((input: HTMLInputElement) => {
//       data[input.name] = input.value
//     })
//     const response = await registerUser(JSON.stringify(data))
//     if (response.status === 200) {
//       console.log('Регистрация успешно выполнена.')
//     }
//     // console.log(response);
//   }
