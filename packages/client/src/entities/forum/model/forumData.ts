export interface Topic {
  id: number
  text: string
  comments: Comment[]
  title?: string
  date?: string
}

// TODO: тут еще скорее всего будет аватарка
export interface Comment {
  text: string
  user_name: string
  date: string
}
