import React, { useEffect, useState } from 'react';
import { getDaysSinceExam } from '../utils/dateUtils';
import { getSubmissionCount } from '../firebase/statsService';

const HeaderStats = () => {
  const [days, setDays] = useState(getDaysSinceExam());
  const [total, setTotal] = useState(null);

  // Days since exam (update once per hour)
  useEffect(() => {
    const interval = setInterval(() => {
      setDays(getDaysSinceExam());
    }, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, []);

  // Total submissions (realtime or one-time)
  useEffect(() => {
    const unsubscribe = getSubmissionCount(setTotal);
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  return (
    <div className="header-stats">
      <div className="badge">
        🗓️ Days since exam: {days}
      </div>

      <div className="badge">
        Total submissions: {total ?? '—'}
      </div>
    </div>
  );
};

export default HeaderStats;
