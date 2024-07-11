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
    await body('asset_category_id')
        .not()
        .isEmpty()
        .withMessage('the asset_category_id field is required')
        .run(req);
    await body('asset_type_id')
        .not()
        .isEmpty()
        .withMessage('the asset_type_id field is required')
        .run(req);
    await body('purchase_date')
        .not()
        .isEmpty()
        .withMessage('the purchase_date field is required')
        .run(req);
    await body('purchase_cost')
        .not()
        .isEmpty()
        .withMessage('the purchase_cost field is required')
        .run(req);
    await body('current_value')
        .not()
        .isEmpty()
        .withMessage('the current_value field is required')
        .run(req);
    await body('waranty_date')
        .not()
        .isEmpty()
        .withMessage('the waranty_date field is required')
        .run(req);
    await body('attachment')
        .not()
        .isEmpty()
        .withMessage('the attachment field is required')
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
    let data = new models.AssetsModel();

    let inputs: InferCreationAttributes<typeof data> = {
        branch_id: body.branch_id,
        asset_category_id: body.asset_category_id,
        asset_type_id: body.asset_type_id,
        purchase_cost: body.purchase_cost,
        purchase_date: body.purchase_date,
        current_value: body.current_value,
        waranty_date: body.waranty_date,
        attachment: body.attachment,
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
