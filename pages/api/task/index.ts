import { createHandler } from "../../../lib/core/api/handler";
import db from "@lib/core/data/db";
import { Challenge, ChallengeViewModel } from "@lib/challenge/data/challenge";
import { Task } from "@lib/task/data/task";
import admin from "firebase-admin";
import { authorize } from "@lib/core/api/middlewares/authorize";
const handler = createHandler();

handler
  .use(authorize)
  .get(async (req, res) => {
    const entries = await db
      .collection("challenges")
      .doc(req.query.id as string)
      .collection("tasks")
      .get();
    const entriesData = entries.docs.map((e) => e.data());
    res.send(entriesData);
  })
  .post(async (req, res) => {
    const task: Task = req.body;
    const result = await db
      .collection("challenges")
      .doc(req.query.challengeId as string)
      .collection("tasks")
      .add(task);
    res.send(result);
  })
  .put(async (req, res) => {
    const challenge: ChallengeViewModel = req.body.challenge;
  });

export default handler;
