import React from "react";
// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
// import { ScrollTrigger } from "gsap/all";
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
  
  gsap.registerPlugin(useGSAP)
  // gsap.registerPlugin(ScrollTrigger)
  
  const { contextSafe } = useGSAP({ scope: containerRef });

  const onClickAnimated = contextSafe(() =>{
     gsap.from(".box", {rotate : 360})
     gsap.from(".box2", {y : 100})
  })

  return (
    <div
      className="w-[75%] m-auto bg-zinc-900 py-28   shadow-slate-300 "
      style={{
        boxShadow: "inset 0px -20px 1000px 4px rgba(203, 213, 225, 0.8)",
      }}
      ref={containerRef}
    >
      <div className="grid grid-cols-4 grid-rows-3 gap-y-16 place-items-center" >
        <DeviconJavascript icon="devicon:javascript" width="128" height="128" className="box" onClick={onClickAnimated} />
        <DeviconReactnative
          icon="devicon:reactnative"
          width="128"
          height="128"
          className="box2"
          onClick = {onClickAnimated}
        />
        <DeviconMongodb icon="devicon:mongodb" width="128" height="128" className="box"  onClick = {onClickAnimated}/>
        <DeviconNodejs icon="devicon:nodejs" width="128" height="128" className="box"  onClick = {onClickAnimated}/>
        <DeviconNpm icon="devicon:npm" width="128" height="128" className='box'  onClick = {onClickAnimated}/>
        <DeviconTypescript icon="devicon:npm" width="128" height="128" className="box"  onClick = {onClickAnimated}/>
        <DeviconVitejs icon="devicon:vite" width="128" height="128" className="box"  onClick = {onClickAnimated}/>
        <DeviconExpress icon="devicon:express" width="128" height="128" className="box"  onClick = {onClickAnimated}/>
        <DeviconTailwindcss icon="devicon:tailwind" width="128" height="128" className="box"  onClick = {onClickAnimated}/>
        <DeviconPrisma icon="devicon:prisma" width="128" height="128" className="box"  onClick = {onClickAnimated}/>
        <DeviconVscode icon="devicon:vscode" width="128" height="128" className="box"  onClick = {onClickAnimated}/>
        <DeviconGit icon="devicon:prisma" width="128" height="128" className="box"  onClick = {onClickAnimated}/>
      </div>
    </div>
  );
};

export default Stack;
