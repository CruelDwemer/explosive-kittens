import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { TopicModel } from './api/topic/topic.model'
import { UserModel } from './api/user/user.model'

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } =
  process.env

export const initPostgress = async (): Promise<Sequelize | null> => {

  const sequelizeOptions: SequelizeOptions = {
    host: 'localhost',
    port: Number(POSTGRES_PORT),
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    dialect: 'postgres',
    models: [ TopicModel, UserModel ]
  }

  const sequelize = new Sequelize(sequelizeOptions)
  // await sequelize.authenticate();
  await sequelize.sync();
  return sequelize;
}

// const sequelize = new Sequelize(sequelizeOptions);
// export { sequelize }


// import { Client } from 'pg'

// export const createClientAndConnect = async (): Promise<Client | null> => {
//   try {
//     const client = new Client({
//       user: POSTGRES_USER,
//       host: 'localhost',
//       database: POSTGRES_DB,
//       password: POSTGRES_PASSWORD,
//       port: Number(POSTGRES_PORT),
//     })

//     await client.connect()

//     const res = await client.query('SELECT NOW()')
//     console.log('  ➜ 🎸 Connected to the database at:', res?.rows?.[0].now)
//     client.end()

//     return client
//   } catch (e) {
//     console.error(e)
//   }

//   return null
// }
