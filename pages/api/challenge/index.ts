import { createHandler } from "../../../lib/core/api/handler";
import db from "@lib/core/data/db";
import { Challenge, ChallengeViewModel } from "@lib/challenge/data/challenge";
import { challengeValidation } from "@lib/challenge/data/validation";
import { authorize } from "@lib/core/api/middlewares/authorize";
const handler = createHandler();

handler
  // .use(authorize)
  .get(async (req, res) => {
    const entries = await db.collection("challenges").get();
    const entriesData = entries.docs.map((entry) => entry.data() as Challenge);
    res.send(entriesData);
  })
  .post(...challengeValidation, async (req, res) => {
    const challenge: ChallengeViewModel = req.body;
    const result = await db.collection("challenges").add(challenge);
    res.send(result);
  })
  .put(async (req, res) => {
    const challenge: ChallengeViewModel = req.body.challenge;
  });

export default handler;
