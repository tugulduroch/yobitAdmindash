import { useAuth } from "@lib/auth/ui/AuthProvider";
import { fetcher } from "@lib/core/utils/query";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { ChallengeViewModel } from "./challenge";

export const useChallenges = () => {
  return useQuery<ChallengeViewModel[]>("challenges", async () => {
    let res: ChallengeViewModel[] = await fetcher.get("challenge");

    return res.map((r) => ({
      ...r,
      startDate: r.startDate.replace("Z", ""),
      endDate: r.endDate.replace("Z", ""),
    }));
  });
};

export const useChallengeCreate = () => {
  return useMutation((data: ChallengeViewModel) =>
    fetcher.post("challenge", data)
  );
};

export const useChallengeUpdate = () => {
  return useMutation((data: ChallengeViewModel) =>
    fetcher.put("challenge", data)
  );
};

export const useChallengeDelete = () => {
  return useMutation((id: string) => fetcher.delete(`challenge?id=${id}`));
};
