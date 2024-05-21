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
            name,
            phone,
            occupation,
            email,
            photo,
            relation,
            is_parent,
        ) {
            data.push({
                id,
                user_student_id,
                name,
                phone,
                occupation,
                email,
                photo,
                relation,
                is_parent,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(
            1,
            1,
            'parents1',
            '01789738477',
            'Engineer',
            'parent1@gmail.com',
            'avatar.png',
            'father',
            'yes',
        );
        set_data(
            2,
            2,
            'parents2',
            '01789738478',
            'Doctor',
            'parent2@gmail.com',
            'avatar.png',
            'uncle',
            'no',
        );
        set_data(
            3,
            3,
            'parents3',
            '01789738479',
            'Farmer',
            'parent3@gmail.com',
            'avatar.png',
            'father',
            'yes',
        );

        await queryInterface.bulkDelete('user_student_parents', null, {});

        await queryInterface.bulkInsert('user_student_parents', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('user_student_parents', null, {});
    },
};
