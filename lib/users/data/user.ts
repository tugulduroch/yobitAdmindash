import { UserRecord } from "firebase-admin/lib/auth/user-record";

export type User = Pick<
  UserRecord,
  "phoneNumber" | "email" | "displayName" | "uid" | "photoURL"
>;
