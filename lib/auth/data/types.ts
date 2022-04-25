import { User as FirebaseUser } from "firebase/auth";

export type Role = "Admin" | "User";

export type User = FirebaseUser;
export type AuthForm = {
  email: string;
  password: string;
};
