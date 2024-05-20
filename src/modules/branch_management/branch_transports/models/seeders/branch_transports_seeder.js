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
            branch_transport_driver_id,
            title,
            type,
        ) {
            data.push({
                id,
                branch_id,
                branch_transport_driver_id,
                title,
                type,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(1, 1, 1, 'electric', 'private');
        set_data(2, 2, 2, 'padle', 'riksaw');
        set_data(3, 3, 3, 'toyota', 'bus');

        await queryInterface.bulkDelete('branch_transports', null, {});
        await queryInterface.bulkInsert('branch_transports', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branch_transports', null, {});
    },
};
