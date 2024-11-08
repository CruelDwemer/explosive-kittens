import { 
    Model, 
    Column,
    DataType, 
    AllowNull, 
    Table, 
    PrimaryKey, 
} from 'sequelize-typescript'

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
}
