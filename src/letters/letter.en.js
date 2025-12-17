/**
 * English Letter Template
 * Input: studentData = { fullName, rollNumber, enrollmentNumber, phoneNumber }
 * Tone: Procedural, firm but respectful, reflecting actual student concerns
 */

const englishLetter = (studentData) => {
  if (!studentData) return '';

  const { fullName, rollNumber, enrollmentNumber, phoneNumber } = studentData;

  return `
To the Examination Controller / CDOE Administration,

We, the undersigned students, wish to formally bring to your attention certain concerns regarding the declaration of the second-year results. We submit this letter in the spirit of procedural clarity and academic cooperation.

1) **Excessive Delay in Result Declaration**  
The second-year examinations were completed on 24 August 2025. Despite this, the results have not been declared and no official timeline has been provided. This delay directly affects academic progression and career planning for students.

2) **Lack of Official Communication**  
No formal communication has been issued to students regarding the delay. Repeated attempts to check updates through the website, notice boards, emails, or helpline responses have yielded vague information.

3) **Impact on Third-Year Admission and Continuation**  
Pending results are blocking registration for the third year, submission of fees, and course planning. Students face a risk of missing internal deadlines due to this delay.

4) **Competitive Exams, Jobs, and Future Opportunities**  
Result delay affects applications for competitive exams, higher studies, government or private job processes, and provisional admissions. Many students may face form rejections or verification issues.

5) **Financial and Psychological Pressure**  
Uncertainty is causing undue financial and mental stress. Families and students are unable to plan effectively, which could have been avoided with timely updates.

6) **Request for Clear Timeline or Result Declaration**  
We request that either the results be declared immediately or an official timeline be shared with students. This would help us plan academically and professionally in a reasonable manner.

7) **Acknowledgement of Administrative Workload**  
We understand the workload involved in evaluations and administrative processes. Our request is made with full respect for the efforts of the department.

We provide our details for verification purposes and would appreciate your kind attention to these matters:

- Name: ${fullName}  
- Roll Number: ${rollNumber}  
- Enrollment Number: ${enrollmentNumber}  
- Contact: ${phoneNumber}  

We hope for your prompt action and look forward to receiving a clear update at the earliest.

Sincerely,  
${fullName}  
[On behalf of affected students]
  `.trim();
};

export default englishLetter;
