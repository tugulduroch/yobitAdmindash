import { createHandler } from "@lib/core/api/handler";
import { authenticate, authorize } from "@lib/core/api/middlewares/authorize";

export default createHandler().get(
  authenticate,
  authorize({ hasRole: ["Admin"] }),
  async (req, res) => {
    res.send({ lsdkjf: "slkdjf" });
  }
);
