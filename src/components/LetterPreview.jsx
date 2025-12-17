import React, { useEffect, useRef } from 'react';

/**
 * LetterPreview Component
 * Editable preview of the letter content.
 * Synchronizes with parent state and allows live editing.
 */
const LetterPreview = ({ content, onChange }) => {
  const editableRef = useRef(null);

  // ===============================
  // SYNC CONTENT INTO EDITABLE AREA
  // ===============================
  useEffect(() => {
    if (editableRef.current && editableRef.current.innerText !== content) {
      editableRef.current.innerText = content;
    }
  }, [content]);

  // ===============================
  // HANDLE USER EDIT
  // ===============================
  const handleInput = () => {
    if (!editableRef.current) return;

    // Maintain line breaks using innerText (plain text)
    const updatedText = editableRef.current.innerText;
    onChange(updatedText);
  };

  // ===============================
  // RENDER
  // ===============================
  return (
    <article className="letter-preview">
      <div
        ref={editableRef}
        className="letter-body"
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        spellCheck={false}
        role="textbox"
        aria-multiline="true"
        aria-label="Editable letter preview"
        tabIndex={0}
        style={{ whiteSpace: 'pre-wrap', outline: 'none' }}
      />
    </article>
  );
};

export default LetterPreview;
