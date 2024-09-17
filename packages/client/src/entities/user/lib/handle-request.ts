import { loginUser, logout, registerUser } from '../api/user-api'
import { AuthData } from '../models/validator-models'

const handleLoginQuery = async (data: AuthData) => {
  try {
    const response = await loginUser(JSON.stringify(data))
    if (response.status === 200) {
      window.location.href = '/play'
    }
  } catch (error) {
    console.error('Error login:', error)
    throw error
  }
}

const handleLogout = async () => {
  try {
    const response = await logout()
    if (response.status != 200) {
      const result = await response.json()
      console.log('Ошибка: ', result)
    } else {
      console.log('Выход упешно выполнен: ', response)
    }
  } catch (error) {
    console.error('Error logout:', error)
    throw error
  }
}

const handleRegisterQuery = async (data: AuthData) => {
  try {
    const response = await registerUser(JSON.stringify(data))
    const result = await response.json()
    if (response.status === 200) {
      console.log('Регистрация успешно выполнена: ', result)
    } else {
      console.log('Ошибка регистрации: ', result)
    }
  } catch (error) {
    console.error('Error register:', error)
    throw error
  }
}

export { handleLoginQuery, handleLogout, handleRegisterQuery }
