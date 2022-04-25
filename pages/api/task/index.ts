import { createHandler } from "@lib/core/api/handler";
import { db } from "@lib/core/data/services";

export default createHandler().get(async (req, res) => {
  const entries = await db.collection("tasks").get();
  const tasks = [];
  for (let entry of entries.docs) {
    const c = entry.data();
    c.id = entry.id;
    c.startDate = c.startDate.toDate();
    c.endDate = c.endDate.toDate();
    // c.planet = (
    //   await storage.file(c.planet).getSignedUrl({
    //     action: "read",
    //     expires: new Date().getTime() + 100000,
    //   })
    // )[0];
    tasks.push(c);
  }
  res.send(tasks);
});
