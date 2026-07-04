import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  currentView: "home" | "contact" | "ideas" | "work" | "team";
  onNavigate: (view: "home" | "contact" | "ideas" | "work" | "team", sectionId?: string) => void;
}

export default function Header({ currentView, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth blur background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "WORK", href: "#work", view: "work" as const },
    { label: "TEAM", href: "#team", view: "team" as const },
    { label: "IDEAS", href: "#ideas", view: "ideas" as const },
    { label: "CONTACT", href: "#contact", view: "contact" as const }
  ];

  return (
    <>
      <header
        id="header-nav"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-neutral-900/55 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
            }}
            className="group flex flex-col font-display font-bold leading-none tracking-[0.25em] text-white hover:opacity-90 transition-opacity"
          >
            <span className="text-xl md:text-2xl">ANTR</span>
            <span className="text-[10px] text-neutral-400 font-mono tracking-[0.3em] mt-0.5">LABS</span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <a
                  id={`nav-item-${item.label.toLowerCase()}`}
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.view);
                  }}
                  className={`font-mono text-[11px] tracking-[0.25em] transition-colors duration-300 relative py-1 group ${
                    isActive ? "text-white" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-[1px] bg-[#FF4500] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white p-2 hover:text-neutral-300 focus:outline-none transition-colors"
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-xl flex flex-col justify-between p-8 md:hidden"
          >
            {/* Header in Overlay */}
            <div className="flex justify-between items-center w-full">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  onNavigate("home");
                }}
                className="flex flex-col font-display font-bold leading-none tracking-[0.25em] text-white"
              >
                <span className="text-xl">ANTR</span>
                <span className="text-[10px] text-neutral-400 font-mono tracking-[0.3em] mt-0.5">LABS</span>
              </a>
              <button
                id="mobile-menu-close"
                onClick={() => setIsOpen(false)}
                className="text-white p-2 hover:text-neutral-300 focus:outline-none"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav Items List */}
            <nav className="flex flex-col space-y-8 my-auto text-left pl-4">
              {navItems.map((item, index) => {
                const isActive = currentView === item.view;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      onNavigate(item.view);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className={`font-display font-bold text-4xl tracking-widest transition-colors duration-200 ${
                      isActive ? "text-[#FF4500]" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </nav>

            {/* Footer in Overlay */}
            <div className="border-t border-neutral-900 pt-6 text-center">
              <p className="font-mono text-[9px] tracking-widest text-neutral-600">
                DIFFERENCE BECOMES DIFFERENTIATION
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
