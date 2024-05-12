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
        function set_data(id,user_admin_id, status,branch_id) {
            data.push({
                id,
                user_admin_id,
                status,branch_id,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,22, 'active',21);
        set_data(2,33, 'active',21);
        set_data(3,11, 'active',32);

        queryInterface.bulkDelete('branch_admins');
        await queryInterface.bulkInsert('branch_admins', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branch_admins', null, {});
    },
};
