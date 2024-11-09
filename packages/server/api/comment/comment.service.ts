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
    return await CommentModel.findAll({
      where: {
        topicId: topicId,
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
        },
      ],
    })
  }

  static async getComment(id: number) {
    // TODO: DB search by ID
    return await CommentModel.findOne({
      where: {
        commentId: id,
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
        },
      ],
    })
  }

  static async updateComment(
    id: number,
    // @ts-ignore
    updateData: Partial<CreateCommentDto>,
    userId: number
  ) {
    // TODO:  DB search by ID
    const comment = await this.getComment(id)

    if (!comment) {
      throw new NotFoundError('Comment not found')
    }

    if (comment.userId !== userId) {
      throw new ForbiddenError(
        `You don't have permission to update this comment`
      )
    }
    // @ts-ignore
    comment.content = updateData.content
    await comment.save()
    return comment
  }

  static async deleteComment(id: number, userId: number) {
    // TODO:  DB search by ID
    const comment = await this.getComment(id)

    if (!comment) {
      throw new NotFoundError('Comment not found')
    }

    if (comment.userId !== userId) {
      throw new ForbiddenError(
        `You don't have permission to delete this comment`
      )
    }

    await comment.destroy()
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
