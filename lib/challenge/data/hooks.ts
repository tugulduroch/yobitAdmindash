import { useAuth } from "@lib/auth/ui/AuthProvider";
import { fetcher } from "@lib/core/utils/query";
import axios from "axios";
import { useQuery } from "react-query";
import { ChallengeViewModel } from "./challenge";

export const useChallenges = () => {
  return useQuery<ChallengeViewModel[]>("challenges", async () =>
    fetcher.get("challenge")
  );
};
