export type NewPasswordData = {
  oldPassword: string
  newPassword: string
}

export type AuthData = LoginData | RegisterData

type LoginData = {
  login: string
  password: string
}

type RegisterData = {
  first_name: string
  second_name: string
  email: string
  phone: string
  login: string
  password: string
}
