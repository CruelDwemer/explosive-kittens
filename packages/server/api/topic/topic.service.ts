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

    return await TopicModel.findAll({
      attributes: [ 'topicId', 'userId', 'name', 'createdAt' ]
    })
  }

  static async getTopic(id: number) {

    return await TopicModel.findOne({
      where: {
        topicId: id
      }
    })
  }

  static async updateTopic(
    id: number,
    // @ts-ignore
    updateData: Omit<CreateTopicDto, 'userId'>,
    userId: number
  ) {
    
    const topic = await TopicModel.findOne({
      where: {
        topicId: id
      }
    })

    if (!topic) {
      throw new NotFoundError('Topic not found')
    }

    if (topic.userId !== userId) {
      throw new ForbiddenError(`You don't have permission to update this topic`)
    }

    return await TopicModel.update(
      {
        name: updateData.name
      },
      {
        where: { topicId: id }
      }
    )
  }

  static async deleteTopic(id: number, userId: number) {
    
    const topic = await TopicModel.findOne({
      where: {
        topicId: id
      }
    })

    if (!topic) {
      throw new NotFoundError('Topic not found')
    }

    if (topic.userId !== userId) {
      throw new ForbiddenError(`You don't have permission to delete this topic`)
    }

    return await topic.destroy()
  }
}
