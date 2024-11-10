import { Router } from 'express'

import { Lobbyontroller } from './lobby.controller'

export const commentRouter = Router()

commentRouter.post('/lobby', Lobbyontroller.createLobby)
