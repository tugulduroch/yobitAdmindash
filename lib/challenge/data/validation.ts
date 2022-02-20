import { validateBody } from "@lib/core/api/middlewares/bodyValidation";
import { body } from "express-validator";

export const challengeValidation = [
  body("content").isLength({ min: 1 }),
  body("imgUrl").isLength({ min: 1 }),
  body("title").isLength({ min: 1 }),
  body("endDate").isLength({ min: 1 }),
  body("startDate").isLength({ min: 1 }),
  body("isFeatured").isBoolean(),
  validateBody,
];
