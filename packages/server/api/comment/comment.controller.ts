import type { RequestHandler } from 'express'
import { createCommentDto } from './comment.dto'
import { CommentService } from './comment.service'
import { UserService } from '../user/user.service'

export class CommentController {
  static createComment: RequestHandler = async (req, res, next) => {
    const { userId } = await UserService.getCurrentUser()

    const topicId = Number(req.params.topicId)
    const validation = createCommentDto.safeParse({
      topicId,
      userId: userId,
      ...req.body,
    })

    if (!validation.success) {
      return res.status(400).json({ reason: validation.error.errors })
    }

    try {
      const comment = await CommentService.createComment(validation.data)
      return res.status(201).json(comment)
    } catch (e) {
      return next(e)
    }
  }

  static getCommentsByTopicId: RequestHandler = async (req, res, next) => {
    const validation = createCommentDto
      .pick({ topicId: true })
      .safeParse({ topicId: Number(req.params.topicId) })

    if (!validation.success) {
      return res.status(400).json({ reason: validation.error.errors })
    }

    try {
      const comments = await CommentService.getCommentsByTopicId(
        validation.data.topicId
      )
      return res.status(200).json(comments)
    } catch (e) {
      return next(e)
    }
  }

  static getComment: RequestHandler = async (req, res, next) => {
    const commentId = Number(req.params.id)

    if (isNaN(commentId)) {
      return res.status(400).json({ reason: 'Invalid comment ID' })
    }

    try {
      const comment = await CommentService.getComment(commentId)
      if (!comment) {
        return res.status(404).json({ reason: 'Comment not found' })
      }
      return res.status(200).json(comment)
    } catch (e) {
      return next(e)
    }
  }

  static updateComment: RequestHandler = async (req, res, next) => {
    const { userId } = await UserService.getCurrentUser()
    const commentId = Number(req.params.id)
    const validation = createCommentDto.partial().safeParse(req.body)

    if (isNaN(commentId)) {
      return res.status(400).json({ reason: 'Invalid comment ID' })
    }

    if (!validation.success) {
      return res.status(400).json({ reason: validation.error.errors })
    }

    try {
      const updatedComment = await CommentService.updateComment(
        commentId,
        validation.data,
        userId
      )
      return res.status(200).json(updatedComment)
    } catch (e) {
      return next(e)
    }
  }

  static deleteComment: RequestHandler = async (req, res, next) => {
    const commentId = Number(req.params.id)
    const { userId } = await UserService.getCurrentUser()

    if (isNaN(commentId)) {
      return res.status(400).json({ reason: 'Invalid comment ID' })
    }

    try {
      const deletedComment = await CommentService.deleteComment(
        commentId,
        userId
      )
      return res.status(200).json(deletedComment)
    } catch (e) {
      return next(e)
    }
  }
}
