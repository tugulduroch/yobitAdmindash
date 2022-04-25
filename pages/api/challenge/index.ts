import { createHandler } from "@lib/core/api/handler";
import { authenticate, authorize } from "@lib/core/api/middlewares/authorize";
import { db, storage } from "@lib/core/data/services";
import { Challenge } from "@lib/challenge/data/challenge";
import { challengeValidation } from "@lib/challenge/data/validation";
export default createHandler().get(
  authenticate,
  authorize({ hasRole: ["Admin"] }),
  async (req, res) => {
    const entries = await db.collection("challenges").get();
    const challenges = [];
    for (let entry of entries.docs) {
      const c = entry.data();
      c.id = entry.id;
      c.imgUrl = (
        await storage.file(c.imgUrl).getSignedUrl({
          action: "read",
          expires: new Date().getTime() + 100000,
        })
      )[0];
      challenges.push(c);
    }
    res.send(challenges);
  }
);
