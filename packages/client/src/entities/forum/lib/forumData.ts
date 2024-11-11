import { getTopicsRequest, createTopicRequest, createCommentRequest } from '../api'

export const getTopics = async () => {
    const response = await getTopicsRequest()
    const topics = await response.json()
    console.log("TOPICS: ", topics)
    return topics
}

export const createTopic = async (data: { name: string }) => {
    const response = await createTopicRequest(data)
}

export const createComment = async (topicId: number, data: { text: string, reactions: string }) => {
    const response = await createCommentRequest(topicId, data)
}
