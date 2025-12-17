/**
 * Smoothly scroll to a given ref element
 *
 * @param {React.RefObject} ref - React ref to DOM element
 * @param {number} offset - Optional top offset (e.g., fixed header height)
 */
export const scrollToElement = (ref, offset = 0) => {
  if (
    typeof window === 'undefined' ||
    !ref ||
    !ref.current ||
    typeof ref.current.getBoundingClientRect !== 'function'
  ) {
    return;
  }

  const elementTop = ref.current.getBoundingClientRect().top;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const targetPosition = elementTop + scrollTop - offset;

  try {
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  } catch {
    // Fallback for older browsers
    window.scrollTo(0, targetPosition);
  }
};
