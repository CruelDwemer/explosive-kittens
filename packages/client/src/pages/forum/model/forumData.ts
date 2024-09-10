export interface ITopic {
  title?: string
  id: number
  date?: string
  content: string
  comments: IComment[]
}

// TODO: тут еще скорее всего будет аватарка
export interface IComment {
  text: string
  user_name: string
  date: string
}
