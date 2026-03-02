"use client";
import NavBar from "@/components/NavBar";
import StickyProfile from "@/components/StickyProfile";
import HeroText from "@/components/HeroText";
import AboutMe from "@/components/AboutMe";
import FeaturedWork from "@/components/FeaturedWork";
import SubstackPosts from "@/components/SubstackPosts";
import FreelanceServices from "@/components/FreelanceServices";
import Contact from "@/app/contact/page";
import FixedSocialIcons from "@/components/FixedSocialIcons";
import { PersonalInfo } from "@/types/types";

export default function Home() {
  const info: PersonalInfo = {
    name: "Eleazar Hernandez",
    profession: "AI-Native Software Engineer",
    background:
      "Software Engineer with 3 years experience building scalable, intelligent software solutions",
    experience: [
      "Co-founder @ Innogev",
      "Full-stack Engineer @ 834 Labs (Nov. 2024 - )"
    ],
    skills: [
      "React(Next.js)",
      "Node.js",
      "Python",
      "C#/.NET",
      "Git",
      "Java/Spring Boot",
      "PostgreSQL",
    ],
  };

  return (
    <div className="bg-sawad-bg min-h-screen">
      <NavBar />
      <div className="max-w-[1140px] mx-auto px-6 pt-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[100px]">
          {/* Left — Sticky Profile */}
          <div className="lg:w-[350px] lg:shrink-0">
            <StickyProfile
              name={info.name}
              profession={info.profession}
              background={info.background}
            />
          </div>

          {/* Right — Scrollable Content */}
          <div className="flex-1 flex flex-col gap-[60px] lg:gap-[60px]">
            <HeroText />
            <FeaturedWork />
            <SubstackPosts />
            <div id="About">
              <AboutMe personalInfo={info} />
            </div>
            
            <FreelanceServices />
            <Contact />
          </div>
        </div>
      </div>
      <FixedSocialIcons />
      <footer className="border-t border-[#1f2937] mt-20 py-8 text-center text-sawad-muted text-sm">
        &copy; 2026 Eleazar Hernandez
      </footer>
    </div>
  );
}
