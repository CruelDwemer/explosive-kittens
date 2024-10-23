export interface Player {
  id: number
  first_name: string
  second_name: string
  display_name: string | null
  login: string
  avatar: string | null
  role: string
}

export type Message = {
  chat_id: number
  content: string
  file: string
  id: number
  is_read: boolean
  time: string
  type: 'message'
  user_id: number
}

export type { LobbyView } from './lobby-view'
