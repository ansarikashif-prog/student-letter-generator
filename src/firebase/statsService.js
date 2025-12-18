import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebaseConfig';

const COLLECTION_NAME = 'student_activity'; // use same collection you already log into

export function getSubmissionCount(setCount) {
  try {
    const colRef = collection(db, COLLECTION_NAME);

    return onSnapshot(colRef, (snapshot) => {
      setCount(snapshot.size);
    });
  } catch (error) {
    console.warn('Failed to fetch submission count', error);
    setCount(null);
    return null;
  }
}
