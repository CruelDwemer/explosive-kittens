import { CreateLobbyDto } from './lobby.dto'
import { LobbyModel } from './lobby.model'

export class LobbyService {
  // @ts-ignore
  static async createLobby(data: CreateLobbyDto) {
    //@ts-expect-error some error
    return await LobbyModel.create({ ...data, state: 'not_started' })
  }
}
