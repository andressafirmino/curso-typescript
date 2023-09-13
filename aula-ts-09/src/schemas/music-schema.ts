import joi, { ObjectSchema } from "joi";
import { Music } from "protocols";

export const musicSchema: ObjectSchema<Music> = joi.object<Music>({
    title: joi.string().required(),
    artist: joi.string().required()
})
