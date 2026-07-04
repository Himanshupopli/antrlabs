import { motion } from "motion/react";

interface FooterProps {
  onNavigate: (view: "home" | "contact" | "ideas" | "work" | "team", sectionId?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "WORK", href: "#work", view: "work" as const },
    { label: "TEAM", href: "#team", view: "team" as const },
    { label: "IDEAS", href: "#ideas", view: "ideas" as const },
    { label: "CONTACT", href: "#contact", view: "contact" as const }
  ];

  return (
    <footer id="footer" className="bg-black text-white py-16 sm:py-20 px-6 md:px-12 border-t border-neutral-900 select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-12">
        {/* Left column: Logo & Meta Info */}
        <div className="flex flex-col items-start text-left">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
            }}
            className="flex flex-col font-display font-bold leading-[0.8] tracking-[0.25em] text-white hover:opacity-90 transition-opacity mb-8"
          >
            <span className="text-3.5xl md:text-4.5xl">ANTR</span>
            <span className="text-xl md:text-2xl tracking-[0.35em] mt-1">LABS</span>
          </a>
          <p className="font-sans text-[11px] text-neutral-500 font-light mt-4">
            2026 Your Business Name. All rights reserved.
          </p>
        </div>

        {/* Right column: Vertical Footer Navigation Links exactly as PDF */}
        <div className="flex flex-col items-start sm:items-end gap-5 text-left sm:text-right">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(link.view);
              }}
              className="font-mono text-[11px] tracking-[0.25em] text-neutral-400 hover:text-white transition-colors duration-300 relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-[#FF4500] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
