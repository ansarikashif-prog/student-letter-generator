import jsPDF from "jspdf";

/**
 * Generate PDF directly from text (no html2canvas)
 * Unicode-safe, multi-page, includes timestamp
 *
 * @param {Object} studentData - { fullName, rollNumber, enrollmentNumber, phoneNumber }
 * @param {string} letterContent - Full letter text
 */
export const generatePDF = ({ studentData, letterContent }) => {
  if (!studentData || !letterContent) {
    console.warn("Missing student data or letter content");
    return;
  }

  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const margin = 50;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const lineHeight = 16; // spacing between lines
  let y = margin;

  // ===============================
  // SELECT FONT
  // ===============================
  // Use a Devanagari font if Hindi detected
  const font = /[\u0900-\u097F]/.test(letterContent)
    ? "Mangal"
    : "Times";
  doc.setFont(font);
  doc.setFontSize(12);

  // ===============================
  // HEADER
  // ===============================
  const header = `
Student Name: ${studentData.fullName}
Roll Number: ${studentData.rollNumber}
Enrollment Number: ${studentData.enrollmentNumber}
Phone: ${studentData.phoneNumber}

--------------------------------------------------
`;

  const fullText = header + letterContent;

  // ===============================
  // SPLIT TEXT INTO LINES
  // ===============================
  const lines = doc.splitTextToSize(fullText, pageWidth - margin * 2);

  lines.forEach((line) => {
    if (y + lineHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
    doc.text(line, margin, y);
    y += lineHeight;
  });

  // ===============================
  // TIMESTAMP
  // ===============================
  const timestamp = new Date().toLocaleString();
  const totalPages = doc.getNumberOfPages();

  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(9);
    doc.setTextColor(107, 114, 128); // gray
    doc.text(`Generated on: ${timestamp}`, margin, pageHeight - 20);
  }

  // ===============================
  // SAVE PDF
  // ===============================
  const safeName = studentData.fullName.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
  doc.save(`letter_${safeName}.pdf`);
};
