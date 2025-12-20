import React, { useState } from 'react';

/**
 * Initial form state
 */
const initialFormState = {
  fullName: '',
  rollNumber: '',
  enrollmentNumber: '',
  phoneNumber: ''
};

/**
 * StudentForm Component
 * Collects student details for assignment-related letter generation
 */
const StudentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  // ===============================
  // VALIDATION
  // ===============================
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = 'Full name is required.';

    if (!formData.rollNumber.trim())
      newErrors.rollNumber = 'Roll number is required.';

    if (!formData.enrollmentNumber.trim())
      newErrors.enrollmentNumber = 'Enrollment number is required.';

    if (!/^\d{10}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = 'Phone number must be exactly 10 digits.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ===============================
  // HANDLERS
  // ===============================
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onSubmit({
      fullName: formData.fullName.trim(),
      rollNumber: formData.rollNumber.trim(),
      enrollmentNumber: formData.enrollmentNumber.trim(),
      phoneNumber: formData.phoneNumber.trim()
    });
  };

  // ===============================
  // RENDER
  // ===============================
  return (
    <section className="form-card">
      <h2 className="form-title">Student Information</h2>
      <p className="form-description">
        Details required to generate an assignment-related academic request letter.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Zainab"
            required
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && (
            <div id="fullName-error" className="form-error">
              {errors.fullName}
            </div>
          )}
        </div>

        {/* Roll Number */}
        <div className="form-group">
          <label htmlFor="rollNumber">Roll Number</label>
          <input
            id="rollNumber"
            name="rollNumber"
            type="text"
            value={formData.rollNumber}
            onChange={handleChange}
            placeholder="e.g. D23BA0000"
            required
            aria-invalid={Boolean(errors.rollNumber)}
            aria-describedby={errors.rollNumber ? 'rollNumber-error' : undefined}
          />
          {errors.rollNumber && (
            <div id="rollNumber-error" className="form-error">
              {errors.rollNumber}
            </div>
          )}
        </div>

        {/* Enrollment Number */}
        <div className="form-group">
          <label htmlFor="enrollmentNumber">Enrollment Number</label>
          <input
            id="enrollmentNumber"
            name="enrollmentNumber"
            type="text"
            value={formData.enrollmentNumber}
            onChange={handleChange}
            placeholder="e.g. 23-123456"
            required
            aria-invalid={Boolean(errors.enrollmentNumber)}
            aria-describedby={
              errors.enrollmentNumber ? 'enrollmentNumber-error' : undefined
            }
          />
          {errors.enrollmentNumber && (
            <div id="enrollmentNumber-error" className="form-error">
              {errors.enrollmentNumber}
            </div>
          )}
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="10-digit phone number"
            maxLength={10}
            pattern="[0-9]{10}"
            required
            aria-invalid={Boolean(errors.phoneNumber)}
            aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
          />
          {errors.phoneNumber && (
            <div id="phoneNumber-error" className="form-error">
              {errors.phoneNumber}
            </div>
          )}
        </div>

        {/* Submit */}
        <div className="form-submit">
          <button type="submit">
            Generate Assignment Letter Preview
          </button>
        </div>
      </form>
    </section>
  );
};

export default StudentForm;
