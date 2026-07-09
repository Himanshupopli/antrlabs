import { Mail } from "lucide-react";

export default function EmailFloater() {
  return (
    <a
      href="mailto:business@antrlabs.space"
      aria-label="Email ANTR Labs"
      title="Email ANTR Labs"
      className="fixed bottom-5 right-5 z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#FF4500] text-black shadow-[0_14px_32px_rgba(255,69,0,0.32)] transition-all duration-300 hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/70 sm:bottom-7 sm:right-7 sm:h-14 sm:w-14"
    >
      <Mail className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
    </a>
  );
}
