import Image from "next/image";
import NavBar from "@/components/NavBar";
import FeaturedWork from "@/components/FeaturedWork";
import AboutMe from "@/components/AboutMe";
import FreelanceServices from "@/components/FreelanceServices";
import ContactForm from "@/components/ContactForm";

const info = {
  name: "Eleazar Hernandez", profession: "AI-Native Software Engineer", background: "",
  experience: ["Full-stack Engineer @ 834 Labs (Nov. 2024 – present)"],
  skills: ["React / Next.js", "Node.js", "Python", "C# / .NET", "Java / Spring Boot", "PostgreSQL", "Git"],
};

export default function Home() {
  return <main id="top" className="atlas-shell">
    <NavBar />
    <section className="atlas-hero" aria-labelledby="hero-title">
      <div className="atlas-hero-copy"><p className="atlas-location">Eleazar Hernandez · building from curiosity</p><h1 id="hero-title">Software systems,<br /><i>made tangible.</i></h1><p className="atlas-lede">I build scalable software and AI-powered applications with strong architecture, clear thinking, and a willingness to get my hands dirty.</p><div className="atlas-hero-actions"><a href="#work" className="atlas-primary-link">Explore selected projects <span aria-hidden="true">↓</span></a><a href="#contact" className="atlas-text-link">Discuss a role or project <span aria-hidden="true">↘</span></a></div></div>
      <aside className="atlas-profile"><div className="atlas-photo"><Image src="/headshot.png" alt="Eleazar Hernandez" width={1066} height={1066} priority /></div><div><p>{info.profession}</p><a href="https://github.com/ehernandez42" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/in/eleazarfhernandez" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></aside>
    </section>
    <FeaturedWork />
    <AboutMe personalInfo={info} />
    <FreelanceServices />
    <section className="atlas-contact" id="contact"><div><p>Contact</p><h2>A good build starts with a real question.</h2><p>Have a role, product, or problem worth discussing? Send the outline.</p></div><ContactForm /></section>
    <footer>© 2026 Eleazar Hernandez <a href="https://kickedrocks.substack.com" target="_blank" rel="noreferrer">Writing ↗</a></footer>
  </main>;
}
