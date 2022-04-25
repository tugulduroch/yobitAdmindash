import { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { ApiRequest, ApiResponse } from "@lib/core/data/types";
import { User } from "@lib/users/data/user";
import { auth } from "@lib/core/data/services";
import { Role } from "@lib/auth/data/types";

export const authenticate = async (
  req: ApiRequest,
  res: ApiResponse,
  next: () => void
) => {
  const token = req.headers.authorization?.split("Bearer ")[1];
  if (!token) return res.status(401).send("Unauthorized");
  try {
    const decodedToken: admin.auth.DecodedIdToken = await auth.verifyIdToken(
      token
    );
    res.locals = {
      ...res.locals,
      uid: decodedToken.uid,
      role: decodedToken.role,
      email: decodedToken.email,
    };
    return next();
  } catch (err) {
    console.error(`auth error: ${err}`);
    return res.status(401).send({ message: "Unauthorized" });
  }
};

export const authorize = (opts: {
  hasRole: Array<Role>;
  allowSameUser?: boolean;
}) => {
  return (req: ApiRequest, res: ApiResponse, next: Function) => {
    const { role, email, uid } = res.locals;
    const { id } = req.query;

    if (opts.allowSameUser && id && uid === id) return next();

    if (!role) return res.status(403).send({});

    if (opts.hasRole.includes(role)) return next();

    return res.status(403).send({});
  };
};
