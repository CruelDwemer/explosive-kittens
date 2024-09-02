import { login, logout, register } from '../api'

const registerUser = async (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll('input')
  const data: Record<string, string> = {}
  inputs.forEach((input: HTMLInputElement) => {
    data[input.name] = input.value
  })
  const response = await register(JSON.stringify(data))
  const result = await response.json()
  if (response.status === 200) {
    console.log('Регистрация успешно выполнена: ', result)
  } else {
    console.log('Ошибка регистрации: ', result)
  }
}

const loginUser = async (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll('input')
  const data: Record<string, string> = {}
  inputs.forEach((input: HTMLInputElement) => {
    data[input.name] = input.value
  })

  const response = await login(JSON.stringify(data))

  if (response.status === 200) {
    console.log('Вход успешно выполнен.', response)
  } else {
    const result = await response.json()
    console.log('Ошибка входа: ', result)
  }
}

const logoutUser = async () => {
  const response = await logout()
  // const result = await response.json();
  if (response.status != 200) {
    const result = await response.json()
    console.log('Ошибка: ', result)
  } else {
    console.log('Выход упешно выполнен: ', response)
  }
}

export { registerUser, loginUser, logoutUser }
