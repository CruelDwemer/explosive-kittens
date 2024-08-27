import { loginUser } from '../api/request'

const handleLogin = async (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll('input')
  const data: Record<string, string> = {}
  inputs.forEach((input: HTMLInputElement) => {
    data[input.name] = input.value
  })

  const keys = Object.keys(data)
  const requestString = keys.reduce(
    (result, key, index) =>
      `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`,
    '?'
  )
  const response = await loginUser(requestString)
  // if (response.status === 200) {
  //     console.log("Регистрация успешно выполнена.");
  // }
  console.log(response)
}

export { handleLogin }
