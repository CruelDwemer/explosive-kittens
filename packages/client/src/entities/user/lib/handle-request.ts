import { loginUser, logout, registerUser } from '../api/user-api'
import { AuthData } from '../models/validator-models'

const handleLogin = async (data: AuthData) => {
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

const handleRegister = async (data: AuthData) => {
  const response = await registerUser(JSON.stringify(data))
  const result = await response.json()
  if (response.status === 200) {
    console.log('Регистрация успешно выполнена: ', result)
  } else {
    console.log('Ошибка регистрации: ', result)
  }
}

export { handleLogin, handleLogout, handleRegister }
