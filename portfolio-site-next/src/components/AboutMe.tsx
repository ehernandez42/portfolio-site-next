import { PersonalInfo } from "@/types/types";

interface Props {
  personalInfo: PersonalInfo;
}

const AboutMe = ({ personalInfo }: Props) => {
  const { experience, skills } = personalInfo;

  return (
    <div>
      <h2 className="font-poppins font-bold text-3xl lg:text-4xl mb-8">
        Work Experience
      </h2>
      <div className="flex flex-col gap-3">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="bg-[#111827] border border-[#1f2937] rounded-xl px-5 py-4 text-sm text-white"
          >
            {exp}
          </div>
        ))}
      </div>

      <h3 className="font-poppins font-bold text-3xl lg:text-4xl mt-14 mb-8">
        Skills
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="border border-[#1f2937] rounded-full px-5 py-2 text-sm text-sawad-muted hover:border-sawad-lime hover:text-sawad-lime transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
