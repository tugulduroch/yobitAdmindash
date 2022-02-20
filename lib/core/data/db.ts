import admin, { ServiceAccount } from "firebase-admin";
import serviceAcc from "../../../yobit-54b2a-198cd6d7c625.json";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAcc as ServiceAccount),
      storageBucket: "yobit-54b2a.appspot.com",
    });
  } catch (error: any) {
    console.log("Firebase admin initialization error", error.stack);
  }
}
export default admin.firestore();

export const storage = admin.storage().bucket("yobit-54b2a.appspot.com");
