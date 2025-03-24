import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import BlurText from "../components/Blurtext.jsx";
import TrueFocus from "../components/TrueFocus.jsx";

const Home = () => {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

  useGSAP(() => {
    // Animação do h1 vindo de cima
    gsap.from(h1Ref.current, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    // Animação do h2 vindo de baixo
    gsap.from(h2Ref.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  return (
    <div
      className="relative w-full h-[800px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('./code_home.gif')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-85 pointer-events-none"></div>
      <div className="text-slate-300 text-center z-10">
        <div ref={h1Ref}>
          <BlurText
            text="Guilherme Ribeiro."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-9xl mb-8 text-center"
          />
        </div>
        <div ref={h2Ref}>
          <TrueFocus
            sentence="Full-Stack Developer"
            manualMode={false}
            blurAmount={5}
            borderColor="white"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
          />
        </div>
        {/* <h2 ref={h2Ref} className="text-3xl md:text-5xl mt-4">
          Full-Stack Developer
        </h2> */}
      </div>
    </div>
  );
};

export default Home;
