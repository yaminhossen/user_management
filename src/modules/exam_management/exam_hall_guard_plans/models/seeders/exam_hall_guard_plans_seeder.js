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
            branch_id,
            exam_id,
            class_id,
            teacher_id,
            building_id,
            room_id,
            subject_id,
            date,
        ) {
            data.push({
                id,
                branch_id,
                exam_id,
                class_id,
                teacher_id,
                building_id,
                room_id,
                subject_id,
                date,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(1, 1, 1, 1, 1, 1, 1, 1, '2024-02-14');
        set_data(2, 2, 2, 2, 2, 2, 2, 2, '2024-02-16');
        set_data(3, 3, 3, 3, 3, 3, 3, 3, '2024-02-18');

        await queryInterface.bulkDelete('exam_hall_guard_plans', null, {});
        await queryInterface.bulkInsert('exam_hall_guard_plans', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('exam_hall_guard_plans', null, {});
    },
};
