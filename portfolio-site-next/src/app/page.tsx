"use client"
import NavBar from "@/components/NavBar";
import Contact from "@/app/contact/page";
import AboutMe from "@/components/AboutMe";
import {PersonalInfo} from "@/types/types";
import Image from "next/image";
import Icons from "@/components/icons";

export default function Home() {
    const info: PersonalInfo = {
        name: "Eleazar Hernandez",
        profession: "Software Engineer",
        background: "I have experience in the legal and retail" +
            " industries. I am targeting entry level, new grad, and mid-level software roles as well as " +
            "other roles such as business analyst and technical support.",
        experience: ["Freelance Developer(2022-)", "Software Engineering Intern @ nextgen(Sep. 2023-Mar.2024)"],
        skills: ["React", "Next.js", "HTML/CSS/JS", "TypeScript", "Tailwind.css", "Python", "Git", "Java/Spring Boot", "PostgreSQL"],
    }
    return (
        <div data-theme="dark">

            <main className={'min-h-screen'}>
                <NavBar/>
                <div className="py-1 px-1 w-full sm:w-10/12 text-center mx-auto my-2 max-w-screen-xl p-4 sm:p-8 md:p-16 lg:p-32 lg:py-16 lg:px-12 overflow-x-hidden">
                    <h1 id={'About'}  className="mb-4 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white md:text-5xl lg:text-6xl">
                        Eleazar Hernandez</h1>
                    <h2 className="mb-4 text-xl sm:text-2xl font-extrabold tracking-tight leading-tight text-white md:text-2xl lg:text-3xl">
                        Software Engineer</h2>
                    <figure className={'flex flex-col mb-10 lg:flex-row mx-4 sm:mx-8 lg:mx-0'}>
                        <Image src={'/headshot.png'}
                               alt={'headshot photo'}
                               width={300}
                               height={300}
                               className={'rounded-full mx-auto lg:mx-0'}/>
                        <div className={'card-body flex flex-col justify-center mt-4 lg:mt-0 lg:ml-8'}>
                            <p className={'w-full text-sm sm:text-base lg:text-2xl'}>Hello! As a freelance SWE for 2 years now, I have honed my craft
                            as a passionate problem solver for businesses in many different industries. I am actively looking for
                            my next Full-Time/Contract role, and am always open to opportunities. </p>
                            <div className={'mt-4 lg:ml-9'}>
                                <Icons />
                            </div>
                        </div>
                    </figure>
                    <br/>

                    <AboutMe personalInfo={info}/>
                    <Contact/>

                </div>
            </main>

        </div>
    );
}
