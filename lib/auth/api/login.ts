import { AuthForm } from "../data/types";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../data/firebaseAuth";

export const login = async ({ email, password }: AuthForm) => {
  return new Promise((res, rej) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((val) => res(val))
      .catch((err) => rej(err));
  });
};
