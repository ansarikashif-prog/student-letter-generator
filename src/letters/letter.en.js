/**
 * src/letters/letter.en.js
 * English Letter Template
 * Context: Post-result academic support & assignment-related concerns
 * Input: studentData = { fullName, rollNumber, enrollmentNumber, phoneNumber }
 */

const englishLetter = ({ fullName, rollNumber, enrollmentNumber, phoneNumber }) => {
  if (!fullName || !rollNumber || !enrollmentNumber || !phoneNumber) return '';

  return `
Respected Sir,

I, a student of the BA (ODL) programme under the Centre for Distance and Online Education, Jamia Millia Islamia, write this letter with due respect to formally place my academic concerns on record.

At the outset, I would like to sincerely acknowledge and express my gratitude for the declaration of the Second Year BA (ODL) results on 18 December 2025. After an extended period of uncertainty and repeated follow-ups by students, the declaration of results has finally provided clarity regarding subject-wise academic status, including pass and backlog outcomes.

While the declaration of results is appreciated, it has simultaneously brought to light a set of urgent academic challenges, particularly concerning assignments and backlog preparation, which now require immediate and thoughtful attention.

Over the past two academic years, the BA (ODL) programme has not followed a consistent academic timeline. The first year extended over approximately 15–17 months, while the second year was completed within a highly compressed span of about 7–8 months. Due to this irregularity, students were unable to anticipate academic milestones in advance and were neither academically nor mentally prepared for sudden assignment announcements.

Recently, with the announcement of offline classes, students were unexpectedly informed that assignments for language papers were to be submitted within a very short timeframe. This abrupt communication has left students with insufficient time even to plan, let alone prepare academically sound submissions.

The situation is further aggravated by the requirement of hardcopy submission. For students residing outside Delhi, this poses a serious and often impractical challenge. While attendance in offline classes may remain optional for outstation students without direct academic loss, assignment submission through physical means places them at a clear disadvantage. In many cases, timely hardcopy submission is neither logistically feasible nor financially sustainable.

In addition to this, several students have still not received complete prescribed study material for subjects such as BEG-04, BEG-05, BHD-04, and BHD-05 due to stock unavailability. The absence of essential books, combined with limited preparation time, makes it academically unreasonable to expect quality assignment submissions within strict deadlines.

These concerns are not raised in opposition, but with the intent of ensuring that the purpose of result declaration is meaningfully fulfilled by enabling students to address their academic shortcomings in a fair, structured, and humane manner.

In light of the above, I respectfully submit the following requests for your kind consideration:

1) The deadline for submitting assignments should be extended, as the given time is too short.
2) Reconsideration of the hardcopy-only submission requirement, with sincere efforts toward enabling online or alternative submission modes, especially for outstation students.  
3) Immediate resolution of incomplete study material distribution and assurance of timely availability of prescribed books for all subjects.

My details are provided below for your reference:

- Name: ${fullName}  
- Roll Number: ${rollNumber}  
- Enrollment Number: ${enrollmentNumber}  
- Contact Number: ${phoneNumber}  

I submit this representation with due respect and sincere hope that these concerns will be examined sympathetically and addressed in the best academic interest of distance learning students.

Yours sincerely,  
${fullName}
`.trim();
};

export default englishLetter;
