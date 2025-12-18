import React, { useEffect, useState } from 'react';
import { daysSinceExam } from "../utils/dateUtils";
import { getSubmissionCount } from "../firebase/statsService";

const HeaderStats = () => {
  const [days, setDays] = useState(daysSinceExam());
  const [total, setTotal] = useState(null);

  // Update days since exam (hourly)
  useEffect(() => {
    const interval = setInterval(() => {
      setDays(daysSinceExam());
    }, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, []);

  // Total submissions
  useEffect(() => {
    const unsubscribe = getSubmissionCount(setTotal);
    return () => {
      if (typeof unsubscribe === "function") unsubscribe();
    };
  }, []);

  return (
    <div className="header-stats">
      <div className="badge">
        Days since exam: {days}
      </div>

      <div className="badge">
        Total submissions: {total ?? "—"}
      </div>
    </div>
  );
};

export default HeaderStats;
