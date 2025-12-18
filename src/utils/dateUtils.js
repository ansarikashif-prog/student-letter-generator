// src/utils/dateUtils.js

import { EXAM_END_DATE } from "../config/examConfig";

/**
 * Calculate number of days passed since the exam end date
 * - Returns 0 if exam date is in the future
 * - Safe against invalid dates
 *
 * @returns {number}
 */
export function daysSinceExam() {
  const examDate = new Date(EXAM_END_DATE);
  const now = new Date();

  // Safety guard: invalid date should not crash UI
  if (isNaN(examDate.getTime())) {
    console.warn("Invalid EXAM_END_DATE provided");
    return 0;
  }

  const diffInMs = now.getTime() - examDate.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return diffInDays >= 0 ? diffInDays : 0;
}
