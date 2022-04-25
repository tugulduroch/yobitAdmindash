import {
  createContext,
  ReactChild,
  useContext,
  useEffect,
  useState,
} from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { User } from "../data/types";
import { auth } from "../data/firebaseAuth";
import { useRouter } from "next/router";

const AuthContext = createContext<User | null>(null);

export const AuthProvider = ({ children }: { children: ReactChild }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const router = useRouter();
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (!user) sessionStorage.removeItem("token");
      else sessionStorage.setItem("token", await user.getIdToken());
      console.log(user);
      if (!user) router.push("/auth/login");
    });
  }, []);
  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
