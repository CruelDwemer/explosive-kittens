import type { CreateCommentDto } from './comment.dto'
import { ForbiddenError, NotFoundError } from '../../utils'
import { CommentModel } from './comment.model'
import { UserModel } from '../user/user.model'

export class CommentService {
  // @ts-ignore
  static async createComment(createData: CreateCommentDto) {
    //@ts-expect-error some error
    return await CommentModel.create(createData)
  }

  static async getCommentsByTopicId(topicId: CreateCommentDto['topicId']) {
    // TODO: DB search
    return CommentModel.findAll({
      where: {
        topicId: topicId
      },
      include: [
        {
          model: UserModel,
          as: 'user',
          attributes: [
            'userId',
            'first_name',
            'second_name',
            'display_name',
            'avatar',
          ],
        }
      ]
    })
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

// {
//   id: 2,
//   topicId: topicId,
//   text: 'Some text',
//   date: '2024-04-20 17:30:12.66',
//   user: {
//     id: 333,
//     first_name: 'Коля',
//     second_name: 'Пупкин',
//     display_name: 'Пупкович',
//     avatar: undefined,
//   },
//   reactions: [
//     [1, '👍'],
//     [10, '😃'],
//   ],
// }
