import {PersonalInfo} from "@/types/types";
import Image from "next/image";

interface Props {
    personalInfo: PersonalInfo;
}


const AboutMe = ({personalInfo}: Props) => {
    const {name, profession, background, experience, skills, passions, testimonials} = personalInfo;

    return (
        <div className={'flex flex-col items-center justify-center'}>
            <div className={'card bg-info lg:w-9/12 shadow-xl flex lg:flex-row sm:flex-col items-center p-1 mb-10'}>
                <figure>
                    <Image src={'/headshot.png'}
                           alt={'headshot photo'}
                           width={500}
                           height={800}
                           className={'rounded-xl'}/>
                </figure>
                <div className={'card-body flex justify-center'}>
                    <h2 className={'text-black text-3xl font-extrabold'}>About Me</h2>
                    <p className={'text-blue-950'}>{`Hi, I'm ${name}, a ${profession}. ${background}`}</p>

                    <h3 className={'text-black text-3xl font-extrabold'}>Current Experience</h3>
                    <ul className={'flex space-x-4'}>
                        {experience.map((exp, index) => (
                            <li className={'p-4 bg-gray-700 rounded'} key={index}>{exp}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={'align-middle'}>
                <h3 className={'text-3xl font-extrabold mb-2'}>Skills</h3>
                <ul className={'flex space-x-2 flex-col sm:flex-row'}>
                    {skills.map((skill, index) => (
                        <li className={'p-4 tracking-normal kbd kbd-lg mb-4'} key={index}>{skill}</li>
                    ))}
                </ul>

                <h3 className={'mt-4 text-3xl font-extrabold mb-2'}>Passions/Interests</h3>
                <ul className={'flex space-x-2 flex-col sm:flex-row'}>
                    {passions.map((passion, index) => (
                        <li className={'p-4 tracking-normal kbd kbd-lg mb-4'} key={index}>{passion}</li>
                    ))}
                </ul>
            </div>
            <div className={'lg:m-20 mx-2 mt-6'}>
                <h3 className={'text-3xl text-center font-extrabold mb-8'}>Testimonials</h3>
                <ul className={'flex justify-center space-x-4 lg:mx-80 flex-col lg:flex-row'}>
                    {testimonials.map((testimonial, index) => (
                        <li className={'p-4 card border-2 bg-gray-700 my-1'} key={index}>
                            <blockquote className={'italic'}>{testimonial.quote}</blockquote>
                            <a href={testimonial.website}
                               target={"_blank"}
                               className={'mt-4 hover:text-black hover:animate-pulse'}>- {testimonial.author}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default AboutMe;
