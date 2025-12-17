// ===============================
// FIRESTORE LOGGING SERVICE
// ===============================
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from './firebaseConfig';

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
      letterContent = "",
      action = "unknown"
    } = logData;

    // Fire-and-forget logging
    addDoc(collection(db, "studentLogs"), {
      student: {
        fullName: studentData.fullName || "",
        rollNumber: studentData.rollNumber || "",
        enrollmentNumber: studentData.enrollmentNumber || "",
        phoneNumber: studentData.phoneNumber || ""
      },
      language,
      letterContent,
      action,
      createdAt: serverTimestamp()
    }).catch(() => {
      // Silent fail — logging must never break UX
    });

  } catch {
    // Absolute safety net — no logs, no crashes
  }
};
