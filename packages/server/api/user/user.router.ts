import { Router } from 'express'
import { UserController } from './user.controller'
export const userRouter = Router()

userRouter.post('/', UserController.createUser)
