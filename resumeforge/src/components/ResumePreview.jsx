function ResumePreview({ resumeData }) {
  return (
    <div className="preview-panel">
      <h1>{resumeData.name || "Your Name"}</h1>

      <div className="contact-section">
        {resumeData.email && <p>{resumeData.email}</p>}
        {resumeData.phone && <p>{resumeData.phone}</p>}
        {resumeData.github && <p>{resumeData.github}</p>}
        {resumeData.linkedin && <p>{resumeData.linkedin}</p>}
      </div>

      <hr />

      <h2>Professional Summary</h2>

      <p>{resumeData.summary || "Your summary will appear here..."}</p>
      <hr />

      <h2>Education</h2>

      {resumeData.education.map((edu, index) => (
        <div key={index}>
          <h4>{edu.degree}</h4>

          <p>{edu.institution}</p>

          <p>
            {edu.year}
            {edu.cgpa && ` | CGPA: ${edu.cgpa}`}
          </p>

          <br />
        </div>
      ))}
    </div>
  );
}

export default ResumePreview;
