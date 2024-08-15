'use client'
import {PersonalInfo, ProjectsList} from "@/types/types";
import AboutMe from "@/components/AboutMe";
import Project from "@/components/Project";



const info: PersonalInfo = {
    name: "Eleazar Hernandez",
    profession: "Software Engineer",
    background: "I have experience in the legal and retail" +
        " industries. I am targeting entry level, new grad, and mid-level software roles as well as " +
        "other roles such as business analyst and technical support.",
    experience: ["Freelance Developer(2022-)", "Software Engineering Intern @ nextgen(Sep. 2023-Mar.2024)"],
    skills: ["React/Next.js", "TypeScript", "Tailwind.css", "Python", "Git", "Java/Spring Boot", "PostgreSQL"],
}

const projectOne: ProjectsList = {
    title: 'Rotate Translation',
    image: "/gavel_for_rotate_translation.png",
    caption: "Full Stack web application for users to upload forms and other important information into a legal translation services.",
    urlLink: "https://payment-form-rotate-translation.vercel.app/",
    hashTags: ["React", "TypeScript", "Firebase", "Stripe"]
}


export default function Portfolio() {
    return (
        <div data-theme="dark">

            <main>
                <div className={'flex justify-center flex-col'}>

                    <AboutMe personalInfo={info}/>

                    <h1 className={'text-3xl font-extrabold mb-3 text-center pt-6'}>Projects</h1>
                    <div className={'lg:flex sm:justify-normal justify-center flex-wrap gap-8'}>
                        <Project projects={projectOne}/>

                    </div>

                </div>

            </main>


        </div>
    )
}
