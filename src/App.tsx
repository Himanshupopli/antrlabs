import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Founder from "./components/Founder";
import Recognition from "./components/Recognition";
import Ideas from "./components/Ideas";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import IdeasPage from "./components/IdeasPage";
import WorkPage from "./components/WorkPage";
import TeamPage from "./components/TeamPage";

export default function App() {
  const [view, setView] = useState<"home" | "contact" | "ideas" | "work" | "team">("home");

  const handleNavigate = (targetView: "home" | "contact" | "ideas" | "work" | "team", sectionId?: string) => {
    setView(targetView);
    
    // Smoothly scroll after the viewport swaps views
    setTimeout(() => {
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div
      id="antr-labs-app"
      className="bg-black text-white min-h-screen font-sans selection:bg-[#FF4500] selection:text-black overflow-x-hidden"
    >
      {/* 1. Translucent Sticky Header */}
      <Header currentView={view} onNavigate={handleNavigate} />

      {/* Main Container with smooth view switches */}
      <main>
        {view === "home" ? (
          <>
            {/* 2. Edge-to-edge Cinematic Video Hero Section */}
            <Hero />

            {/* 3. Core Philosophy flowchart cascade */}
            <Philosophy />

            {/* 4. Selected Case Studies with interactive overlay detail panels */}
            <Portfolio onViewAll={() => handleNavigate("work")} />

            {/* 5. 3x3 Methodology Grid */}
            <Services />

            {/* 6. Founder details and expandable creative team profiles */}
            <Founder />

            {/* 7. Partner / Client Logos geometric layout */}
            <Recognition />

            {/* 8. Thought leadership list and side article drawer */}
            <Ideas onViewAll={() => handleNavigate("ideas")} />

            {/* 9. High-contrast Orange Contact Form with client-side error checking */}
            <ContactForm />
          </>
        ) : view === "contact" ? (
          <ContactPage
            onBackToHome={() => handleNavigate("home")}
          />
        ) : view === "work" ? (
          <WorkPage
            onBackToHome={() => handleNavigate("home")}
            onNavigateToSection={(sec) => handleNavigate("home", sec)}
          />
        ) : view === "team" ? (
          <TeamPage
            onBackToHome={() => handleNavigate("home")}
            onNavigateToSection={(sec) => handleNavigate("home", sec)}
          />
        ) : (
          <IdeasPage
            onBackToHome={() => handleNavigate("home")}
            onNavigateToSection={(sec) => handleNavigate("home", sec)}
          />
        )}
      </main>

      {/* 10. Clean brand Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
