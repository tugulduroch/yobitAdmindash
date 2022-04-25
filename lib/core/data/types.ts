import { User } from "@lib/users/data/user";
import { NextApiRequest, NextApiResponse } from "next";
import { Role } from "../../auth/data/types";

export interface ApiRequest extends NextApiRequest {
  user: User;
}

export interface ApiResponse extends NextApiResponse {
  locals: {
    uid: string;
    role: Role;
    email: string | undefined;
  };
}
