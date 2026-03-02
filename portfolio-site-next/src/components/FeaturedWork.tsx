import Link from "next/link";

interface WorkItem {
  role: string;
  company: string;
  description: string;
  link: string;
  color: "cyan" | "blue";
}

// TODO: Update these entries with your actual work details and links
const works: WorkItem[] = [
  {
    role: "Software Engineer",
    company: "Rotate Translation",
    description:
      "Full-stack web application for uploading legal translation forms with Stripe payment integration.",
    link: "https://payment-form-rotate-translation.vercel.app/",
    color: "blue",
  },
  {
    role: "Founding Engineer",
    company: "Hidr",
    description:
      "Led zero-to-one product development, architecting the full stack from auth to deployment.",
    link: "#",
    color: "blue",
  },
  {
    role: "Software Engineer Intern",
    company: "NextGen IT Staffing",
    description:
      "Contributed to internal tools and learned enterprise development practices in a professional setting.",
    link: "#",
    color: "blue",
  }
];

export default function FeaturedWork() {
  return (
    <section>
      <h2 className="font-poppins font-bold text-3xl lg:text-4xl mb-8">
        Featured Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {works.map((item, i) => (
          <div
            key={i}
            className={`rounded-[10px] p-8 min-h-[280px] flex flex-col justify-between hover:scale-[1.02] transition-transform ${
              item.color === "cyan"
                ? "bg-sawad-lime text-white"
                : "bg-sawad-orange text-white"
            }`}
          >
            <div>
              <p className="text-sm font-semibold opacity-70 mb-1">
                {item.role}
              </p>
              <h3 className="font-poppins font-bold text-2xl mb-3">
                {item.company}
              </h3>
              <p className="text-sm leading-relaxed opacity-80">
                {item.description}
              </p>
            </div>
            {item.link !== "#" && (
              <Link
                href={item.link}
                target="_blank"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold underline underline-offset-4 opacity-80 hover:opacity-100 transition"
              >
                View Project &rarr;
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
