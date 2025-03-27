import React from "react";
// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
// icons
import {
  DeviconJavascript,
  DeviconReactnative,
  DeviconMongodb,
  DeviconNodejs,
  DeviconNpm,
  DeviconTypescript,
  DeviconVitejs,
  DeviconExpress,
  DeviconTailwindcss,
  DeviconPrisma,
  DeviconVscode,
  DeviconGit,
} from "../components/Icons";

const Stack = () => {
  const containerRef = useRef(null);
  const jsRef = useRef(null);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const onClickAnimated = contextSafe(() => {
    gsap.to(".box1", {
      duration: 1,
      rotate: 360,
      ease:"bounce",
    })
  });


  return (
    <div
      className="w-[75%] m-auto bg-zinc-900 py-28   shadow-slate-300 "
      style={{
        boxShadow: "inset 0px -20px 1000px 4px rgba(203, 213, 225, 0.8)",
      }}
      ref={containerRef}
    >
      <div className="grid grid-cols-4 grid-rows-3 gap-y-16 place-items-center">
        <DeviconJavascript
          icon="devicon:javascript"
          width="128"
          height="128"
          className="box1"
          onClick={onClickAnimated}
          ref={jsRef}
        />

        <DeviconReactnative
          icon="devicon:reactnative"
          width="128"
          height="128"
          className="box2"
          onClick={onClickAnimated}
        />

        <DeviconMongodb
          icon="devicon:mongodb"
          width="128"
          height="128"
          className="box3"
          onClick={onClickAnimated}
        />
        <DeviconNodejs
          icon="devicon:nodejs"
          width="128"
          height="128"
          className="box4"
          onClick={onClickAnimated}
        />
        <DeviconNpm
          icon="devicon:npm"
          width="128"
          height="128"
          className="box5"
          onClick={onClickAnimated}
        />
        <DeviconTypescript
          icon="devicon:npm"
          width="128"
          height="128"
          className="box6"
          onClick={onClickAnimated}
        />
        <DeviconVitejs
          icon="devicon:vite"
          width="128"
          height="128"
          className="box7"
          onClick={onClickAnimated}
        />
        <DeviconExpress
          icon="devicon:express"
          width="128"
          height="128"
          className="box8"
          onClick={onClickAnimated}
        />
        <DeviconTailwindcss
          icon="devicon:tailwind"
          width="128"
          height="128"
          className="box9"
          onClick={onClickAnimated}
        />
        <DeviconPrisma
          icon="devicon:prisma"
          width="128"
          height="128"
          className="box10"
          onClick={onClickAnimated}
        />
        <DeviconVscode
          icon="devicon:vscode"
          width="128"
          height="128"
          className="box11"
          onClick={onClickAnimated}
        />
        <DeviconGit
          icon="devicon:prisma"
          width="128"
          height="128"
          className="box12"
          onClick={onClickAnimated}
        />
      </div>
    </div>
  );
};

export default Stack;
