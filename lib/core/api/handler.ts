import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { corsMiddleware } from "@lib/core/api/cors";
import { ApiRequest, ApiResponse } from "../data/types";
import { authenticate, authorize } from "./middlewares/authorize";

const middlewares = [
  corsMiddleware,
  authenticate,
  authorize({ hasRole: ["Admin"] }),
];

export const createHandler = (options = {}) => {
  console.log("create handler");
  return nc<ApiRequest, ApiResponse>({
    onError: (err, _, res) => {
      console.error(err);
      res.status(500).end(err.toString());
    },
    onNoMatch: (_, res) => {
      res.status(404).end("Page is not found");
    },
    ...options,
  }).use(...middlewares);
};
