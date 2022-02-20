import { validateBody } from "@lib/core/api/middlewares/bodyValidation";
import { body } from "express-validator";

export const validateTask = [
  body("challengeId").isString(),
  body("title").isString(),
  body("content").isString(),
  body("endDate").isString(),
  body("startDate").isString(),
  validateBody,
];
