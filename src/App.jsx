import "./index.css";

// Hooks
import { useRef } from "react";
// Components
import Navbar from "./components/Navbar";
import Squaresbg from "./components/Squaresbg";

// Pages
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Service from "./pages/Services";
import Stack from "./pages/Stack";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const serviceRef = useRef(null);
  const projectRef = useRef(null);
  const stackRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="m-auto">
      <div className="w-full">
      <Navbar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutMeRef={aboutMeRef}
        serviceRef={serviceRef}
        projectRef={projectRef}
        stackRef={stackRef}
        contactRef={contactRef}
      />
      </div>

      <div className="relative m-auto w-full">
        {/* Background quadrados */}
        <div className="absolute inset-0 -z-10 ">
          <Squaresbg
            speed={0.3}
            squareSize={150}
            direction="up" // up, down, left, right, diagonal
            borderColor="#fff"
            hoverFillColor="#222"
          />
        </div>

        {/* Conteúdo */}
        <div className="m-auto" ref={homeRef}>
          <Home />
        </div>
        <div
          className="m-auto 2xl:h-auto md:h-auto flex align-middle 2xl:py-[150px] py-[50px] 2xl:w-[1800px]"
          ref={aboutMeRef}
        >
          <Aboutme />
        </div>
        <div
          className="m-auto 2xl:h-auto flex align-middle 2xl:py-[150px] py-[50px] 2xl:w-[1800px] "
          ref={serviceRef}
        >
          <Service />
        </div>
        <div
          className="m-auto 2xl:h-auto flex align-middle 2xl:py-[150px] py-[50px] 2xl:w-[1800px] w-full"
          ref={projectRef}
        >
          <Projects />
        </div>
        <div
          className="m-auto 2xl:h-auto flex align-middle 2xl:py-[150px] py-[50px] 2xl:w-[1800px] w-full"
          ref={stackRef}
        >
          <Stack />
        </div>
        <div
          className="m-auto 2xl:h-auto flex align-middle 2xl:py-[150px] py-[50px] 2xl:w-[1800px] w-full"
          ref={contactRef}
        >
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
