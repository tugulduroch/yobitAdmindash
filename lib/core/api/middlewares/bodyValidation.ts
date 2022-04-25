import { ApiRequest } from "@lib/core/data/types";
import { NextApiResponse } from "next";

export const validateBody = (
  req: ApiRequest,
  res: NextApiResponse,
  next: () => void
) => {
  next();
};
