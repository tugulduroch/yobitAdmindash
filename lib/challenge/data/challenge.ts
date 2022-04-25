import { Task } from "@lib/task/data/task";

export type Challenge = {
  id: string;
  content: string;
  imgUrl: string;
  title: string;
  endDate: Date;
  startDate: Date;
  isFeatured: boolean;
};

export type ChallengeViewModel = {
  id: string;
  color: string;
  planet: string;
  reward: string;
  content: string;
  imgUrl: string;
  title: string;
  endDate: any;
  startDate: any;
  isFeatured: boolean;
};
