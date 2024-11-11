import { getTopicsRequest, createTopicRequest, createCommentRequest } from '../api'

export type Topic = {
    topicId: number,
    name: string,
    createdAt: string,
    user: {
      avatar: string,
      userId: string
    },
    comments: Comment[]
  }
  
  export type Comment = {
    commentId: number,
    text: string,
    reactions: string,
    topicId: number,
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
                avatar: element.user.avatar
            }
        }
    })
    console.log("TOPICS: ", topics)
    return topics
}

export const createTopic = async (data: { name: string }) => {
    const response = await createTopicRequest(data)
}

export const createComment = async (topicId: number, data: { text: string, reactions: string }) => {
    const response = await createCommentRequest(topicId, data)
}
