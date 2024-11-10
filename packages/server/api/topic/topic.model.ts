import { 
    Model, 
    Column,
    DataType, 
    AllowNull, 
    Table, 
    PrimaryKey, 
    AutoIncrement, 
    ForeignKey,
    BelongsTo,
    HasMany
} from 'sequelize-typescript'
import { UserModel } from '../user/user.model'
import { CommentModel } from '../comment/comment.model'


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

    @HasMany(() => CommentModel)
    comments: CommentModel[];
}


