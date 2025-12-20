import React, { useState, useRef } from 'react';

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
      scrollToElement(previewRef);
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

  const handleDownloadPDF = () => {
    if (!studentData || !letterContent || isGeneratingPDF) return;

    setIsGeneratingPDF(true);

    try {
      generatePDF({
        studentData,
        letterContent
      });

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

    logStudentActivity({
      studentData,
      language,
      letterContent,
      action: 'send_mail'
    });

    const subject = encodeURIComponent(
      'Submission of Academic Representation'
    );

    const body = encodeURIComponent(
      `Respected Sir/Madam,\n\n` +
        `I am submitting the attached academic representation for your kind consideration.\n\n` +
        `Thank you for your time and attention.\n\n` +
        `Sincerely,\n${studentData.fullName}`
    );

    const to = encodeURIComponent(
  'mrizvi@jmi.ac.in,c.smoinuddin@jmi.ac.in'
);

const bcc = encodeURIComponent(
  'vc@jmi.in'
);

window.location.href =
  `mailto:${to}?bcc=${bcc}&subject=${subject}&body=${body}`;

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
