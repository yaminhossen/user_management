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
        function set_data(
            id,
            user_student_id,
            branch_building_id,
            branch_building_room_id,
            branch_id,
        ) {
            data.push({
                id,
                user_student_id,
                branch_building_id,
                branch_building_room_id,
                branch_id,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(1, 1, 1, 1);
        set_data(2, 2, 2, 2);
        set_data(3, 3, 3, 3);

        await queryInterface.bulkDelete('user_student_transports', null, {});

        await queryInterface.bulkInsert('user_student_transports', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('user_student_transports', null, {});
    },
};
