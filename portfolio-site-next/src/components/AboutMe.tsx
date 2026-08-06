import { PersonalInfo } from "@/types/types";

export default function AboutMe({ personalInfo }: { personalInfo: PersonalInfo }) {
  return (
    <section className="atlas-background" id="background" aria-labelledby="background-title">
      <div><p>Background</p><h2 id="background-title">A broad practice, built by getting close to the work.</h2></div>
      <div className="atlas-background-content">
        <div><h3>Experience</h3>{personalInfo.experience.map((item) => <p className="atlas-entry" key={item}>{item}</p>)}</div>
        <div><h3>Tools I return to</h3><ul className="atlas-skills">{personalInfo.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
      </div>
    </section>
  );
}
