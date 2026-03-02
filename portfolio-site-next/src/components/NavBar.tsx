"use client";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#About" },
    { label: "Services", href: "#Services" },
    { label: "Contact", href: "#Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-sawad-bg/80 backdrop-blur-md">
      <div className="max-w-[1140px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-poppins font-bold text-xl text-white">
          EH
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sawad-muted hover:text-white transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/Eleazar_Hernandez_Resume.pdf"
            target="_blank"
            className="bg-sawad-lime text-black text-sm font-semibold px-5 py-2 rounded-full hover:brightness-110 transition"
          >
            Resume
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-sawad-bg/95 backdrop-blur-md border-t border-[#1f2937] px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sawad-muted hover:text-white transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/Eleazar_Hernandez_Resume.pdf"
            target="_blank"
            onClick={() => setMenuOpen(false)}
            className="inline-block mt-2 bg-sawad-lime text-black text-sm font-semibold px-5 py-2 rounded-full hover:brightness-110 transition"
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
}
