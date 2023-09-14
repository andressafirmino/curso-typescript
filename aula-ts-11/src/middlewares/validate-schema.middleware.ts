import { Request, Response, NextFunction } from "express";
import joi, { ObjectSchema } from "joi";
import { Game } from "protocols/game-protocol";

export function validateSchema(schema: ObjectSchema<Game>) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validate = schema.validate(req.body, { abortEarly: false });
        if (validate.error) {
            const errors = validate.error.details.map(detail => detail.message);
            return res.status(422).send({ message: errors });
        }
        next();
    }
}