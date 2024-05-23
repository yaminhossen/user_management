'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        let data = [];
        function set_data(id, user_student_id, sibling_student_id) {
            data.push({
                id,
                user_student_id,
                sibling_student_id,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(1, 1, 3);
        set_data(2, 1, 5);
        set_data(3, 3, 1);
        set_data(4, 3, 5);
        set_data(5, 5, 1);
        set_data(6, 5, 3);

        await queryInterface.bulkDelete('user_student_siblings', null, {});

        await queryInterface.bulkInsert('user_student_siblings', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('user_student_siblings', null, {});
    },
};
