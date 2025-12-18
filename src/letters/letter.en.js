/**
 * src/letters/letter.en.js
 * English Letter Template
 * Input: studentData = { fullName, rollNumber, enrollmentNumber, phoneNumber }
 */

const englishLetter = ({ fullName, rollNumber, enrollmentNumber, phoneNumber }) => {
  if (!fullName || !rollNumber || !enrollmentNumber || !phoneNumber) return '';

  return `
To the Examination Controller / CDOE Administration,

I am writing this letter to formally place on record my academic experience as a student of the BA (ODL) programme under the Centre for Distance and Online Education, Jamia Millia Islamia. I chose this programme with the expectation that, as a reputed Central University, the institution would follow a disciplined academic calendar and ensure timely academic support as outlined in the prospectus. Unfortunately, my experience from the first year onwards has been otherwise.

During my first year, there were extended periods where no clear information was shared by the Centre. For several months, I remained uncertain about academic timelines and the availability of study material. I repeatedly contacted the Centre through emails and personal visits regarding books. The responses were limited to assurances such as “you will be informed,” but no concrete information was provided. Eventually, study material was distributed only shortly before examinations, leaving very little time for preparation. As a result, academic performance was severely impacted. In the 2023 batch, which consisted of more than 2000 students, approximately 1300 students failed in one or more subjects. This reflects systemic shortcomings rather than individual incapability. The first year itself stretched to nearly 15–17 months.

The delay in the first year led to a compressed and academically stressful second year, which was completed within approximately 7–8 months. Assignments were announced suddenly, followed by examinations without adequate preparation time. During this period, I had to make multiple visits to the Centre to collect books, only to be informed repeatedly that the material was unavailable. In some cases, books were not provided even until after examinations, making structured academic preparation nearly impossible.

Despite opting for the offline mode at the time of admission, both the first and second years were largely conducted online. This directly contradicts the option provided during admission. If students are expected to adhere strictly to institutional rules, the system must also adhere to its commitments.

Throughout this period, there was a serious lack of coordination and communication. Official notices were either delayed or absent, and email responses were often late or not received at all. After the completion of second-year examinations on 24 August 2025, no official update regarding result declaration has been communicated.

I was informed that the results had been forwarded to the Examination Controller in October. However, approaching the Examination Controller’s office has not provided any resolution, with students being redirected repeatedly without clarity or accountability.

The academic impact of this prolonged uncertainty has been serious. Delayed study material, irregular classes, and lack of structured academic support have weakened foundational concepts and negatively affected academic outcomes.

In the third year, some improvement is visible. Books are being provided comparatively earlier, and offline classes are being conducted for four out of six subjects. However, issues still persist. Several students have not received complete course material for subjects such as BEG-04, BEG-05, BHD-04, and BHD-05 due to stock unavailability. Assignments are announced with very short timelines and require hardcopy submission, which creates serious difficulties for students residing outside Delhi.

Another major concern is the fee submission process. The Jamia fee portal has recurring technical issues. Student records are often incorrect or missing, and even after successful payment, fee slips are sometimes not generated. Despite confirmation emails, students are forced to make repeated visits for verification, causing unnecessary stress.

These concerns are raised not to revisit past difficulties, but to highlight systemic issues that require correction so that future students do not face similar disruptions.

At present, my most serious concern is the non-declaration of my Second Year BA (ODL) result. Without the result, I am unable to assess my academic standing or plan my next steps.

Therefore, I respectfully request:

1) Immediate declaration of my Second Year BA (ODL) result, or a clearly notified and reliable timeline.  
2) Adequate time for backlog preparation, if applicable.  
3) Flexibility in assignment submission modes, including online submission where feasible.  
4) Timely and complete availability of prescribed study material.  
5) Sustainable Resolution of technical issues related to the fee submission portal.

My details are provided below for verification:

- Name: ${fullName}  
- Roll Number: ${rollNumber}  
- Enrollment Number: ${enrollmentNumber}  
- Contact: ${phoneNumber}  

I submit this representation with due respect and hope for a prompt and considerate response.

Sincerely,  
${fullName}
`.trim();
};

export default englishLetter;
