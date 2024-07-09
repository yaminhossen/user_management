import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { body, validationResult } from 'express-validator';
import {
    anyObject,
    responseObject,
    Request,
} from '../../../common_types/object';
import response from '../helpers/response';
import { InferCreationAttributes } from 'sequelize';
import custom_error from '../helpers/custom_error';
import error_trace from '../helpers/error_trace';

async function validate(req: Request) {
    await body('branch_id')
        .not()
        .isEmpty()
        .withMessage('the branch_id field is required')
        .run(req);

    await body('branch_student_id')
        .not()
        .isEmpty()
        .withMessage('the branch_student_id field is required')
        .run(req);

    await body('start_time')
        .not()
        .isEmpty()
        .withMessage('the start_time field is required')
        .run(req);

    await body('end_time')
        .not()
        .isEmpty()
        .withMessage('the end_time field is required')
        .run(req);

    await body('date')
        .not()
        .isEmpty()
        .withMessage('the date field is required')
        .run(req);

    await body('attendance_status')
        .not()
        .isEmpty()
        .withMessage('the attendance_status field is required')
        .run(req);

    await body('overtime_hours')
        .not()
        .isEmpty()
        .withMessage('the overtime_hours field is required')
        .run(req);

    await body('fine_amount')
        .not()
        .isEmpty()
        .withMessage('the fine_amount field is required')
        .run(req);

    await body('reward_amount')
        .not()
        .isEmpty()
        .withMessage('the reward_amount field is required')
        .run(req);

    let result = await validationResult(req);

    return result;
}

async function store(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    /** validation */
    let validate_result = await validate(req as Request);
    if (!validate_result.isEmpty()) {
        return response(422, 'validation error', validate_result.array());
    }

    /** initializations */
    let models = await db();
    let body = req.body as anyObject;
    let data = new models.AccontsModel();

    let inputs: InferCreationAttributes<typeof data> = {
        branch_id: body.branch_id,
        title: body.title,
        description: body.description,
    };

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        (await data.update(inputs)).save();
        return response(200, 'data created', data);
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        throw new custom_error('server error', 500, error.message, uid);
    }
}

export default store;