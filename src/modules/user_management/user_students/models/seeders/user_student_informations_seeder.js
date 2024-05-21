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
            user_student_id,
            present_address,
            permanent_address,
            date_of_birth,
            gender,
            nationality,
            city,
            state,
            zip_code,
            post_code,
            country,
            medical_condition,
            current_medications,
            telegram_name,
            telegram_id,
            student_id,
            qr_code,
            blood_group,
            student_expire_date,
            admission_date,
        ) {
            data.push({
                id,
                branch_id,
                user_student_id,
                present_address,
                permanent_address,
                date_of_birth,
                gender,
                nationality,
                city,
                state,
                zip_code,
                post_code,
                country,
                medical_condition,
                current_medications,
                telegram_name,
                telegram_id,
                student_id,
                qr_code,
                blood_group,
                student_expire_date,
                admission_date,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(
            1,
            1,
            1,
            'dhaka',
            'khulna',
            '2024-02-14',
            'male',
            'bangladeshi',
            'khulna',
            'khulna',
            '1216',
            '1216',
            'bangladesh',
            'ok',
            'no',
            'student_one',
            '@student11234',
            '101241044',
            'avatar.png',
            'A+',
            '2025-10-12',
            '2023-10-12',
        );
        set_data(
            2,
            2,
            2,
            'dhaka',
            'barishal',
            '2024-02-14',
            'Female',
            'bangladeshi',
            'potuakhali',
            'Barishal',
            '1216',
            '1216',
            'bangladesh',
            'ok',
            'no',
            'student_two',
            '@student11234',
            '101241045',
            'avatar.png',
            'B+',
            '2025-10-12',
            '2023-10-12',
        );
        set_data(
            3,
            3,
            3,
            'dhaka',
            'Rangpur',
            '2024-02-14',
            'male',
            'bangladeshi',
            'lalmonirhat',
            'Rangpur',
            '1216',
            '1216',
            'bangladesh',
            'ok',
            'no',
            'student_three',
            '@student11234',
            '101241046',
            'avatar.png',
            'O+',
            '2025-10-12',
            '2023-10-12',
        );

        await queryInterface.bulkDelete('user_student_informations', null, {});
        await queryInterface.bulkInsert('user_student_informations', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('user_student_informations', null, {});
    },
};
