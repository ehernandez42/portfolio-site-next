'use client'
import {PersonalInfo, ProjectsList, Testimonial} from "@/types/types";
import AboutMe from "@/components/AboutMe";
import Project from "@/components/Project";
import Link from "next/link";

const selmaQuote: Testimonial = {
    quote: "Eleazar knows how to treat his clients - he walked me through the project " +
        "every week and took feedback seriously. He connected completely different platforms " +
        "for my website while still keeping the design with my customers in mind. My concerns were " +
        "mainly around bilingual functionality and privacy, and Eleazar delivered.",
    author: "Selma Lara, Rotate Translation",
    website: "https://turbot-hexahedron-35sx.squarespace.com"

}


const info: PersonalInfo = {
    name: "Eleazar Hernandez",
    profession: "Software Engineer",
    background: "I have experience in the legal and retail" +
        " industries. I am targeting entry level, new grad, and mid-level software roles as well as " +
        "other roles such as business analyst and technical support.",
    experience: ["Freelance Developer(2022-)", "Software Engineering Intern @ nextgen(Sep. 2023-Mar.2024)"],
    skills: ["React/Next.js", "TypeScript", "Tailwind.css", "Python", "Git", "Java/Spring Boot", "PostgreSQL"],
    passions: ['Full-Stack Software Development', "Backend Engineering"],
    testimonials: [selmaQuote]
}

const projectOne: ProjectsList = {
    title: 'Rotate Translation',
    image: "/gavel_for_rotate_translation.png",
    caption: "Full Stack web application for users to upload forms and other important information into a legal translation services.",
    urlLink: "",
    hashTags: ["React", "TypeScript", "Firebase", "Stripe"]
}


export default function Portfolio() {
    return (
        <div data-theme="dark">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl" href={'/'}>
                        Start
                    </a>
                    <Link href={'/Eleazar_Hernandez_Resume.pdf'}>
                        <div className={'btn btn-ghost text-xl navbar-center'}>
                            Resume
                        </div>

                    </Link>
                    <div className="dropdown mx-16">

                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            More
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>About</a></li>
                            <li><a>Projects</a></li>
                            <li><a>Writings</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-info" href={'contact'}>Contact Me</a>
                </div>
            </div>
            <main>
                <div className={'flex justify-center flex-col'}>

                    <AboutMe personalInfo={info}/>

                    <h1 className={'text-3xl font-extrabold mb-3 text-center pt-6'}>Projects</h1>
                    <div className={'lg:flex sm:justify-normal flex-wrap gap-4'}>
                        <Project projects={projectOne}/>

                    </div>

                </div>

            </main>


        </div>
    )
}
