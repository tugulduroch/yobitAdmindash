import { ApiRequest } from "@lib/core/data/types";
import { validationResult } from "express-validator";
import { NextApiResponse } from "next";

export const validateBody = (
  req: ApiRequest,
  res: NextApiResponse,
  next: () => void
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "fail",
      message: "invalid request inputs",
      info: errors.array(),
    });
  }
  next();
};
