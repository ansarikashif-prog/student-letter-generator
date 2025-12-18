// src/utils/dateUtils.js
import { EXAM_DATE } from "../config/examConfig";

export function daysSinceExam() {
  const examDate = new Date(EXAM_DATE);
  const now = new Date();
  const diff = Math.floor((now - examDate) / (1000 * 60 * 60 * 24));
  return diff >= 0 ? diff : 0;
}
