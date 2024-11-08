import { NotFoundError, ForbiddenError } from '../../utils'
import type { CreateTopicDto } from './topic.dto'
import { TopicModel } from './topic.model'

export class TopicService {
  // @ts-ignore
  static async createTopic(topic: CreateTopicDto) {
    
    //@ts-expect-error some error
    return await TopicModel.create(topic)

    // return { id: 0 }
  }

  static async getTopics() {
    // TODO: DB search
    return [
      {
        id: 1234,
        title: 'Topic 1',
        creation_date: '2021-01-01',

        owner: {
          id: 0,
          first_name: 'Василий',
          second_name: 'Пупкин',
          display_name: 'Пупкович',
          avatar: undefined,
        },
      },
    ]
  }

  static async getTopic(id: number) {
    // TODO: DB search by ID
    return [
      {
        id: id,
        title: 'Topic 1',
        creation_date: '2024-04-20 17:31:12.66',
        text: 'Some textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome text',
        owner: {
          id: 0,
          first_name: 'Василий',
          second_name: 'Пупкин',
          display_name: 'Пупкович',
          avatar: undefined,
        },
      },
    ]
  }

  static async updateTopic(
    id: number,
    // @ts-ignore
    updateData: Omit<CreateTopicDto, 'userId'>,
    userId: number
  ) {
    // TODO:  DB search by ID
    const topic = { userId: 333 }

    if (!topic) {
      throw new NotFoundError('Topic not found')
    }

    if (topic.userId !== userId) {
      throw new ForbiddenError(`You don't have permission to update this topic`)
    }

    // TODO:  DB Update
    return { id }
  }

  static async deleteTopic(id: number, userId: number) {
    // TODO:  DB search by ID
    const topic = { userId: 333 }

    if (!topic) {
      throw new NotFoundError('Topic not found')
    }

    if (topic.userId !== userId) {
      throw new ForbiddenError(`You don't have permission to delete this topic`)
    }

    // TODO: DB Delete
    return { id }
  }
}
