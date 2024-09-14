export type NewPasswordData = {
  oldPassword: string
  newPassword: string
}

export type AuthData =
  | {
      login: string
      password: string
    }
  | {
      first_name: string
      second_name: string
      email: string
      phone: string
      login: string
      password: string
    }
