import {
  Model,
  Column,
  DataType,
  AllowNull,
  Table,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
} from 'sequelize-typescript'
import { UserModel } from '../user/user.model'

@Table({ tableName: 'lobby' })
export class LobbyModel extends Model<LobbyModel> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  lobbyId: number

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string

  @ForeignKey(() => UserModel)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  ownerId: UserModel

  @ForeignKey(() => UserModel)
  @AllowNull(true)
  @Column(DataType.INTEGER)
  leadId: UserModel

  @AllowNull(false)
  @Column(DataType.STRING)
  state: 'guessing' | 'drawing' | 'not_started'

  @AllowNull(true)
  @Column(DataType.STRING)
  currentWord: string

  @AllowNull(true)
  @Column(DataType.JSON)
  history: { userId: number; word: string; date: string }[]
}
