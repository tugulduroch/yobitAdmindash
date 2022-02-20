import { createHandler } from "@lib/core/api/handler";
import { authorize } from "@lib/core/api/middlewares/authorize";
import { db } from "@lib/core/data/services";

const collection = db.collection("UserChallenge");

export default createHandler()
  .use(authorize)
  .get(async (req, res) => {
    const isJoined = await collection
      .where("challengeId", "==", req.query.id)
      .where("userId", "==", req.user.uid)
      .get();

    res.send(isJoined.docs[0] != null);
  })
  .post(async (req, res) => {
    const result = await collection.add({
      userId: req.user.uid,
      challengeId: req.query.id,
    });
    res.send(result);
  });
