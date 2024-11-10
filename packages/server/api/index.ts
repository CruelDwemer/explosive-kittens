import express, { Router } from 'express'
import { topicRouter } from './topic/topic.router'
import { commentRouter } from './comment/comment.router'
import { userRouter } from './user/user.router'
import { lobbyRouter } from './lobby/lobby.router'

export const apiRouter = Router()

apiRouter.use(express.json())
// TODO: Подключить middleware проверку активной сессии
// TODO: Подключить middleware обработку ошибок

apiRouter.use('/topics', topicRouter)
apiRouter.use('/comments', commentRouter)
apiRouter.use('/user', userRouter)
apiRouter.use('/lobby', lobbyRouter)
