import { createHandler } from "../../../lib/core/api/handler";
import db from "@lib/core/data/db";
import { Challenge, ChallengeViewModel } from "@lib/challenge/data/challenge";
import { challengeValidation } from "@lib/challenge/data/validation";
const handler = createHandler();

handler
  .get(async (req, res) => {
    const entries = await db.collection("challenges").get();
    const entriesData = entries.docs.map((entry) => entry.data() as Challenge);
    res.send(entriesData);
  })
  .post(...challengeValidation, async (req, res) => {
    const challenge: ChallengeViewModel = req.body;
    console.log(challenge);
    const result = await db.collection("challenges").add(challenge);
    res.send(result);
  })
  .put(async (req, res) => {
    const challenge: ChallengeViewModel = req.body.challenge;
  });

export default handler;
