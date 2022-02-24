import { createHandler } from "../../../lib/core/api/handler";
import { Challenge, ChallengeViewModel } from "@lib/challenge/data/challenge";
import { Task } from "@lib/task/data/task";
import admin, { firestore } from "firebase-admin";
import { authorize } from "@lib/core/api/middlewares/authorize";
import { db } from "@lib/core/data/services";
import { validateTask } from "@lib/task/data/validateTask";
import { query } from "express-validator";
const handler = createHandler();

handler
  .use(authorize)
  .get(async (req, res) => {
    const entries = await db
      .collection("tasks")
      .where("challengeId", "==", req.query.id as string)
      .get();
    const entriesData = entries.docs.map((e) => ({ ...e.data(), id: e.id }));
    res.send(entriesData);
  })
  .post(...validateTask, async (req, res) => {
    const task: Task = req.body;
    const result = await db.collection("tasks").add(task);
    res.send(result);
  })
  .put(query("id").isString(), ...validateTask, async (req, res) => {
    const result = await db
      .collection("tasks")
      .doc(req.query.id as string)
      .update(req.body);
    res.send(result);
  });

export default handler;
