import { ProjectsList } from "@/types/types";
import Image from "next/image";

interface props {
  projects: ProjectsList;
}

const Project = ({ projects }: props) => {
  const { title, image, caption, urlLink, hashTags } = projects;

  return (
    <div className="bg-[#111827] border border-[#1f2937] rounded-xl overflow-hidden">
      <Image
        className="w-full object-cover"
        src={image}
        alt={title}
        width={400}
        height={200}
      />
      <div className="p-6">
        <h5 className="font-poppins font-bold text-xl text-white mb-2">
          {title}
        </h5>
        <p className="text-sawad-muted text-sm mb-4">{caption}</p>
        <a
          href={urlLink}
          target="_blank"
          className="inline-flex items-center gap-2 bg-sawad-lime text-black text-sm font-semibold px-5 py-2 rounded-full hover:brightness-110 transition"
        >
          View Project
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
      <div className="px-6 pb-4 flex flex-wrap gap-2">
        {hashTags.map((tag, index) => (
          <span
            key={index}
            className="border border-[#1f2937] rounded-full px-3 py-1 text-xs text-sawad-muted"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Project;
