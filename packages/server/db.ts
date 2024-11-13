import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { TopicModel } from './api/topic/topic.model'
import { UserModel } from './api/user/user.model'
import { CommentModel } from './api/comment/comment.model'

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, POSTGRES_HOST } =
  process.env

export const initPostgress = async (): Promise<Sequelize | null> => {

  const sequelizeOptions: SequelizeOptions = {
    host: POSTGRES_HOST,
    port: Number(POSTGRES_PORT),
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    dialect: 'postgres',
    models: [ TopicModel, UserModel, CommentModel ]
  }

  const sequelize = new Sequelize(sequelizeOptions)
  // await sequelize.authenticate();
  await sequelize.sync();
  return sequelize;
}

