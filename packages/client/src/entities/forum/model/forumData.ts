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
  reactions?: string
}

// export type Topic = {
//   topicId: number,
//   name: string,
//   createdAt: string,
//   user: {
//     avatar: string,
//     userId: string
//   },
//   comments: Comment[]
// }

// export type Comment = {
//   commentId: number,
//   text: string,
//   reactions: string,
//   topicId: number,
//   userId: number
// }
