import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  profession: string;
  background: string;
}

export default function StickyProfile({ name, profession, background }: Props) {
  return (
    <div className="lg:sticky lg:top-24 lg:self-start">
      <Image
        src="/headshot.png"
        alt="Eleazar Hernandez"
        width={300}
        height={300}
        className="rounded-2xl w-full max-w-[280px]"
      />
      <h2 className="font-poppins font-bold text-2xl mt-6">{name}</h2>
      <p className="text-sawad-muted text-sm mt-1">{profession}</p>
      <p className="text-sawad-muted text-sm mt-4 leading-relaxed">{background}</p>
      <div className="flex gap-3 mt-6">
        <Link
          href="/Eleazar_Hernandez_Resume.pdf"
          target="_blank"
          className="bg-sawad-lime text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:brightness-110 transition"
        >
          Resume
        </Link>
        <Link
          href="https://github.com/ehernandez42"
          target="_blank"
          className="border border-[#1f2937] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:border-sawad-lime hover:text-sawad-lime transition"
        >
          GitHub
        </Link>
      </div>
    </div>
  );
}
