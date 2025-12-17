/**
 * Format a Date object into a readable string
 * Example: 17 Dec 2025, 12:30 PM
 *
 * @param {Date | string | number} dateInput
 * @param {string} locale - default 'en-IN'
 * @returns {string}
 */
export const formatDate = (dateInput, locale = 'en-IN') => {
  if (!dateInput) return '';

  const date = new Date(dateInput);

  // Guard against Invalid Date
  if (isNaN(date.getTime())) {
    console.warn('Invalid date provided to formatDate:', dateInput);
    return '';
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString(locale, { month: 'short' });
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const period = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;

  return `${day} ${month} ${year}, ${hours}:${minutes} ${period}`;
};
