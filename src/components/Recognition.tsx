import React from "react";
import { motion } from "motion/react";

interface LogoConfig {
  id: string;
  name: string;
  render: () => React.ReactNode;
}

const LOGOS: LogoConfig[] = [
  {
    id: "mytrident",
    name: "MyTrident",
    render: () => (
      <div className="flex items-center gap-1 scale-90 sm:scale-100">
        {/* Script "my" */}
        <svg viewBox="0 0 50 30" className="w-10 h-6 stroke-current" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6,16 Q9,8 12,16 Q15,8 18,16 Q21,8 24,16" />
          <path d="M24,16 Q27,8 30,16 Q32,23 30,27 Q28,30 26,28 Q24,25 29,25" />
          <path d="M29,25 Q37,25 46,23" />
        </svg>
        {/* Bold TRIDENT */}
        <span className="font-sans font-black tracking-[0.02em] text-xl sm:text-2xl select-none leading-none mt-1">TRIDENT</span>
      </div>
    )
  },
  {
    id: "247vc",
    name: "247VC",
    render: () => (
      <div className="flex items-center font-display scale-95 sm:scale-100 select-none">
        <span className="font-black text-2.5xl tracking-tighter">247</span>
        <span className="font-bold text-2.5xl tracking-tight ml-0.5">VC</span>
      </div>
    )
  },
  {
    id: "entero",
    name: "Entero Healthcare",
    render: () => (
      <div className="flex items-center gap-2 text-left scale-90 sm:scale-100">
        {/* Oval medical plus icon */}
        <div className="relative w-8 h-8 flex-shrink-0">
          <svg viewBox="0 0 32 32" className="w-full h-full fill-current">
            <ellipse cx="16" cy="16" rx="15" ry="11" className="transform -rotate-12" />
            <path d="M11,16 H21 M16,11 V21" className="stroke-black dark:stroke-neutral-950" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex flex-col justify-center">
          <span className="font-serif text-base font-bold leading-none tracking-wide">Entero</span>
          <span className="text-[6px] tracking-wider uppercase font-sans font-semibold mt-0.5 opacity-80 leading-none">Healthcare Solutions</span>
        </div>
      </div>
    )
  },
  {
    id: "innovest",
    name: "Innovest",
    render: () => (
      <div className="flex flex-col items-center text-center scale-95 sm:scale-100">
        <div className="flex items-center gap-1">
          {/* Double chevron 'i' */}
          <div className="relative w-4 h-6">
            <svg viewBox="0 0 24 30" className="w-full h-full fill-current" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6,8 L12,3 L18,8" fill="none" />
              <path d="M6,13 L12,8 L18,13" fill="none" />
              <rect x="10" y="17" width="4" height="11" rx="1.5" stroke="none" />
            </svg>
          </div>
          <span className="font-display font-black text-xl tracking-tight leading-none">innovest</span>
        </div>
        <div className="flex items-center gap-0.5 mt-0.5">
          <span className="text-[6px] tracking-widest uppercase font-sans font-bold opacity-75">second home developer</span>
          <svg viewBox="0 0 24 12" className="w-3 h-2 fill-current opacity-75">
            <path d="M8,6 C8,4 9,3 10.5,3 C12,3 13,4 14,6 C15,8 16,9 17.5,9 C19,9 20,8 20,6 C20,4 19,3 17.5,3 C16,3 15,4 14,6 C13,8 12,9 10.5,9 C9,9 8,8 8,6 Z M8,6 C8,8 7,9 5.5,9 C4,9 3,8 3,6 C3,4 4,3 5.5,3 C7,3 8,4 8,6 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    )
  },
  {
    id: "bisleri",
    name: "Bisleri",
    render: () => (
      <div className="flex items-center select-none scale-105">
        <span className="font-serif text-2.5xl italic font-black tracking-tight">Bisleri</span>
      </div>
    )
  },
  {
    id: "sukham",
    name: "Sukham",
    render: () => (
      <div className="flex items-center font-sans font-bold text-xl sm:text-2xl tracking-tighter select-none">
        <span>s</span>
        <span className="relative inline-block mx-0.5">
          u
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-0.5">
            <span className="w-1 h-1 rounded-full bg-current"></span>
            <span className="w-1 h-1 rounded-full bg-current"></span>
          </span>
        </span>
        <span>kham</span>
      </div>
    )
  },
  {
    id: "siyah",
    name: "Siyah",
    render: () => (
      <div className="flex items-center select-none tracking-[0.35em] pl-[0.35em]">
        <span className="font-sans font-light text-xl sm:text-2xl uppercase">SIYAH</span>
      </div>
    )
  },
  {
    id: "tynor",
    name: "Tynor",
    render: () => (
      <div className="flex flex-col items-center text-center relative pt-1 scale-95 sm:scale-100">
        {/* Dynamic cresting wave above */}
        <svg viewBox="0 0 60 12" className="w-14 h-3 stroke-current fill-none absolute -top-1" strokeWidth="2.5" strokeLinecap="round">
          <path d="M5,9 C20,1 40,1 55,9" />
        </svg>
        <span className="font-sans font-black text-2xl tracking-tighter">tynor</span>
      </div>
    )
  },
  {
    id: "streetball",
    name: "Streetball League",
    render: () => (
      <div className="flex items-center gap-1.5 scale-90 sm:scale-100">
        <div className="relative w-6 h-6 flex-shrink-0">
          <svg viewBox="0 0 32 32" className="w-full h-full stroke-current fill-none" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="16" cy="16" r="14" />
            <path d="M2,16 H30 M16,2 V30" />
            <path d="M6,6 Q16,16 26,26 M6,26 Q16,16 26,6" />
          </svg>
        </div>
        <span className="font-logo font-black text-lg italic uppercase tracking-wide">STREETBALL</span>
      </div>
    )
  },
  {
    id: "fupro",
    name: "Fupro",
    render: () => (
      <div className="flex items-center gap-2 scale-95 sm:scale-100">
        {/* Styled square box */}
        <div className="w-7 h-7 rounded bg-current flex items-center justify-center transition-colors duration-300">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-black dark:fill-neutral-950">
            <path d="M14,4 C11,4 9,6 9,9 V18 H12 V9 C12,8 13,7 14,7 H16 V4 Z" />
            <circle cx="10" cy="15" r="2.5" />
          </svg>
        </div>
        <span className="font-sans font-extrabold text-xl tracking-tighter leading-none mt-0.5">fupro</span>
      </div>
    )
  },
  {
    id: "crustandkettle",
    name: "Crust & Kettle",
    render: () => (
      <div className="flex flex-col items-center text-center scale-90 sm:scale-100">
        <span className="font-serif font-black tracking-wide text-sm sm:text-base leading-none">CRUST & KETTLE</span>
        <span className="text-[6px] tracking-widest uppercase font-mono mt-1 opacity-75">EST 2026 • BAKERY & BREW HOUSE</span>
      </div>
    )
  },
  {
    id: "zinoha",
    name: "Zinoha",
    render: () => (
      <div className="flex items-center gap-2 text-left scale-90 sm:scale-100">
        {/* Hourglass/Z glyph */}
        <div className="w-5 h-7">
          <svg viewBox="0 0 24 30" className="w-full h-full stroke-current fill-none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4,4 H20 L4,26 H20 Z" />
            <circle cx="12" cy="15" r="2.5" className="fill-current" />
          </svg>
        </div>
        <div className="flex flex-col justify-center">
          <span className="font-display font-medium tracking-[0.1em] text-sm leading-none">ZINOHA</span>
          <span className="text-[6px] tracking-[0.2em] uppercase font-sans mt-0.5 opacity-80 leading-none">Conscious Living</span>
        </div>
      </div>
    )
  }
];

export default function Recognition() {
  return (
    <section id="recognition" className="py-24 px-6 md:px-12 bg-black text-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs tracking-[0.3em] text-[#FF4500] uppercase block mb-3">
              PARTNERS & ACCLAIM
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-widest text-white uppercase">
              RECOGNITION
            </h2>
          </motion.div>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-12 items-center justify-items-center max-w-5xl mx-auto mt-16">
          {LOGOS.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.05 }}
              className="w-full flex items-center justify-center select-none"
            >
              <div className="text-neutral-400 hover:text-white hover:scale-[1.05] transition-all duration-300 ease-out cursor-default">
                {logo.render()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-width elegant horizontal dividing border */}
      <div className="absolute bottom-0 left-0 w-full px-6 md:px-12">
        <div className="max-w-7xl mx-auto border-b border-neutral-900"></div>
      </div>
    </section>
  );
}
