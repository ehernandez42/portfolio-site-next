import {PersonalInfo} from "@/types/types";

interface Props {
    personalInfo: PersonalInfo;
}


const AboutMe = ({personalInfo}: Props) => {
    const {experience, skills} = personalInfo;

    return (
        <div className={'flex w-full flex-col items-center justify-center'}>
            <h1 className={'text-3xl font-extrabold mb-4 dark:text-white'}>Work Experience</h1>
            <ul className={'flex flex-col'}>
                {experience.map((exp, index) => (
                    <li className={'kbd kbd-lg p-2 mb-2 tracking-normal'} key={index}>{exp}</li>
                ))}
            </ul>
            <br/>
            <div className={'align-middle'}>
                <h3 className={'text-3xl font-extrabold mb-4 dark:text-white'}>Skills</h3>
                <ul className={'flex space-x-2 flex-col sm:flex-row md:overflow-scroll'}>
                    {skills.map((skill, index) => (
                        <li className={'p-2 tracking-normal  kbd kbd-lg mb-4 '} key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AboutMe;
