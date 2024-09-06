const BASE_URL = 'https://ya-praktikum.tech/api/v2'
export const example = () => {
  console.log('user-api')
}

export const getUserInfo = async () => {
  const response = await fetch(`${BASE_URL}/auth/user`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Ошибка запроса! статус: ${response.status}`)
  }

  const data = await response.json()
  console.log(data)
  return data
}

export const changePassword = async (data: {
  oldPassword: string
  newPassword: string
}) => {
  const response = await fetch(`${BASE_URL}/user/password`, {
    method: 'PUT',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (response.ok) {
    alert('Пароль успешно изменен')
  } else {
    alert('Произошла ошибка')
  }
}

export const updateAvatar = async (data: FormData) => {
  const response = await fetch(`${BASE_URL}/user/profile/avatar`, {
    method: 'PUT',
    mode: 'cors',
    credentials: 'include',
    body: data,
  })

  if (response.ok) {
    alert('Аватар успешно изменен')
  } else {
    alert('Произошла ошибка')
  }

  return response
}
