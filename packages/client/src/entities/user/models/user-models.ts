export type InputData = {
  id: number
  name: string
  type: string
  label: string
  selector: string
}

export type User = {
  id: number
  login: string
  password: string
  first_name: string
  second_name: string
  email: string
  phone: string
  display_name: string | null
  avatar: string | null
}
