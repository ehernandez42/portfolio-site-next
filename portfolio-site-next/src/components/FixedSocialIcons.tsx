import Image from "next/image";
import Link from "next/link";

const socials = [
  { icon: "/Socials/github-svgrepo-com.svg.png", url: "https://github.com/ehernandez42", alt: "GitHub" },
  { icon: "/Socials/linkedin-svgrepo-com.svg.png", url: "https://linkedin.com/in/eleazarfhernandez", alt: "LinkedIn" },
  { icon: "/Socials/twitter-svgrepo-com.svg.png", url: "https://twitter.com/ehernandezdev", alt: "Twitter" },
  { icon: "/Socials/substack-reader-svgrepo-com.svg.png", url: "https://kickedrocks.substack.com", alt: "Substack" },
];

export default function FixedSocialIcons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {socials.map((s) => (
        <Link
          key={s.alt}
          href={s.url}
          target="_blank"
          className="w-10 h-10 rounded-full bg-[#111827] border border-[#1f2937] flex items-center justify-center hover:border-sawad-lime hover:bg-[#1f2937] transition"
        >
          <Image
            src={s.icon}
            alt={s.alt}
            width={20}
            height={20}
            className="invert"
          />
        </Link>
      ))}
    </div>
  );
}
