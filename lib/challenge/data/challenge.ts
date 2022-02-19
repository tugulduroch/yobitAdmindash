import { Task } from "@lib/task/data/task";

export type Challenge = {
  id: string;
  content: string;
  imgUrl: string;
  title: string;
  endDate: Date;
  startDate: Date;
  tasks: Task[];
};

export type ChallengeViewModel = {
  id: string;
  content: string;
  imgUrl: string;
  title: string;
  endDate: Date;
  startDate: Date;
};
