import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const middlewares = [
  ];
  
  export const createHandler = (options = {}) => {
    console.log("create handler");
    return nc<NextApiRequest, NextApiResponse>({
      onError: (err, _, res) => {
        console.error(err);
        res.status(500).end(err.toString());
      },
      onNoMatch: (_, res) => {
        res.status(404).end("Page is not found");
      },
      ...options,
    })
    // .use(...middlewares);
  };
  