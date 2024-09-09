export interface IUser {
  avatar?: string
  display_name?: string
  email?: string
  first_name?: string
  id?: number
  login?: string
  phone?: string
  second_name?: string
}

export interface IRecords {
  id?: number
  date?: string
  value?: number
  status?: string
  isWinner?: boolean
}

export interface IUserAvatar {
  user: IUser
  setUser: (user: IUser) => void
}
