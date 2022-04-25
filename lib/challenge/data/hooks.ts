import { useAuth } from "@lib/auth/ui/AuthProvider";
import { localizeDateFields } from "@lib/core/ui/helpers/dateLocalizer";
import { fetcher } from "@lib/core/utils/query";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { ChallengeViewModel } from "./challenge";

export const useChallenges = () => {
  return useQuery<ChallengeViewModel[]>("challenges", async () => {
    let res: ChallengeViewModel[] = await fetcher.get("challenge");
    return localizeDateFields(["startDate", "endDate"], res);
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
