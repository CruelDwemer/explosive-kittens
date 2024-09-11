import { login, logout, register, getInfo } from '../api'
import { saveUserData } from '../model'
import { store } from '../../../shared/model'
import type { User } from '../constants'

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
    saveToStore()
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

const saveToStore = async () => {
  const response = await getInfo()
  const result = (await response.json()) as User

  store.dispatch(saveUserData(result))

  setTimeout(() => {
    console.log('USER STATE DATA: ', store.getState())
  }, 500)
}

export { registerUser, loginUser, logoutUser }
