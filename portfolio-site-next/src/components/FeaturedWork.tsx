"use client";

import { useState } from "react";

const work = [
  {
    id: "01", role: "Founder", company: "Weekly Friends List", tone: "mint",
    description: "A full-stack event connection service that turns personalized invitations into a repeatable weekly ritual.",
    systems: ["Email workflows", "Event matching", "Full-stack build"],
    link: "https://weeklyfriendslist.com/",
  },
  {
    id: "02", role: "Software Engineer", company: "Rotate Translation", tone: "coral",
    description: "A legal-translation workflow for uploading critical documents and completing secure payments.",
    systems: ["React + TypeScript", "Firebase", "Stripe"],
    link: "https://payment-form-rotate-translation.vercel.app/",
  },
];

export default function FeaturedWork() {
  const [active, setActive] = useState(0);
  return (
    <section className="atlas-work" id="work" aria-labelledby="work-title">
      <div className="atlas-work-intro">
        <p>Selected systems</p>
        <h2 id="work-title">Work that holds up under inspection.</h2>
        <span>Hover or focus a project to open its field notes.</span>
      </div>
      <div className="atlas-project-list">
        {work.map((item, index) => (
          <article key={item.company} className={`atlas-project ${item.tone} ${active === index ? "is-active" : ""}`} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)}>
            <a href={item.link} target="_blank" rel="noreferrer" className="atlas-project-link" aria-label={`Open ${item.company} project`}>
              <span className="atlas-project-number">{item.id}</span>
              <div><p>{item.role}</p><h3>{item.company}</h3></div>
              <span className="atlas-arrow" aria-hidden="true">↗</span>
              <div className="atlas-project-details"><p>{item.description}</p><ul>{item.systems.map((system) => <li key={system}>{system}</li>)}</ul></div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
