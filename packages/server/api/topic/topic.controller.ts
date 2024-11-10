import type { RequestHandler } from 'express'

import { createTopicDto } from './topic.dto'
import { TopicService } from './topic.service'
import { UserService } from '../user/user.service'

export class TopicController {
  static createTopic: RequestHandler = async (req, res, next) => {
    const { userId } = await UserService.getCurrentUser()

    const validation = createTopicDto.safeParse({
      userId: userId,
      ...req.body,
    })

    if (!validation.success) {
      return res.status(400).json({ reason: validation.error.errors })
    }

    try {
      const topic = await TopicService.createTopic(validation.data)
      return res.status(201).json(topic)
    } catch (e) {
      return next(e)
    }
  }

  static getTopics: RequestHandler = async (_, res, next) => {
    try {
      const topics = await TopicService.getTopics()
      res.status(200).json(topics)
    } catch (e) {
      next(e)
    }
  }

  static getTopic: RequestHandler = async (req, res, next) => {
    const topicId = Number(req.params.id)

    if (isNaN(topicId)) {
      return res.status(400).json({ reason: 'Invalid topic ID' })
    }

    try {
      const topic = await TopicService.getTopic(topicId)
      if (!topic) {
        return res.status(404).json({ reason: 'Topic not found' })
      }
      return res.status(200).json(topic)
    } catch (e) {
      return next(e)
    }
  }

  static updateTopic: RequestHandler = async (req, res, next) => {
    const topicId = Number(req.params.id)
    const validation = createTopicDto.omit({ userId: true }).safeParse(req.body)

    if (isNaN(topicId)) {
      return res.status(400).json({ reason: 'Invalid topic ID' })
    }

    if (!validation.success) {
      return res.status(400).json({ reason: validation.error.errors })
    }

    const { userId } = await UserService.getCurrentUser()

    try {
      const updatedTopic = await TopicService.updateTopic(
        topicId,
        validation.data,
        userId
      )
      return res.status(200).json(updatedTopic)
    } catch (e) {
      return next(e)
    }
  }

  static deleteTopic: RequestHandler = async (req, res, next) => {
    const topicId = Number(req.params.id)

    const { userId } = await UserService.getCurrentUser()

    if (isNaN(topicId)) {
      return res.status(400).json({ reason: 'Invalid topic ID' })
    }
    try {
      const deletedTopic = await TopicService.deleteTopic(topicId, userId)
      return res.status(200).json(deletedTopic)
    } catch (e) {
      return next(e)
    }
  }
}
