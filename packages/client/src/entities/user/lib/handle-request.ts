import {
  loginUser,
  logout,
  registerUser,
  getUserInfoQuery,
} from '../api/user-api'
import { AuthData } from '../models/validator-models'
import { AppDispatch } from '../../../shared/lib'
import type { User } from '../models'
import { saveUserData } from './'

const handleLoginQuery = async (data: AuthData, dispatch: AppDispatch) => {
  try {
    const response = await loginUser(JSON.stringify(data))
    if (response.status === 200) {
      // console.log('Вход успешно выполнен.')
      saveToStore(dispatch)
      window.location.href = '/play'
    } else {
      const message = await response.json()
      // console.log('Ошибка входа: ', message)
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
      // console.log('Ошибка: ', result)
    } else {
      // console.log('Выход упешно выполнен: ', response)
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
      // console.log('Регистрация успешно выполнена: ', result)
    } else {
      // console.log('Ошибка регистрации: ', result)
    }
  } catch (error) {
    console.error('Error register:', error)
    throw error
  }
}

const saveToStore = async (dispatch: AppDispatch) => {
  const response = await getUserInfoQuery()
  const result = await response.json()

  dispatch(saveUserData(result))
}

export { handleLoginQuery, handleLogout, handleRegisterQuery }
