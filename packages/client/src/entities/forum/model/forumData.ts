// export interface Topic {
//   id: number
//   text: string
//   comments: Comment[]
//   title?: string
//   date?: string
// }

// // TODO: тут еще скорее всего будет аватарка
// export interface Comment {
//   text: string
//   user_name: string
//   date: string
//   reactions?: string
// }

export interface Topic {
  topicId: number,
  name: string,
  timestamp: string,
  user: {
    avatar: string,
    userId: string
  },
  comments: Comment[]
}

export interface Comment {
  commentId: number,
  text: string,
  reactions: string,
  topicId: number,
  userId: number,
  createdAt: string,
  user: {
    first_name: string,
    avatar: string | null
  }
}
