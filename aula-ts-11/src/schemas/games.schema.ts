import joi, { ObjectSchema } from "joi";
import { Game } from "protocols/game-protocol";

export const gamesSchema: ObjectSchema<Game> = joi.object<Game>({
    title: joi.string().required(),
    platform: joi.string().required()
})