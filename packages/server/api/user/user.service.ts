import { UserModel } from './user.model'

export class UserService {
    // @ts-ignore
    static async createUser(user) {
        return await UserModel.create(user)
    }

    static async getUser(userId: number) {
        return await UserModel.findOne({
            where: { userId: userId }
        })
    }

    static async getCurrentUser() {
        const array = await UserModel.findAll()
        return array[0]
    }
}
