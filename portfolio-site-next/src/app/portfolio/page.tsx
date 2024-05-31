'use client'
import {PersonalInfo, ProjectsList, Testimonial} from "@/types/types";
import AboutMe from "@/components/AboutMe";
import Project from "@/components/ProjectsList";

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
    background: "I am a highly analytical software engineer looking to break into the tech industry " +
        "and produce quality, consistent solutions.",
    experience: ["Freelance Developer(2022-)", "Software Engineering Intern @ nextgen(Sep. 2023-Dec.2023)"],
    skills: ["React/Next.js", "TypeScript", "Tailwind.css", "Python", "Git", "PostgreSQL"],
    passions: ['Infrastructure Engineering', 'Full-Stack Software Development', 'Data', "Backend"],
    testimonials: [selmaQuote]
}

const projectOne: ProjectsList = {
    titles: ["Rotate Translation"],
    images: ["portfolio-site-next/public/headshot.png"],
    captions: ["Legal translation services"],
    urlLinks: ["d", "y"],
}


export default function Portfolio() {
    return (
        <div data-theme="dark">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl" href={'/'}>
                        Start
                    </a>
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
                    <Project projects={projectOne}/>
                </div>

            </main>


        </div>
    )
}
