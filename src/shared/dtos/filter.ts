import Joi from "joi";

export const filterSchema = Joi.object({
  take: Joi.number(),
  skip: Joi.number(),
  select: Joi.array().items(Joi.string()),
  relations: Joi.array().items(Joi.string()),
  where: Joi.object(),
  order: Joi.object(),
});