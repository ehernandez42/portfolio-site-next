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
        background: "Software Engineer with 2 years of experience building sleek, modern" +
            " UI/UX for a wide array of businesses and use cases. ",
        experience: [
            "Front End Engineer @ 834 Labs (Nov. 2024 - )",
            "Founding Engineer @ Hidr (May 2024 - )",
            "Software Engineer @ Rotate Translation (Jan. 2024 - May 2024)",
            "Software Engineer Intern @ NextGen IT Staffing (Sept. 2023 - March 2024)"
        ],
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
                        <div className={'flex flex-col justify-center items-center'}>
                            <Image src={'/headshot.png'}
                                   alt={'headshot photo'}
                                   width={300}
                                   height={300}
                                   className={'rounded-full mx-auto lg:mx-0'}/>

                            <div className={'mt-4'}>
                                <Icons />
                            </div>
                        </div>


                        <div className={'card-body flex flex-col justify-center items-center mt-4 lg:mt-0 lg:ml-8'}>
                            <p className={'w-full text-sm sm:text-base lg:text-2xl'}>{info.background}</p>
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
