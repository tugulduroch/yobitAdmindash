import { createHandler } from "../../../lib/core/api/handler";
import db, { storage } from "@lib/core/data/db";
import { Challenge, ChallengeViewModel } from "@lib/challenge/data/challenge";
import { challengeValidation } from "@lib/challenge/data/validation";
import { authorize } from "@lib/core/api/middlewares/authorize";
const handler = createHandler();

handler
  // .use(authorize)
  .get(async (req, res) => {
    const entries = await db
      .collection("challenges")
      .where("isFeatured", "==", false)
      .get();
    const challenges = [];
    for (let entry of entries.docs) {
      const c = entry.data();
      c.imgUrl = (
        await storage.file(c.imgUrl).getSignedUrl({
          action: "read",
          expires: new Date(c.endDate),
        })
      )[0];
      challenges.push(c);
    }
    res.send(challenges);
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
