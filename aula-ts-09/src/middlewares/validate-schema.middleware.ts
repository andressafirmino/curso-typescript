import { Request, Response, NextFunction } from "express";
import joi, { ObjectSchema } from "joi";
import { Music } from "protocols";

export function validateSchema(schema: ObjectSchema<Music>) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validate = schema.validate(req.body, { abortEarly: false });
        if (validate.error) {
            const errors = validate.error.details.map(detail => detail.message);
            return res.status(422).send({ message: errors });
        }
        next();
    }
}