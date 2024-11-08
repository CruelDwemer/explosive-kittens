import { 
    Model, 
    Column,
    DataType, 
    AllowNull, 
    Table, 
    PrimaryKey,
    HasMany
} from 'sequelize-typescript'

import { TopicModel } from '../topic/topic.model'

@Table({ tableName: 'users' })
export class UserModel extends Model<UserModel> {

    @PrimaryKey
    @AllowNull(false)
    @Column(DataType.INTEGER)
    userId: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    first_name: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    second_name: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    display_name: string;

    @Column(DataType.STRING)
    avatar: string;

    @HasMany(() => TopicModel)
    topics: TopicModel[]
}
