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
            branch_code,
            name,
            logo,
            address,
            primary_contact,
            email,
            map,
            lat,
            lng,
        ) {
            data.push({
                id,
                branch_code,
                name,
                logo,
                address,
                primary_contact,
                email,
                map,
                lat,
                lng,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(
            1,
            '22',
            'Pilot school, kustia',
            'logo.png',
            'dhaka',
            '01789373847',
            'saiful@gmail.com',
            'map location',
            'latitude',
            'longitude',
        );
        set_data(
            2,
            '23',
            'Demra, dhaka',
            'logo.png',
            'khulna',
            '01789373848',
            'arif@gmail.com',
            'map location',
            'latitude',
            'longitude',
        );
        set_data(
            3,
            '33',
            'Uttora, dhaka',
            'logo.png',
            'barishal',
            '01789373849',
            'tarif@gmail.com',
            'map location',
            'latitude',
            'longitude',
        );

        await queryInterface.bulkDelete('branches', null, {});
        await queryInterface.bulkInsert('branches', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branches', null, {});
    },
};
