import { z } from 'zod'

// TODO: сделать корректную обработку ссылки на аватар
export const createUserDto = z.object({
  first_name: z
    .string()
    .min(1, 'User name must be at least 1 character long')
    .max(20, 'User name must be at most 20 characters long'),
  second_name: z
    .string()
    .min(1, 'User name must be at least 1 character long')
    .max(20, 'User name must be at most 20 characters long'),
  display_name: z
    .string()
    .min(1, 'User name must be at least 1 character long')
    .max(20, 'User name must be at most 20 characters long'),
  userId: z
    .number({ message: 'Invalid user ID' })
    .positive('User ID must be positive'),
})

export type CreateTopicDto = z.infer<typeof createUserDto>
