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
    <>
      <Navbar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutMeRef={aboutMeRef}
        serviceRef={serviceRef}
        projectRef={projectRef}
        stackRef={stackRef}
        contactRef={contactRef}
      />
 <div className="relative m-auto 2xl:w-[1800px]">
  {/* Background quadrados */}
  <div className="absolute inset-0 -z-10 ">  
    <Squaresbg
      speed={0.3}
      squareSize={200}
      direction="up" // up, down, left, right, diagonal
      borderColor="#fff"
      hoverFillColor="#222"
    />
  </div>

  {/* Conteúdo */}
  <div className="m-auto" ref={homeRef}>
    <Home />
  </div>
  <div className="m-auto 2xl:h-auto md:h-auto flex align-middle 2xl:py-[150px] py-[50px]" ref={aboutMeRef}>
    <Aboutme />
  </div>
  <div className="m-auto 2xl:h-auto flex align-middle 2xl:py-[150px] py-[50px]" ref={serviceRef}>
    <Service />
  </div>
  <div className="m-auto 2xl:h-auto flex align-middle 2xl:py-[150px] py-[50px]" ref={projectRef}>
    <Projects/>
  </div>
  <div className="m-auto 2xl:h-auto flex align-middle 2xl:py-[150px] py-[50px]" ref={stackRef}>
    <Stack />
  </div>
  <div className="m-auto 2xl:h-auto flex align-middle 2xl:py-[150px] py-[50px]" ref={contactRef}>
    <Contact />
  </div>
</div>
    </>
  );
}

export default App;
