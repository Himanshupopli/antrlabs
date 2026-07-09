import { motion } from "motion/react";
import { Instagram, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  onNavigate: (view: "home" | "contact" | "ideas" | "work" | "team", sectionId?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "WORK", href: "#work", action: () => onNavigate("work") },
    { label: "TEAM", href: "#team", action: () => onNavigate("team") },
    { label: "IDEAS", href: "#ideas", action: () => onNavigate("ideas") },
    { label: "CONTACT", href: "#contact", action: () => onNavigate("contact") }
  ];

  const socialLinks = [
    { label: "Email", href: "mailto:business@antrlabs.space", icon: Mail },
    { label: "LinkedIn", href: "https://www.linkedin.com/feed/", icon: Linkedin },
    { label: "Instagram", href: "https://www.instagram.com/antrlabs/", icon: Instagram }
  ];

  return (
    <footer id="footer" className="bg-black text-white py-16 sm:py-20 px-6 md:px-12 border-t border-neutral-900 select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start gap-12 text-center sm:text-left">
        {/* Left column: Logo & Meta Info */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
            }}
            className="flex items-center hover:opacity-95 transition-opacity mb-8 shrink-0"
          >
            <img
              src="https://lh3.googleusercontent.com/d/1hPlbGPKpGz2siX9oWEY0kBZEbfu-Wxw7"
              alt="ANTR Labs"
              referrerPolicy="no-referrer"
              className="h-14 sm:h-18 w-auto object-contain shrink-0 max-w-none aspect-auto select-none"
            />
          </a>
          <p className="font-sans text-xs text-neutral-500 font-light">
            © {currentYear} ANTRLABS. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-5">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#FF4500] hover:bg-[#FF4500]/10 transition-colors duration-300 flex items-center justify-center"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Right column: Vertical Footer Navigation Links exactly as PDF */}
        <div className="flex flex-col items-center sm:items-end gap-5 text-center sm:text-right">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                link.action();
              }}
              className="font-mono text-[13px] md:text-sm font-semibold tracking-[0.18em] text-neutral-300 hover:text-white transition-colors duration-300 relative group py-1.5"
            >
              {link.label}
              <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#FF4500] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
