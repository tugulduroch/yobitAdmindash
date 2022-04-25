import { useAuth } from "@lib/auth/ui/AuthProvider";
import axios from "axios";
import { useQuery } from "react-query";

export const useChallenges = () => {
  const currentUser = useAuth();
  return useQuery("challenges", async () =>
    axios.get("/api/challenge", {
      headers: {
        Authorization: `Bearer ${await currentUser?.getIdToken()}`,
      },
    })
  );
};
