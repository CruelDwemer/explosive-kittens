import { RequestHandler } from 'express'
import { createLobbyDto } from './lobby.dto'
import { LobbyService } from './lobby.service'
import { UserService } from '../user/user.service'

export class Lobbyontroller {
  static createLobby: RequestHandler = async (req, res, next) => {
    const { userId } = await UserService.getCurrentUser()

    const topicId = Number(req.params.topicId)
    const validation = createLobbyDto.safeParse({
      topicId,
      userId: userId,
      ...req.body,
    })

    if (!validation.success) {
      return res.status(400).json({ reason: validation.error.errors })
    }

    try {
      const lobby = await LobbyService.createLobby(validation.data)
      return res.status(201).json(lobby)
    } catch (e) {
      return next(e)
    }
  }
}
