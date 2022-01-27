import { createHandler } from "../../../lib/core/api/handler";
import db from '@lib/core/data/db'
const handler = createHandler();


handler.get(async (req, res) => {
    const entries = await db.collection("challenges").get()
    const entriesData = entries.docs.map(entry=>entry.data())
    res.send(entriesData);
})


export default handler;
