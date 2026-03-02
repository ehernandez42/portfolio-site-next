"use client";
import { PersonalInfo, ProjectsList } from "@/types/types";
import AboutMe from "@/components/AboutMe";
import Project from "@/components/Project";
import NavBar from "@/components/NavBar";

const info: PersonalInfo = {
  name: "Eleazar Hernandez",
  profession: "Software Engineer",
  background:
    "I have experience in the legal and retail industries. I am targeting entry level, new grad, and mid-level software roles as well as other roles such as business analyst and technical support.",
  experience: [
    "Freelance Developer (2022-)",
    "Software Engineering Intern @ NextGen (Sep. 2023-Mar. 2024)",
  ],
  skills: [
    "React/Next.js",
    "TypeScript",
    "Tailwind.css",
    "Python",
    "Git",
    "Java/Spring Boot",
    "PostgreSQL",
  ],
};

const projectOne: ProjectsList = {
  title: "Rotate Translation",
  image: "/gavel_for_rotate_translation.png",
  caption:
    "Full Stack web application for users to upload forms and other important information into a legal translation services.",
  urlLink: "https://payment-form-rotate-translation.vercel.app/",
  hashTags: ["React", "TypeScript", "Firebase", "Stripe"],
};

export default function Portfolio() {
  return (
    <div className="bg-sawad-bg min-h-screen">
      <NavBar />
      <main className="max-w-[1140px] mx-auto px-6 pt-24 pb-16">
        <h1 className="font-poppins font-bold text-4xl mb-10">Portfolio</h1>

        <AboutMe personalInfo={info} />

        <h2 className="font-poppins font-bold text-3xl mt-14 mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Project projects={projectOne} />
        </div>
      </main>
    </div>
  );
}
