import { z } from 'zod'

export const createLobbyDto = z.object({
  lobbyId: z
    .number({ message: 'Invalid topic ID' })
    .positive('Topic ID must be positive'),
  name: z
    .string()
    .min(5, 'Name content must be at least 5 character long')
    .max(600, 'Comment content must be at most 600 characters long'),
  ownerId: z
    .number({ message: 'Invalid owner ID' })
    .positive('Owner ID must be positive'),
})

export type CreateLobbyDto = z.infer<typeof createLobbyDto>
