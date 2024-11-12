import { URL } from '../model/constants'
import type { Comment } from '../lib/forumData'

export const getTopicsRequest = async () => {
    return fetch(`${URL}/topics`)
}

export const createTopicRequest = async (data: { name: string }) => {
    return fetch(`${URL}/topics`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const createCommentRequest = async (topicId: number, data: { text: string, reactions: string }) => {
    return fetch(`${URL}/comments/topic/${topicId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const getCommentsRequest = async (topicId: number) => {
    return fetch(`${URL}/comments/topic/${topicId}`)
}

export const updateCommentRequest = async (commentId: number, data: Partial<Comment>) => {
    return fetch(`${URL}/comments/${commentId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}
