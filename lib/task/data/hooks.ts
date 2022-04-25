import { localizeDateFields } from "@lib/core/ui/helpers/dateLocalizer";
import { fetcher } from "@lib/core/utils/query";
import { useQuery } from "react-query";
import { Task } from "./task";

export const useTasks = (challengeId: string) => {
  return useQuery<Task[]>(["tasks", challengeId], async () => {
    const res = await fetcher.get("task", { challengeId });
    return localizeDateFields(["startDate", "endDate"], res);
  });
};
