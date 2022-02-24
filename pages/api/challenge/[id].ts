import { Challenge } from "@lib/challenge/data/challenge";
import { createHandler } from "@lib/core/api/handler";
import { authorize } from "@lib/core/api/middlewares/authorize";
import { db, storage } from "@lib/core/data/services";

export default createHandler()
  .use(authorize)
  .get(async (req, res) => {
    const entry = await db
      .collection("challenges")
      .doc(req.query.id as string)
      .get();
    let c: any = { ...entry.data(), id: entry.id };
    c.imgUrl = (
      await storage.file(c.imgUrl).getSignedUrl({
        action: "read",
        expires: new Date(c.endDate),
      })
    )[0];
    res.send(c);
  });
