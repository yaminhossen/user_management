'use strict';
import { FastifyInstance } from 'fastify';
import controller from './controller';

module.exports = async function (fastify: FastifyInstance) {
    let prefix: string = '/branches';
    const controllerInstance = controller(fastify);

    fastify
        .get(`${prefix}`, controllerInstance.all)
        .get(`${prefix}/:id`, controllerInstance.find)
        .post(`${prefix}/store`, controllerInstance.store)
        .post(`${prefix}/update`, controllerInstance.update)
        .post(`${prefix}/soft-delete`, controllerInstance.soft_delete)
        .post(`${prefix}/restore`, controllerInstance.restore)
        .post(`${prefix}/destroy`, controllerInstance.destroy)
        .post(`${prefix}/import`, controllerInstance.import)

        .get(`${prefix}/:branch_id/admins`, controllerInstance.admins)
        .get(`${prefix}/:branch_id/admins/:admin_id`, controllerInstance.import)

        .get(`${prefix}/:branch_id/staffs`, controllerInstance.import)
        .get(`${prefix}/:branch_id/staffs/:staff_id`, controllerInstance.import)
        .get(
            `${prefix}/:branch_id/staffs/:staff_id/informations`,
            controllerInstance.import,
        )

        .get(`${prefix}/:branch_id/teachers`, controllerInstance.import)
        .get(
            `${prefix}/:branch_id/teachers/:teacher_id`,
            controllerInstance.import,
        )
        .get(
            `${prefix}/:branch_id/teachers/:teacher_id/informations`,
            controllerInstance.import,
        )

        .get(`${prefix}/:branch_id/students`, controllerInstance.import)
        .get(
            `${prefix}/:branch_id/students/:student_id/educational-background`,
            controllerInstance.import,
        )
        .get(
            `${prefix}/:branch_id/students/:student_id/informations`,
            controllerInstance.import,
        )

        .get(`${prefix}/:branch_id/parents`, controllerInstance.import)
        .get(
            `${prefix}/:branch_id/parents/:parent_id/informations`,
            controllerInstance.import,
        );
};
