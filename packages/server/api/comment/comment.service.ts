import type { CreateCommentDto } from './comment.dto'
import { ForbiddenError, NotFoundError } from '../../utils'

export class CommentService {
  // @ts-ignore
  static async createComment(createData: CreateCommentDto) {
    // TODO: DB create
    return { id: 30 }
  }

  static async getCommentsByTopicId(topicId: CreateCommentDto['topicId']) {
    // TODO: DB search
    return [
      {
        id: 1,
        topicId: topicId,
        text: 'Some text',
        date: '2024-04-20 17:35:12.66',
        user: {
          id: 333,
          first_name: 'Василий',
          second_name: 'Пупкин',
          display_name: 'Пупкович',
          avatar: undefined,
        },
        reactions: [[3, '😃👍']],
      },
      {
        id: 2,
        topicId: topicId,
        text: 'Some text',
        date: '2024-04-20 17:30:12.66',
        user: {
          id: 333,
          first_name: 'Коля',
          second_name: 'Пупкин',
          display_name: 'Пупкович',
          avatar: undefined,
        },
        reactions: [
          [1, '👍'],
          [10, '😃'],
        ],
      },
    ]
  }

  static async getComment(id: number) {
    // TODO: DB search by ID
    return {
      id: id,
      topicId: 33,
      text: 'Some text',
      date: '2024-04-20 17:35:12.66',
      user: {
        id: 333,
        first_name: 'Василий',
        second_name: 'Пупкин',
        display_name: 'Пупкович',
        avatar: undefined,
      },
      reactions: [[3, '😃👍']],
    }
  }

  static async updateComment(
    id: number,
    // @ts-ignore
    updateData: Partial<CreateCommentDto>,
    userId: number
  ) {
    // TODO:  DB search by ID
    const comment = { userId: 333 }

    if (!comment) {
      throw new NotFoundError('Comment not found')
    }

    if (comment.userId !== userId) {
      throw new ForbiddenError(
        `You don't have permission to update this comment`
      )
    }

    // TODO:  DB Update
    return { id }
  }

  static async deleteComment(id: number, userId: number) {
    // TODO:  DB search by ID
    const comment = { userId: 333 }

    if (!comment) {
      throw new NotFoundError('Comment not found')
    }

    if (comment.userId !== userId) {
      throw new ForbiddenError(
        `You don't have permission to delete this comment`
      )
    }

    // TODO: DB Delete
    return { id }
  }
}
