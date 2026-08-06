import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Eleazar Hernandez — Software Engineer",
  description: "Selected software systems, writing, and services by Eleazar Hernandez.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <div className="design-contract" dangerouslySetInnerHTML={{ __html: "<!-- THESIS: A project-first software portfolio that refuses the generic hero-and-card grid. OWN-WORLD: warm drafting paper, marine ink, coral signals, translucent overlays, and fine construction lines. STORY: visitors inspect real software work, then move naturally toward a conversation. FIRST VIEWPORT: an editorial project index fills the left; the active system preview and profile sit to its right, with project links embedded in the work itself. FORM: Systems Atlas, assigned direction; seed ef40a312. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md -->" }} />
        {children}
      </body>
    </html>
  );
}
