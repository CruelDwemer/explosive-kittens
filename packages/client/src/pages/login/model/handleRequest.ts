import { loginUser, logout } from '../api/request'
// TODO: Переместить в папку entities/user/lib
const handleLogin = async (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll('input')
  const data: Record<string, string> = {}
  inputs.forEach((input: HTMLInputElement) => {
    data[input.name] = input.value
  })

  const response = await loginUser(JSON.stringify(data))
  // const result = await response.json();
  if (response.status === 200) {
    console.log('Вход успешно выполнен.', response)
  }
  // console.log(result)
}
// TODO: Переместить в папку entities/user/lib
const handleLogout = async () => {
  const response = await logout()
  // const result = await response.json();
  if (response.status != 200) {
    const result = await response.json()
    console.log('Ошибка: ', result)
  } else {
    console.log('Выход упешно выполнен: ', response)
  }
}

export { handleLogin, handleLogout }
