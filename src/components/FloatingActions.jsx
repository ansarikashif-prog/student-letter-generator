import React, { useEffect, useRef, useState } from 'react';

/**
 * FloatingActions Component
 * Fly → dock buttons for Download & Send Assignment Request
 */
const FloatingActions = ({
  onDownload,
  onSendMail,
  isGenerating,
  previewEndRef
}) => {
  const sentinelRef = useRef(null);
  const [isDocked, setIsDocked] = useState(false);

  // =====================================
  // INTERSECTION OBSERVER (FLY → DOCK)
  // =====================================
  useEffect(() => {
    const sentinel = previewEndRef?.current || sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When sentinel is visible → dock buttons at end
        setIsDocked(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [previewEndRef]);

  // =====================================
  // RENDER
  // =====================================
  return (
    <>
      {/* Floating / Fixed Actions */}
      <div
        className={`floating-actions ${isDocked ? 'docked' : 'floating'}`}
        aria-label="Assignment actions"
      >
        <button
          type="button"
          className="action-btn download"
          onClick={onDownload}
          aria-label="Download assignment letter PDF"
          disabled={isGenerating}
        >
          {isGenerating ? 'Generating…' : 'Download Letter PDF'}
        </button>

        <button
          type="button"
          className="action-btn mail"
          onClick={onSendMail}
          aria-label="Send assignment-related request email"
        >
          Send Assignment Request
        </button>
      </div>

      {/* Sentinel (used if previewEndRef not passed) */}
      {!previewEndRef && (
        <div
          ref={sentinelRef}
          className="actions-sentinel"
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default FloatingActions;
