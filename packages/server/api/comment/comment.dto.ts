import { z } from 'zod'

export const createCommentDto = z.object({
  topicId: z
    .number({ message: 'Invalid topic ID' })
    .positive('Topic ID must be positive'),
  text: z
    .string()
    .min(1, 'Comment content must be at least 1 character long')
    .max(600, 'Comment content must be at most 600 characters long'),
  reactions: z
    .string()
    .max(5, 'Reactions must be at most 5 characters long'),
  userId: z
    .number({ message: 'Invalid user ID' })
    .positive('User ID must be positive'),
})

export type CreateCommentDto = z.infer<typeof createCommentDto>


