import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "firebase-admin";
import { ApiRequest } from "@lib/core/data/types";
import { User } from "@lib/users/data/user";

export const authorize = async (
  req: ApiRequest,
  res: NextApiResponse,
  next: () => void
) => {
  const token = req.headers.authorization?.split("Bearer ")[1];
  if (!token) return res.status(401).send("Unauthorized");
  auth()
    .verifyIdToken(token)
    .then((decoded) => {
      auth()
        .getUser(decoded.uid)
        .then((userRecord) => {
          req.user = userRecord as User;
          next();
        })
        .catch((err) => {
          console.error("Error while getting Firebase User record:", err);
          res.status(403).send("Unauthorized");
        });
    })
    .catch((err) => {
      console.error("Error while verifying Firebase ID token:", err);
      res.status(403).send("Unauthorized");
    });
};
