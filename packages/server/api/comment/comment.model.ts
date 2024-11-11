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
import { TopicModel } from '../topic/topic.model'
import { UserModel } from '../user/user.model'


@Table({ tableName: 'comments' })
export class CommentModel extends Model<CommentModel> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    commentId: number;

    @ForeignKey(() => TopicModel)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    topicId: number;

    @BelongsTo(() => TopicModel, 'topicId')
    topic: TopicModel;

    @AllowNull(false)
    @Column(DataType.STRING)
    text: string;

    @Column(DataType.STRING)
    reactions: string;

    @ForeignKey(() => UserModel)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    userId: number;

    @BelongsTo(() => UserModel, 'userId')
    user: UserModel;
}
