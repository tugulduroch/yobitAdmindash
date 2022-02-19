import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

const cors = Cors({
  methods: ["GET", "HEAD", "POST", "PUT", "DELETE"],
});

export function corsMiddleware(
  req: NextApiRequest & { protocol: string },
  _: NextApiResponse,
  next: () => void
) {
  cors(req, _, (result) => {
    if (result instanceof Error) {
      throw result;
    }
    next();
  });
}
