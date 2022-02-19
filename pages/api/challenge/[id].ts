import { createHandler } from "@lib/core/api/handler";
import db from "@lib/core/data/db";

export default createHandler().get(async (req, res) => {
  const entry = await (
    await db
      .collection("challenges")
      .doc(req.query.id as string)
      .get()
  ).data();
  res.send(entry);
});
