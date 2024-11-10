import {
  loginUser,
  logout,
  registerUser,
  getUserInfoQuery,
  getUserInfo,
  saveUserToDb
} from '../api/user-api'
import { AuthData } from '../models/validator-models'
import { AppDispatch } from '../../../shared/lib'
import { saveUserData } from './'
import { ROUTER_PATH } from '../../../shared/models'
import { idText } from 'typescript'

const handleLoginQuery = async (data: AuthData, dispatch: AppDispatch) => {
  try {
    const response = await loginUser(JSON.stringify(data))
    if (response.status === 200) {
      // console.log('Вход успешно выполнен.')
      saveToStore(dispatch)
      window.location.href = ROUTER_PATH.PLAY
    } else {
      const result = await response.json()
      alert(`${result.reason}`)
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
      alert(`${result.reason}`)
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
      alert(`Регистрация успешно выполнена`)
    } else {
      alert(`${result.reason}`)
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

const handleUserInDb = async () => {
  const data = await getUserInfo()
  const requestData = {
    userId: data.id,
    first_name: data.first_name,
    second_name: data.second_name,
    display_name: data.first_name,
    avatar: data.avatar
  }
  saveUserToDb(requestData)
  // console.log("INFO: ", data)
}

export { handleLoginQuery, handleLogout, handleRegisterQuery, handleUserInDb }
