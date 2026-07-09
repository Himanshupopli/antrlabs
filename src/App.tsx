import { useEffect, useState } from "react";
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
import WorkPage from "./components/WorkPage";
import TeamPage from "./components/TeamPage";
import IdeasPage from "./components/IdeasPage";
import { PROJECTS } from "./data";

type View = "home" | "contact" | "ideas" | "work" | "team";

const DEFAULT_META = {
  title: "Specialised Performance Branding Lab in Delhi | ANTR.Labs",
  description: "ANTR LABS is a performance branding agency in New Delhi that turns your differentiation into a brand built to drive demand and long-term growth."
};

const PAGE_META: Record<View, { title: string; description: string }> = {
  home: DEFAULT_META,
  work: {
    title: "Performance Branding and Growth Work | ANTR LABS",
    description: "Explore ANTR LABS' work across brand strategy, identity, events, short films and growth - helping ambitious businesses turn differentiation into demand."
  },
  team: {
    title: "Team | ANTR Labs",
    description: "Meet the ANTR Labs team and advisors behind our brand strategy, identity, content, growth and client success work."
  },
  ideas: {
    title: "Ideas | ANTR Labs",
    description: "Read ANTR Labs perspectives on branding, marketing, naming, trust, differentiation and building brands people remember."
  },
  contact: {
    title: "Contact | ANTR Labs",
    description: "Get in touch with ANTR Labs to discuss brand strategy, identity systems, digital experiences, content, growth and go-to-market consulting."
  }
};

const getMetaForRoute = (view: View, projectId?: string) => {
  if (view === "work" && projectId) {
    const project = PROJECTS.find((item) => item.id === projectId);

    if (project) {
      return {
        title: `${project.title} Case Study | ANTR Labs`,
        description: `${project.subtitle} ${project.description}. ${project.extraDetails[0]}`
      };
    }

    return {
      title: "Work Case Study | ANTR Labs",
      description: "Explore an ANTR Labs work case study across brand identity, strategy, content, growth and digital experience."
    };
  }

  return PAGE_META[view];
};

const updateDocumentMeta = (title: string, description: string) => {
  document.title = title;

  let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }

  metaDescription.content = description;
};

const routeToPath = (targetView: View, projectId?: string) => {
  if (targetView === "home") {
    return "/";
  }

  if (targetView === "work" && projectId) {
    return `/work/${projectId}`;
  }

  return `/${targetView}`;
};

const pathToRoute = (pathname: string): { view: View; projectId?: string } => {
  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] === "work") {
    return { view: "work", projectId: segments[1] };
  }

  if (segments[0] === "contact" || segments[0] === "ideas" || segments[0] === "team") {
    return { view: segments[0] };
  }

  return { view: "home" };
};

export default function App() {
  const [route, setRoute] = useState(() => pathToRoute(window.location.pathname));
  const [isWorkInternalActive, setIsWorkInternalActive] = useState(false);
  const view = route.view;

  useEffect(() => {
    const meta = getMetaForRoute(route.view, route.projectId);
    updateDocumentMeta(meta.title, meta.description);
  }, [route.view, route.projectId]);

  useEffect(() => {
    const handlePopState = () => {
      const nextRoute = pathToRoute(window.location.pathname);
      setRoute(nextRoute);
      setIsWorkInternalActive(nextRoute.view === "work" && !!nextRoute.projectId);
    };

    handlePopState();
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleNavigate = (targetView: View, sectionId?: string) => {
    setRoute({ view: targetView });
    setIsWorkInternalActive(false);

    const nextPath = routeToPath(targetView);
    if (window.location.pathname !== nextPath) {
      window.history.pushState(null, "", nextPath);
    }
    
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

  const handleWorkProjectChange = (projectId: string | null) => {
    setRoute({ view: "work", projectId: projectId || undefined });
    setIsWorkInternalActive(!!projectId);

    const nextPath = routeToPath("work", projectId || undefined);
    if (window.location.pathname !== nextPath) {
      window.history.pushState(null, "", nextPath);
    }
  };

  return (
    <div
      id="antr-labs-app"
      className="bg-black text-white min-h-screen font-sans selection:bg-[#FF4500] selection:text-black overflow-x-hidden"
    >
      {/* 1. Translucent Sticky Header */}
      {!isWorkInternalActive && <Header currentView={view} onNavigate={handleNavigate} />}

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
            <Ideas />

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
            onProjectActiveChange={setIsWorkInternalActive}
            initialProjectId={route.projectId}
            onProjectSlugChange={handleWorkProjectChange}
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

      {/* SVG Pencil Sketch Filter Definition */}
      <svg className="sr-only" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="pencil-sketch-filter" x="-10%" y="-10%" width="120%" height="120%">
            <feColorMatrix 
              type="matrix" 
              values="0.33 0.33 0.33 0 0
                      0.33 0.33 0.33 0 0
                      0.33 0.33 0.33 0 0
                      0    0    0    1 0" 
              result="gray"
            />
            <feComponentTransfer in="gray" result="contrast">
              <feFuncR type="linear" slope="1.4" intercept="-0.1"/>
              <feFuncG type="linear" slope="1.4" intercept="-0.1"/>
              <feFuncB type="linear" slope="1.4" intercept="-0.1"/>
            </feComponentTransfer>
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" result="noise"/>
            <feDisplacementMap in="contrast" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" result="sketched"/>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
