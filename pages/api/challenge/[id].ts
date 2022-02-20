import { createHandler } from "@lib/core/api/handler";
import { authorize } from "@lib/core/api/middlewares/authorize";
import { db } from "@lib/core/data/services";

export default createHandler()
  .use(authorize)
  .get(async (req, res) => {
    const entry = await (
      await db
        .collection("challenges")
        .doc(req.query.id as string)
        .get()
    ).data();
    res.send(entry);
  });
