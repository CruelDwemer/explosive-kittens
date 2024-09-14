import { loginUser, logout, registerUser } from '../api/user-api'

const handleLogin = async (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll('input')
  const data: Record<string, string> = {}
  inputs.forEach((input: HTMLInputElement) => {
    data[input.name] = input.value
  })

  const response = await loginUser(JSON.stringify(data))
  if (response.status === 200) {
    console.log('Вход успешно выполнен.', response)
  }
}
const handleLogout = async () => {
  const response = await logout()
  if (response.status != 200) {
    const result = await response.json()
    console.log('Ошибка: ', result)
  } else {
    console.log('Выход упешно выполнен: ', response)
  }
}

const handleRegister = async (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll('input')
  const data: Record<string, string> = {}
  inputs.forEach((input: HTMLInputElement) => {
    data[input.name] = input.value
  })
  const response = await registerUser(JSON.stringify(data))
  const result = await response.json()
  if (response.status === 200) {
    console.log('Регистрация успешно выполнена: ', result)
  } else {
    console.log('Ошибка регистрации: ', result)
  }
}

export { handleLogin, handleLogout, handleRegister }
