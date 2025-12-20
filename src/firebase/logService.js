// ===============================
// FIRESTORE LOGGING SERVICE
// ===============================
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseConfig";

/**
 * Log student activity to Firestore
 * Non-blocking, failure-safe
 *
 * @param {Object} logData
 * @param {Object} logData.studentData
 * @param {string} logData.language
 * @param {string} logData.letterContent
 * @param {'pdf_download' | 'send_mail'} logData.action
 */
export const logStudentActivity = (logData = {}) => {
  try {
    if (!logData.studentData) return;

    const {
      studentData,
      language = "en",
      action = "unknown",
      letterContent = ""
    } = logData;

    // Soft limit to avoid Firestore document size issues
    const MAX_CONTENT_LENGTH = 5000;
    const safeLetterContent =
      letterContent.length > MAX_CONTENT_LENGTH
        ? letterContent.slice(0, MAX_CONTENT_LENGTH)
        : letterContent;

    // Fire-and-forget logging
    addDoc(collection(db, "studentLogs"), {
      student: {
        fullName: studentData.fullName || "",
        rollNumber: studentData.rollNumber || "",
        enrollmentNumber: studentData.enrollmentNumber || "",
        phoneNumber: studentData.phoneNumber || ""
      },
      language,
      action,
      createdAt: serverTimestamp(),
      letterContent: safeLetterContent
    }).catch(() => {
      // Silent fail — logging must never break UX
    });

  } catch {
    // Absolute safety net — no logs, no crashes
  }
};
