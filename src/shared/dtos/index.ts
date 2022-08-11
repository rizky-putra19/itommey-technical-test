import Joi from "joi";

export const idDto = Joi.object({
  id: [Joi.number().integer().required()],
});

export * from "./filter";