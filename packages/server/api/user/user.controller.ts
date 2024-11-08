import type { RequestHandler } from 'express'
import { createUserDto } from './user.dto'

import { UserService } from "./user.service";

export class UserController {
    // @ts-ignore
    static createUser: RequestHandler = async (req, res, next) => {

        // console.log("HERE: ", req.body)
        
        const validation = createUserDto.safeParse({
            ...req.body,
        })

        if (!validation.success) {
            return res.status(400).json({ reason: validation.error.errors })
        }

        const userFound = await UserService.getUser(req.body.userId)

        if (!userFound) {
            try {
                const user = await UserService.createUser(req.body)
                return res.status(201).json(user)
            } catch (e) {
                return next(e)
            }
        }
    }
}
