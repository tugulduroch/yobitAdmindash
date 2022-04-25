import { createHandler } from "@lib/core/api/handler";
import { authenticate, authorize } from "@lib/core/api/middlewares/authorize";
import { db, storage } from "@lib/core/data/services";
import { Timestamp } from "firebase-admin/firestore";
import { Challenge } from "@lib/challenge/data/challenge";
export default createHandler()
  .get(async (req, res) => {
    const entries = await db.collection("challenges").get();
    const challenges = [];
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
      challenges.push(c);
    }
    res.send(challenges);
  })
  .post(async (req, res) => {
    req.body.startDate = Timestamp.fromDate(new Date(req.body.startDate));
    req.body.endDate = Timestamp.fromDate(new Date(req.body.endDate));
    const result = await db.collection("challenges").add(req.body);
    res.send(result.id);
  })
  .put(async (req, res) => {
    req.body.startDate = Timestamp.fromDate(new Date(req.body.startDate));
    req.body.endDate = Timestamp.fromDate(new Date(req.body.endDate));
    const result = await db
      .collection("challenges")
      .doc(req.body.id)
      .update(req.body);
    res.send(result.writeTime);
  })
  .delete(async (req, res) => {
    const result = await db
      .collection("challenges")
      .doc(req.query.id as string)
      .delete();
    res.send(result.writeTime);
  });
