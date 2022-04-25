import { createHandler } from "@lib/core/api/handler";
import { auth } from "@lib/core/data/services";

export default createHandler().post(async (req, res) => {
  const { uid } = await auth.createUser({
    displayName: "Admin",
    password: "Pass1234!",
    email: "tuguldurochh@gmail.com",
  });
  await auth.setCustomUserClaims(uid, { role: "Admin" });
  return res.status(201).send({ uid });
});
