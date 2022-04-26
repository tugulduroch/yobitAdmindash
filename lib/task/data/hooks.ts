import { localizeDateFields } from "@lib/core/ui/helpers/dateLocalizer";
import { fetcher } from "@lib/core/utils/query";
import { useMutation, useQuery } from "react-query";
import { Task } from "./task";

export const useTasks = (challengeId: string | undefined) => {
  return useQuery<Task[]>(["tasks", challengeId], async () => {
    if (!challengeId) return [];
    const res = await fetcher.get("task", { challengeId });
    return localizeDateFields(["startDate", "endDate"], res);
  });
};

export const useTaskCreate = () => {
  return useMutation((data: Task) => fetcher.post("task", data));
};

export const useTaskUpdate = () => {
  return useMutation((data: Task) => fetcher.put("task", data));
};

export const useTaskDelete = () => {
  return useMutation((id: string) => fetcher.delete(`task?id=${id}`));
};
