import {
  getTopicsRequest,
  createTopicRequest,
  createCommentRequest,
  getCommentsRequest,
  updateCommentRequest,
} from '../api'

export type Topic = {
  topicId: number
  name: string
  createdAt: string
  user: {
    avatar: string
    userId: string
  }
  comments?: Comment[]
}

export type Comment = {
  commentId: number
  text: string
  reactions: string
  topicId: number
  userId: number
}

export const getTopics = async () => {
  const response = await getTopicsRequest()
  const result = await response.json()
  const topics = result.map((element: Topic) => {
    return {
      topicId: element.topicId,
      name: element.name,
      comments: element.comments,
      timestamp: element.createdAt.split('T')[0],
      user: {
        userId: element.user.userId,
        avatar: element.user.avatar,
      },
    }
  })
  return topics
}

export const createTopic = async (name: string) => {
  const data = { name }
  await createTopicRequest(data)
  const topics = await getTopics()
  return topics
}

export const createComment = async (topicId: number, text: string) => {
  const data = {
    text,
    reactions: '',
  }
  const response = await createCommentRequest(topicId, data)
  const result = await response.json()
  return result
}

export const getComments = async (topicId: number) => {
  const response = await getCommentsRequest(topicId)
  const result = await response.json()
  return result
}

export const updateComment = async (commentId: number, emoji: string) => {
  const data: Partial<Comment> = {
    reactions: emoji,
  }
  const response = await updateCommentRequest(commentId, data)
  const result = await response.json()
  return result
}
