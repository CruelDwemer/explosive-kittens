import { 
    Model, 
    Column,
    DataType, 
    AllowNull, 
    Table, 
    PrimaryKey, 
    AutoIncrement, 
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript'
import { UserModel } from '../user/user.model'


@Table({ tableName: 'topics' })
export class TopicModel extends Model<TopicModel> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    topicId: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    name: string;

    @ForeignKey(() => UserModel)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    userId: number;

    @BelongsTo(() => UserModel)
    user: UserModel;
}

// @Table({ tableName: 'users' })
// export class UserModel extends Model<UserModel> {

//     @Column(DataType.INTEGER)
//     userId: number;

//     @AllowNull(false)
//     @Column(DataType.STRING)
//     first_name: string;

//     @AllowNull(false)
//     @Column(DataType.STRING)
//     second_name: string;

//     @AllowNull(false)
//     @Column(DataType.STRING)
//     display_name: string;

//     @Column(DataType.STRING)
//     avatar: string;
// }

// @AllowNull(false)
//     @Column(DataType.STRING)
//     creation_date: string

// @ForeignKey(() => UserModel)
//     @AllowNull(false)
//     @Column(DataType.INTEGER)
//     userId: number;

//     @BelongsTo(() => UserModel)
//     user: UserModel;

