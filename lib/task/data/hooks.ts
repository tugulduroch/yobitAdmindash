import { fetcher } from "@lib/core/utils/query";
import { useQuery } from "react-query";
import { Task } from "./task";

export const useTasks = (challengeId: string) => {
  return useQuery<Task[]>(["tasks", challengeId], () => {
    return fetcher.get("task", { challengeId });
  });
};
