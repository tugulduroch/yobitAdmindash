import admin, { ServiceAccount } from 'firebase-admin';
import serviceAcc from '../../../yobit-54b2a-198cd6d7c625.json';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAcc as ServiceAccount),
    });
  } catch (error: any) {
    console.log('Firebase admin initialization error', error.stack);
  }
}
export default admin.firestore();