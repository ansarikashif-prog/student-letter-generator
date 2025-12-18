// src/firebase/statsService.js

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebaseConfig";

// ⚠️ IMPORTANT:
// This MUST match the collection used in logService.js
// logService.js → collection(db, "studentLogs")
const COLLECTION_NAME = "studentLogs";

/**
 * Subscribe to total submission count (realtime)
 * - Safe unsubscribe
 * - Failure does NOT crash UI
 *
 * @param {(count: number | null) => void} setCount
 * @returns {() => void | null}
 */
export function getSubmissionCount(setCount) {
  try {
    const colRef = collection(db, COLLECTION_NAME);

    // Realtime listener
    const unsubscribe = onSnapshot(
      colRef,
      (snapshot) => {
        setCount(snapshot.size);
      },
      (error) => {
        console.warn("Submission count listener error:", error);
        setCount(null);
      }
    );

    return unsubscribe;
  } catch (error) {
    console.warn("Failed to initialize submission count listener", error);
    setCount(null);
    return null;
  }
}
