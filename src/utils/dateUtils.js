import { EXAM_END_DATE } from '../config/examConfig';

export function getDaysSinceExam() {
  const now = new Date();
  const diffMs = now - EXAM_END_DATE;
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return days >= 0 ? days : 0;
}
