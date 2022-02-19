import { User } from "@lib/users/data/user";
import { NextApiRequest } from "next";

export interface ApiRequest extends NextApiRequest {
  user: User;
}
