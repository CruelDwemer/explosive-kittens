import { loginUser } from '../api/request'

const handleLogin = async (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll('input')
  const data: Record<string, string> = {}
  inputs.forEach((input: HTMLInputElement) => {
    data[input.name] = input.value
  })

  // const keys = Object.keys(data)
  // const requestString = keys.reduce(
  //   (result, key, index) =>
  //     `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`,
  //   '?'
  // )
  console.log(data)
  const response = await loginUser(JSON.stringify(data))
  if (response.status === 200) {
    console.log('Вход успешно выполнен.')
  }
  console.log(response)
}

export { handleLogin }
