import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as user_students_model from './user_students_model';
import * as user_student_educational_backgrounds_model from './user_student_educational_backgrounds_model';
import * as user_student_informations_model from './user_student_informations_model';
import * as user_student_document_values_model from './user_student_document_values_model';
import * as user_student_parents_model from './user_student_parents_model';
import * as user_student_hostels_model from './user_student_hostels_model';
import * as user_student_transports_model from './user_student_transports_model';
import * as user_student_contact_numbers_model from './user_student_contact_numbers_model';
import * as user_student_skills_model from './user_student_skills_model';
import * as user_student_languages_model from './user_student_languages_model';
import * as user_student_document_titles_model from './user_student_document_titles_model';
import * as user_student_siblings_model from './user_student_siblings_model';
// import * as project_model from '../../user_admin copy/models/project_model';
require('dotenv').config();

let host = process?.env.DB_HOST || '';
let post = process?.env.DB_PORT || '';
let user = process?.env.DB_USER || '';
let pass = process?.env.DB_PASS || '';
let database = process?.env.DB_DATABASE || '';

const sequelize = new Sequelize(
    `mysql://${user}:${pass}@${host}:${post}/${database}`,
    {
        logging: false,
    },
);

interface models {
    UserStudentsModel: typeof user_students_model.DataModel;
    UserStudentEducationalBackgroundsModel: typeof user_student_educational_backgrounds_model.DataModel;
    UserStudentInformationsModel: typeof user_student_informations_model.DataModel;
    UserStudentDocumentValuesModel: typeof user_student_document_values_model.DataModel;
    UserStudentParentsModel: typeof user_student_parents_model.DataModel;
    UserStudentHostelsModel: typeof user_student_hostels_model.DataModel;
    UserStudentTransportsModel: typeof user_student_transports_model.DataModel;
    UserStudentContactNumbersModel: typeof user_student_contact_numbers_model.DataModel;
    UserStudentSkillsModel: typeof user_student_skills_model.DataModel;
    UserStudentLanguagesModel: typeof user_student_languages_model.DataModel;
    UserStudentDocumentTitlesModel: typeof user_student_document_titles_model.DataModel;
    UserStudentSiblingsModel: typeof user_student_siblings_model.DataModel;
    // Project: typeof project_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const UserStudentsModel = user_students_model.init(sequelize);
    const UserStudentEducationalBackgroundsModel =
        user_student_educational_backgrounds_model.init(sequelize);
    const UserStudentInformationsModel =
        user_student_informations_model.init(sequelize);
    const UserStudentDocumentValuesModel =
        user_student_document_values_model.init(sequelize);
    const UserStudentParentsModel = user_student_parents_model.init(sequelize);
    const UserStudentHostelsModel = user_student_hostels_model.init(sequelize);
    const UserStudentTransportsModel =
        user_student_transports_model.init(sequelize);
    const UserStudentContactNumbersModel =
        user_student_contact_numbers_model.init(sequelize);
    const UserStudentSkillsModel = user_student_skills_model.init(sequelize);
    const UserStudentLanguagesModel =
        user_student_languages_model.init(sequelize);
    const UserStudentDocumentTitlesModel =
        user_student_document_titles_model.init(sequelize);
    const UserStudentSiblingsModel =
        user_student_siblings_model.init(sequelize);
    // const Project = project_model.init(sequelize);

    await sequelize.sync({ force: false });
    UserStudentsModel.hasOne(UserStudentEducationalBackgroundsModel, {
        sourceKey: 'id',
        foreignKey: 'user_student_id',
        as: 'educational_background',
    });

    UserStudentsModel.hasOne(UserStudentInformationsModel, {
        sourceKey: 'id',
        foreignKey: 'user_student_id',
        as: 'student_info',
    });

    UserStudentsModel.hasMany(UserStudentInformationsModel, {
        sourceKey: 'id',
        foreignKey: 'user_student_id',
        as: 'student_infos',
    });

    UserStudentInformationsModel.belongsTo(UserStudentsModel, {
        foreignKey: 'user_student_id',
        as: 'student',
    });

    UserStudentsModel.belongsToMany(UserStudentsModel, {
        through: 'user_student_siblings',
        otherKey: 'sibling_student_id',
        sourceKey: 'id',
        targetKey: 'user_student_id',
        as: 'user_siblings',
    });

    // UserStudentsModel.belongsToMany(UserStudentsModel, {
    //     through: UserStudentSiblingsModel,
    //     as: 'bb',
    // });

    let models: models = {
        UserStudentsModel,
        UserStudentEducationalBackgroundsModel,
        UserStudentInformationsModel,
        UserStudentDocumentValuesModel,
        UserStudentParentsModel,
        UserStudentHostelsModel,
        UserStudentTransportsModel,
        UserStudentContactNumbersModel,
        UserStudentLanguagesModel,
        UserStudentSkillsModel,
        UserStudentDocumentTitlesModel,
        UserStudentSiblingsModel,
        // Project,

        sequelize,
    };
    return models;
};
export default db;
