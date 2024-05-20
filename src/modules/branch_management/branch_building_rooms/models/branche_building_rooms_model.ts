import {
    // Association,
    DataTypes,
    // HasManyAddAssociationMixin,
    // HasManyCountAssociationsMixin,
    // HasManyCreateAssociationMixin,
    // HasManyGetAssociationsMixin,
    // HasManyHasAssociationMixin,
    // HasManySetAssociationsMixin,
    // HasManyAddAssociationsMixin,
    // HasManyHasAssociationsMixin,
    // HasManyRemoveAssociationMixin,
    // HasManyRemoveAssociationsMixin,
    Model,
    // ModelDefined,
    // Optional,
    Sequelize,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DefaultSetOptions,
    // NonAttribute,
    // ForeignKey,
} from 'sequelize';

const tableName = 'branch_building_rooms';
const modelName = 'BranchBuildingRoomsModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type status = 'active' | 'deactive';

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    declare branch_id: number;
    declare room_code: string;
    declare room_name: string;
    declare attachment: string;
    declare photo: string;
    declare description: string;
    declare total_seat: number;
    declare building_id: number;
    declare total_student: number;

    declare status?: status;
    declare creator?: number;

    declare created_at?: CreationOptional<Date>;
    declare updated_at?: CreationOptional<Date>;
}

function init(sequelize: Sequelize) {
    DataModel.init(
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            branch_id: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
            },
            room_code: {
                type: new DataTypes.STRING(40),
                allowNull: true,
            },
            room_name: {
                type: new DataTypes.STRING(40),
                allowNull: true,
            },
            attachment: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            photo: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            description: {
                type: new DataTypes.TEXT(),
                allowNull: true,
            },
            total_seat: {
                type: new DataTypes.BIGINT(),
                allowNull: true,
            },
            building_id: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
            },
            total_student: {
                type: new DataTypes.BIGINT(),
                allowNull: true,
            },

            status: {
                type: new DataTypes.ENUM('active', 'deactive'),
                defaultValue: 'active',
            },
            creator: {
                type: new DataTypes.TINYINT(),
                allowNull: true,
                defaultValue: null,
            },
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            tableName: tableName,
            modelName: modelName,
            sequelize, // passing the `sequelize` instance is required
            underscored: true,
        },
    );

    return DataModel;
}

export { init, DataModel };
