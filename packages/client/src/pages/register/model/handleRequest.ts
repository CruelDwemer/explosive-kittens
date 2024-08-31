import { registerUser } from '../api/request'

const handleRegiser = async (form: HTMLFormElement) => {
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

export { handleRegiser }
