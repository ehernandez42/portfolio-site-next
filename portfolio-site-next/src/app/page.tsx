"use client"
import NavBar from "@/components/NavBar";
import Contact from "@/app/contact/page";
import AboutMe from "@/components/AboutMe";
import {PersonalInfo} from "@/types/types";
import Image from "next/image";
import Icons from "@/components/icons";
import FreelanceServices from "@/components/FreelanceServices";

export default function Home() {
    const info: PersonalInfo = {
        name: "Eleazar Hernandez",
        profession: "Software Engineer",
        background: "Software Engineer with 3 years experience building scalable, modern software solutions",
        experience: [
            "Front End Engineer @ 834 Labs (Nov. 2024 - )",
            "Founding Engineer @ Hidr (May 2024 - Oct. 2024)",
            "Software Engineer @ Rotate Translation (Jan. 2024 - May 2024)",
            "Software Engineer Intern @ NextGen IT Staffing (Sept. 2023 - March 2024)"
        ],
        skills: ["React(Next.js)", "Node.js", "Python", "C#/.NET","Git", "Java/Spring Boot", "PostgreSQL"],
    }
    return (
        <div>

            <main className={'min-h-screen'}>
                <NavBar/>
                
                <div className="w-full sm:w-10/12 text-center mx-auto my-2 max-w-screen-xl px-4 sm:px-8 md:px-12 lg:px-16 py-4 lg:py-12 overflow-x-hidden">
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


                        <div className={'px-4 flex flex-col justify-center items-center mt-4 lg:mt-0 lg:ml-8'}>
                            <p className={'w-full text-sm sm:text-base lg:text-2xl'}>{info.background}</p>
                        </div>
                    </figure>
                    <br/>

                    <AboutMe personalInfo={info}/>
                    <FreelanceServices/>
                    <Contact/>

                </div>
            </main>

        </div>
    );
}
