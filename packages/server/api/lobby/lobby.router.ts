import { Router } from 'express'

import { Lobbyontroller } from './lobby.controller'

export const lobbyRouter = Router()

lobbyRouter.post('/', Lobbyontroller.createLobby)
