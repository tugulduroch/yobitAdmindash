import { Challenge } from "@lib/challenge/data/challenge";
import { createHandler } from "@lib/core/api/handler";
import { authorize } from "@lib/core/api/middlewares/authorize";
import { db, storage } from "@lib/core/data/services";

const handler = createHandler();

handler
  // .use(authorize)
  .get(async (req, res) => {
    const entries = await db
      .collection("challenges")
      .where("isFeatured", "==", true)
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
  });

export default handler;
