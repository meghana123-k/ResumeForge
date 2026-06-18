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

    certifications: [
      {
        name: "",
        issuer: "",
        year: "",
      },
    ],

    achievements: [
      {
        title: "",
      },
    ],
  });
  const [resumeStyle, setResumeStyle] = useState({
    fontFamily: "Inter",
    fontSize: "16px",
    color: "#111827",
    bold: false,
    italic: false,
    theme: "light",
  });

  return (
    <div className="container">
      <ResumeForm
        resumeData={resumeData}
        setResumeData={setResumeData}
        resumeStyle={resumeStyle}
        setResumeStyle={setResumeStyle}
      />

      <ResumePreview
        resumeData={resumeData}
        resumeStyle={resumeStyle}
        setResumeStyle={setResumeStyle}
      />
    </div>
  );
}
