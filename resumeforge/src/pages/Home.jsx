import { useState } from "react";
import "./Home.css";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";

export function Home() {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    summary: "",

    education: [
      {
        degree: "",
        institution: "",
        year: "",
        cgpa: "",
      },
    ],
    experience: [
      {
        role: "",
        company: "",
        duration: "",
        description: "",
      },
    ],
    projects: [
      {
        title: "",
        techStack: "",
        description: "",
        github: "",
      },
    ],
    skills: "",
    certifications: [],
    achievements: [],
  });

  return (
    <div className="container">
      <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />

      <ResumePreview resumeData={resumeData} />
    </div>
  );
}

