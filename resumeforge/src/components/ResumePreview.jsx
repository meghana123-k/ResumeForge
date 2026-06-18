import "./ResumePreview.css";

function ResumePreview({ resumeData, resumeStyle }) {
  return (
    <div
      className={`preview-panel ${resumeStyle.theme}`}
      style={{
        fontFamily: resumeStyle.fontFamily,

        fontSize: resumeStyle.fontSize,

        color: resumeStyle.color,

        fontWeight: resumeStyle.bold ? "700" : "400",

        fontStyle: resumeStyle.italic ? "italic" : "normal",
      }}
    >
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
      <hr />

      <h2>Projects</h2>

      {resumeData.projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>

          <p>
            <strong>Tech Stack:</strong> {project.techStack}
          </p>

          <p>{project.description}</p>

          <p>{project.github}</p>

          <br />
        </div>
      ))}

      <h2>Skills</h2>
      <p>{resumeData.skills}</p>

      <h2>Certifications</h2>

      {resumeData.certifications.map((cert, index) => (
        <div key={index}>
          <p>
            <strong>{cert.name}</strong>

            {" - "}

            {cert.issuer}

            {" - "}

            {cert.year}
          </p>
        </div>
      ))}

      <h2>Achievements</h2>

      <ul>
        {resumeData.achievements.map((achievement, index) => (
          <li key={index}>{achievement.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumePreview;
