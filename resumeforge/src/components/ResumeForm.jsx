import "./ResumeForm.css";
import Toolbar from "./Toolbar";
function ResumeForm({
  resumeData,
  setResumeData,
  resumeStyle,
  setResumeStyle,
}) {
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
  const addExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          role: "",
          company: "",
          duration: "",
          description: "",
        },
      ],
    }));
  };

  const removeExperience = (index) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };
  const handleExperienceChange = (index, field, value) => {
    setResumeData((prev) => {
      const updatedExperience = [...prev.experience];

      updatedExperience[index][field] = value;

      return {
        ...prev,
        experience: updatedExperience,
      };
    });
  };
  const addProject = () => {
    setResumeData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          title: "",
          techStack: "",
          description: "",
          github: "",
        },
      ],
    }));
  };

  const removeProject = (index) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  const handleProjectChange = (index, field, value) => {
    setResumeData((prev) => {
      const updatedProjects = [...prev.projects];

      updatedProjects[index][field] = value;

      return {
        ...prev,
        projects: updatedProjects,
      };
    });
  };
  const addCertification = () => {
    setResumeData((prev) => ({
      ...prev,

      certifications: [
        ...prev.certifications,

        {
          name: "",
          issuer: "",
          year: "",
        },
      ],
    }));
  };

  const removeCertification = (index) => {
    setResumeData((prev) => ({
      ...prev,

      certifications: prev.certifications.filter((_, i) => i !== index),
    }));
  };

  const handleCertificationChange = (index, field, value) => {
    setResumeData((prev) => {
      const updated = [...prev.certifications];

      updated[index][field] = value;

      return {
        ...prev,

        certifications: updated,
      };
    });
  };
  const addAchievement = () => {
    setResumeData((prev) => ({
      ...prev,

      achievements: [
        ...prev.achievements,

        {
          title: "",
        },
      ],
    }));
  };

  const removeAchievement = (index) => {
    setResumeData((prev) => ({
      ...prev,

      achievements: prev.achievements.filter((_, i) => i !== index),
    }));
  };

  const handleAchievementChange = (index, value) => {
    setResumeData((prev) => {
      const updated = [...prev.achievements];

      updated[index].title = value;

      return {
        ...prev,

        achievements: updated,
      };
    });
  };
  return (
    <div className="form-panel">
      <Toolbar resumeStyle={resumeStyle} setResumeStyle={setResumeStyle} />
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

          <button
            className="remove-btn"
            type="button"
            onClick={() => removeEducation(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={addEducation}>
        + Add Education
      </button>
      <h2>Experience</h2>

      {resumeData.experience.map((exp, index) => (
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
            placeholder="Role"
            value={exp.role}
            onChange={(e) =>
              handleExperienceChange(index, "role", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={(e) =>
              handleExperienceChange(index, "company", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Duration"
            value={exp.duration}
            onChange={(e) =>
              handleExperienceChange(index, "duration", e.target.value)
            }
          />

          <textarea
            rows="4"
            placeholder="Description"
            value={exp.description}
            onChange={(e) =>
              handleExperienceChange(index, "description", e.target.value)
            }
          />

          <button
            className="remove-btn"
            type="button"
            onClick={() => removeExperience(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={addExperience}>
        + Add Experience
      </button>
      <h2>Projects</h2>

      {resumeData.projects.map((project, index) => (
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
            placeholder="Project Title"
            value={project.title}
            onChange={(e) =>
              handleProjectChange(index, "title", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Tech Stack"
            value={project.techStack}
            onChange={(e) =>
              handleProjectChange(index, "techStack", e.target.value)
            }
          />

          <textarea
            rows="4"
            placeholder="Project Description"
            value={project.description}
            onChange={(e) =>
              handleProjectChange(index, "description", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="GitHub Repository"
            value={project.github}
            onChange={(e) =>
              handleProjectChange(index, "github", e.target.value)
            }
          />

          <button
            className="remove-btn"
            type="button"
            onClick={() => removeProject(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={addProject}>
        + Add Project
      </button>
      <h2>Skills</h2>

      <textarea
        rows="4"
        name="skills"
        placeholder="React, JavaScript, Python, SQL"
        value={resumeData.skills}
        onChange={handleChange}
      />
      <h2>Certifications</h2>

      {resumeData.certifications.map((cert, index) => (
        <div key={index} className="form-card">
          <input
            type="text"
            placeholder="Certification Name"
            value={cert.name}
            onChange={(e) =>
              handleCertificationChange(index, "name", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Issuer"
            value={cert.issuer}
            onChange={(e) =>
              handleCertificationChange(index, "issuer", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Year"
            value={cert.year}
            onChange={(e) =>
              handleCertificationChange(index, "year", e.target.value)
            }
          />

          <button
            className="remove-btn"
            type="button"
            onClick={() => removeCertification(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={addCertification}>
        + Add Certification
      </button>
      <h2>Achievements</h2>

      {resumeData.achievements.map((achievement, index) => (
        <div key={index} className="form-card">
          <input
            type="text"
            placeholder="Achievement"
            value={achievement.title}
            onChange={(e) => handleAchievementChange(index, e.target.value)}
          />

          <button
            className="remove-btn"
            type="button"
            onClick={() => removeAchievement(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={addAchievement}>
        + Add Achievement
      </button>
    </div>
  );
}
export default ResumeForm;
