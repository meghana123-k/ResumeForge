function ResumeForm({ resumeData, setResumeData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setResumeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
const addEducation = () => {
  setResumeData((prev) => ({
    ...prev,
    education: [
      ...prev.education,
      {
        degree: "",
        institution: "",
        year: "",
        cgpa: "",
      },
    ],
  }));
};

const removeEducation = (index) => {
  setResumeData((prev) => ({
    ...prev,
    education: prev.education.filter((_, i) => i !== index),
  }));
};

const handleEducationChange = (index, field, value) => {
  setResumeData((prev) => {
    const updatedEducation = [...prev.education];

    updatedEducation[index][field] = value;

    return {
      ...prev,
      education: updatedEducation,
    };
  });
};
  return (
    <div className="form-panel">
      <h2>Resume Information</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={resumeData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={resumeData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={resumeData.phone}
        onChange={handleChange}
      />

      <input
        type="text"
        name="github"
        placeholder="GitHub URL"
        value={resumeData.github}
        onChange={handleChange}
      />

      <input
        type="text"
        name="linkedin"
        placeholder="LinkedIn URL"
        value={resumeData.linkedin}
        onChange={handleChange}
      />

      <textarea
        rows="5"
        name="summary"
        placeholder="Professional Summary"
        value={resumeData.summary}
        onChange={handleChange}
      />
      <h2>Education</h2>

      {resumeData.education.map((edu, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) =>
              handleEducationChange(index, "degree", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Institution"
            value={edu.institution}
            onChange={(e) =>
              handleEducationChange(index, "institution", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Year"
            value={edu.year}
            onChange={(e) =>
              handleEducationChange(index, "year", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="CGPA"
            value={edu.cgpa}
            onChange={(e) =>
              handleEducationChange(index, "cgpa", e.target.value)
            }
          />

          <button type="button" onClick={() => removeEducation(index)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={addEducation}>
        + Add Education
      </button>
    </div>
  );
}

export default ResumeForm;