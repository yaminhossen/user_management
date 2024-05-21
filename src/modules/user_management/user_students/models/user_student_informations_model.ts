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

const tableName = 'user_student_informations';
const modelName = 'UserStudentInformationsModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type status = 'active' | 'deactive';

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    declare branch_id: number;
    declare user_student_id: number;
    declare present_address: string;
    declare permanent_address: string;
    declare date_of_birth: Date;
    declare gender: string | null;
    declare nationality: string | null;
    declare city: string | null;
    declare state: string | null;
    declare zip_code: string | null;
    declare post_code: string | null;
    declare country: string | null;
    declare medical_condition: string | null;
    declare current_medications: string | null;
    declare telegram_name: string | null;
    declare telegram_id: string | null;
    declare student_id: string | null;
    declare qr_code: string | null;
    declare blood_group: string | null;
    declare student_expire_date: string | null;
    declare admission_date: string | null;

    declare token?: string | null;
    declare forget_code?: string | null;
    declare user_agent?: string | null;

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
            user_student_id: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
            },
            present_address: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            permanent_address: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            date_of_birth: {
                type: new DataTypes.DATE(),
                allowNull: true,
            },
            gender: {
                type: new DataTypes.STRING(20),
                allowNull: true,
            },
            nationality: {
                type: new DataTypes.STRING(50),
                allowNull: true,
            },
            city: {
                type: new DataTypes.STRING(50),
                allowNull: true,
            },
            state: {
                type: new DataTypes.STRING(50),
                allowNull: true,
            },
            zip_code: {
                type: new DataTypes.STRING(20),
                allowNull: true,
            },
            post_code: {
                type: new DataTypes.STRING(20),
                allowNull: true,
            },
            country: {
                type: new DataTypes.STRING(50),
                allowNull: true,
            },
            medical_condition: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            current_medications: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            telegram_name: {
                type: new DataTypes.STRING(30),
                allowNull: true,
            },
            telegram_id: {
                type: new DataTypes.STRING(30),
                allowNull: true,
            },
            student_id: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            qr_code: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            blood_group: {
                type: new DataTypes.STRING(30),
                allowNull: true,
            },
            student_expire_date: {
                type: new DataTypes.DATE(),
                allowNull: true,
            },
            admission_date: {
                type: new DataTypes.DATE(),
                allowNull: true,
            },

            token: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            forget_code: {
                type: new DataTypes.STRING(10),
                allowNull: true,
            },
            user_agent: {
                type: new DataTypes.STRING(150),
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
