import React, { useState, useRef } from 'react';
import EMAILS from './config/emails';

// ===============================
// COMPONENTS
// ===============================
import Header from './components/Header';
import Footer from './components/Footer';
import StudentForm from './components/StudentForm';
import LanguageToggle from './components/LanguageToggle';
import LetterPreview from './components/LetterPreview';
import FloatingActions from './components/FloatingActions';

// ===============================
// LETTER TEMPLATES
// ===============================
import englishLetter from './letters/letter.en';
import hindiLetter from './letters/letter.hi';

// ===============================
// UTILS
// ===============================
import { generatePDF } from './utils/pdfGenerator';
import { logStudentActivity } from './firebase/logService';
import { scrollToElement } from './utils/scrollHelpers';

const App = () => {
  // ===============================
  // STATE
  // ===============================
  const [studentData, setStudentData] = useState(null);
  const [language, setLanguage] = useState('en');
  const [letterContent, setLetterContent] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // ===============================
  // REFS
  // ===============================
  const previewRef = useRef(null);

  // ===============================
  // HANDLERS
  // ===============================
  const handleFormSubmit = (data) => {
    setStudentData(data);
    setLanguage('en');
    setLetterContent(englishLetter(data));
    setIsSubmitted(true);

    setTimeout(() => {
      if (previewRef.current) {
        scrollToElement(previewRef.current);
      }
    }, 100);
  };

  const handleLanguageChange = (lang) => {
    if (!studentData) return;

    setLanguage(lang);
    setLetterContent(
      lang === 'hi'
        ? hindiLetter(studentData)
        : englishLetter(studentData)
    );
  };

  const handleDownloadPDF = async () => {
    if (!studentData || !letterContent || isGeneratingPDF) return;

    setIsGeneratingPDF(true);

    try {
      await generatePDF({
        studentData,
        letterContent,
        language
      });

      // Non-blocking log
      logStudentActivity({
        studentData,
        language,
        letterContent,
        action: 'pdf_download'
      });
    } catch (error) {
      console.error('PDF generation failed:', error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleSendMail = () => {
    if (!studentData || !letterContent) return;

    // Fire-and-forget log
    logStudentActivity({
      studentData,
      language,
      letterContent,
      action: 'send_mail'
    });

    const subject = encodeURIComponent(
      'Regarding Non-Declaration of BA (ODL) Examination Result'
    );

    // Convert content to plain text (mailto safe)
    const rawBody = letterContent
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/?[^>]+(>|$)/g, '');

    // ⚠️ Mailto length safety (browser limitation)
    const MAX_BODY_LENGTH = 1800;

    const safeBody =
      rawBody.length > MAX_BODY_LENGTH
        ? rawBody.slice(0, MAX_BODY_LENGTH) +
          '\n\n[Content truncated. Please see attached PDF.]'
        : rawBody;

    const body = encodeURIComponent(safeBody);

    const to = EMAILS.to.join(',');
    const cc = EMAILS.cc.join(',');
    const bcc = EMAILS.bcc.join(',');

    const mailtoLink =
      `mailto:${to}` +
      `?cc=${cc}` +
      `&bcc=${bcc}` +
      `&subject=${subject}` +
      `&body=${body}`;

    // Browser-level navigation (expected behavior)
    window.location.href = mailtoLink;
  };

  // ===============================
  // RENDER
  // ===============================
  return (
    <>
      <Header />

      <main className="app-container">
        <StudentForm onSubmit={handleFormSubmit} />

        {isSubmitted && (
          <LanguageToggle
            language={language}
            onChange={handleLanguageChange}
          />
        )}

        {isSubmitted && (
          <section ref={previewRef}>
            <LetterPreview
              content={letterContent}
              onChange={setLetterContent}
            />
          </section>
        )}

        {isSubmitted && (
          <FloatingActions
            onDownload={handleDownloadPDF}
            onSendMail={handleSendMail}
            isGenerating={isGeneratingPDF}
          />
        )}
      </main>

      <Footer />
    </>
  );
};

export default App;
