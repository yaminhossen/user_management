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

const tableName = 'user_student_parents';
const modelName = 'UserStudentParentsModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type status = 'active' | 'deactive';
type relation =
    | 'father'
    | 'mother'
    | 'husband'
    | 'brother'
    | 'sister'
    | 'uncle';
type is_parent = 'yes' | 'no';

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    declare user_student_id: number;
    declare name: string;
    declare phone: string;
    declare occupation: string;
    declare email: string;
    declare photo: string;
    declare relation: relation;
    declare is_parent: is_parent;

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
            user_student_id: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
            },
            name: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            phone: {
                type: new DataTypes.STRING(20),
                allowNull: true,
            },
            occupation: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            email: {
                type: new DataTypes.STRING(25),
                allowNull: true,
            },
            photo: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            relation: {
                type: new DataTypes.ENUM(
                    'father',
                    'mother',
                    'husband',
                    'brother',
                    'sister',
                    'uncle',
                ),
                allowNull: true,
            },
            is_parent: {
                type: new DataTypes.ENUM('yes', 'no'),
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
