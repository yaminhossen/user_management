import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import response from '../helpers/response';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';

async function details(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let params = req.params as any;

    try {
        let data = await models.BranchesModel.findOne({
            where: {
                id: params.branch_id,
            },
        });

        if (data) {
            let transports = await models.BranchTransportDriversModel.findAll({
                where: {
                    branch_id: data.id,
                },
                include: [
                    {
                        model: models.BranchTransportsModel,
                        as: 'driver_transports',
                        // attributes: [
                        //     'id',
                        //     'title',
                        //     'email',
                        //     'phone_number',
                        //     'image',
                        // ],
                    },
                ],
            });
            return response(200, 'transports found', { data, transports });
        } else {
            throw new custom_error('not found', 404, 'transports not found');
        }
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.params);
        if (error instanceof custom_error) {
            error.uid = uid;
        } else {
            throw new custom_error('server error', 500, error.message, uid);
        }
        throw error;
    }
}

export default details;
