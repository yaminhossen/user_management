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
        
        .post(`${prefix}/admins`, controllerInstance.import)
        .post(`${prefix}/admins/:admin_id`, controllerInstance.import)
        
        .post(`${prefix}/staffs`, controllerInstance.import)
        .post(`${prefix}/staffs/:staff_id`, controllerInstance.import)
        .post(`${prefix}/staffs/:staff_id/informations`, controllerInstance.import)
        
        .post(`${prefix}/teachers`, controllerInstance.import)
        .post(`${prefix}/teachers/:teacher_id`, controllerInstance.import)
        .post(`${prefix}/teachers/:teacher_id/informations`, controllerInstance.import)
        
        .post(`${prefix}/students`, controllerInstance.import)
        .post(`${prefix}/students/:student_id/educational-background`, controllerInstance.import)
        .post(`${prefix}/students/:student_id/informations`, controllerInstance.import)

        .post(`${prefix}/parents`, controllerInstance.import)
        .post(`${prefix}/parents/:parent_id/informations`, controllerInstance.import) 
        ;
};
