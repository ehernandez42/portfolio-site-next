"use client";

import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Work", "#work"],
    ["Writing", "#writing"],
    ["Background", "#background"],
    ["Services", "#services"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="atlas-nav">
      <a className="atlas-mark" href="#top" aria-label="Eleazar Hernandez, home">EH<span>.</span></a>
      <button className="atlas-menu" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>Menu</button>
      <nav id="site-nav" className={open ? "is-open" : ""} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="atlas-resume" href="/Eleazar_Hernandez_Resume.pdf" target="_blank">Résumé <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
