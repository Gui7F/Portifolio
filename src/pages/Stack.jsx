// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
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
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const { contextSafe } = useGSAP({ scope: containerRef });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
     const itensStack = gsap.utils.toArray(".itemStack")
     itensStack.forEach((item) => {
      gsap.from(item, {
        y: 100,
        rotate: 360 ,
        opacity : 0,
        duration : 2,
        ease: "elastic.out",
        force3D: true,
        scrollTrigger: {
          trigger : containerRef.current,
          start : "top 60%",
          toggleActions : "play reverse play reverse",
          invalidateOnRefresh: true
        }
      })
     })
    })
    return () => ctx.revert();
  }, [])

  const onClickAnimated = contextSafe(() => {
    gsap.from(".box", {
      duration: 1,
      rotate: 360,
      y: 30, 
      ease:"bounce",
      force3D:true,
    });
  })

  const onClickAnimated2 = contextSafe(() => {
    gsap.from(".box2", {
      duration: 1,
      rotate: 360,
      y: 30, 
      ease:"bounce",
      force3D:true
    });
  })
  
  const onClickAnimated3 = contextSafe(() => {
    gsap.from(".box3", {
      duration: 1,
      rotate: 360,
      y: 30, 
      ease:"bounce",
      force3D:true
    });
  })

  const onClickAnimated4 = contextSafe(() => {
    gsap.from(".box4", {
      duration: 1,
      rotate: 360,
      y: 30, 
      ease:"bounce",
      force3D:true
    });
  })

  const onClickAnimated5 = contextSafe(() => {
    gsap.from(".box5", {
      duration: 1,
      rotate: 360,
      y: 30, 
      ease:"bounce",
      force3D:true
    });
  })

  const onClickAnimated6 = contextSafe(() => {
    gsap.from(".box6", {
      duration: 1,
      rotate: 360,
      y: 30, 
      ease:"bounce",
      force3D:true
    });
  })

  const onClickAnimated7 = contextSafe(() => {
    gsap.from(".box7", {
      duration: 1,
      rotate: 360,
      y: 30, 
      ease:"bounce",
      force3D:true
    });
  })

  const onClickAnimated8 = contextSafe(() => {
    gsap.from(".box8", {
      duration: 1,
      rotate: 360,
      y: 30, 
      ease:"bounce",
      force3D:true
    });
  })

  const onClickAnimated9 = contextSafe(() => {
    gsap.from(".box9", {
      duration: 1,
      rotate: 360,
      y: 30, 
      ease:"bounce",
      force3D:true
    });
  })


  const onClickAnimated10 = contextSafe(() => {
    gsap.from(".box10", {
      duration: 1,
      rotate: 360,
      y: 30, 
      ease:"bounce",
      force3D:true
    });
  })

  const onClickAnimated11 = contextSafe(() => {
    gsap.from(".box11", {
      duration: 1,
      rotate: 360,
      y: 30, 
      ease:"bounce",
      force3D:true
    });
  })

  const onClickAnimated12 = contextSafe(() => {
    gsap.from(".box12", {
      duration: 1,
      rotate: 360,
      y: 30, 
      ease:"bounce",
      force3D:true
    });
  })
 

  return (
    <div
      className="2xl:w-3/4 max-[480px]:w-[90%] md:w-[90%] m-auto bg-zinc-900 py-28 shadow-slate-300 2xl:m-auto mb-[150px]"
      style={{
        boxShadow: "inset 0px -20px 1000px 4px rgba(203, 213, 225, 0.8)",
      }}
      ref={containerRef}
    >
      
      <div className="2xl:grid grid-cols-4 2xl:gap-y-16 grid-rows-3 md:grid md:gap-y-10 max-[480px]:grid max-[480px]:grid-cols-2  place-items-center">
        <DeviconJavascript
          icon="devicon:javascript"
          width="128"
          height="128"
          onClick={onClickAnimated}
          className = "itemStack box max-[480px]:scale-[0.5] md:scale-[0.6] 2xl:scale-[1]"
        />

        <DeviconReactnative
          icon="devicon:reactnative"
          width="128"
          height="128"
          className="itemStack box2 max-[480px]:scale-[0.5] md:scale-[0.6] 2xl:scale-[1]"
          onClick={onClickAnimated2}
        />

        <DeviconMongodb
          icon="devicon:mongodb"
          width="128"
          height="128"
          className="itemStack box3 max-[480px]:scale-[0.5] md:scale-[0.6] 2xl:scale-[1]"
          onClick={onClickAnimated3}
        />
        <DeviconNodejs
          icon="devicon:nodejs"
          width="128"
          height="128"
          className="itemStack box4 max-[480px]:scale-[0.5] md:scale-[0.6] 2xl:scale-[1]"
          onClick={onClickAnimated4}
        />
        <DeviconNpm
          icon="devicon:npm"
          width="128"
          height="128"
          className="itemStack box5 max-[480px]:scale-[0.5] md:scale-[0.6] 2xl:scale-[1]"
          onClick={onClickAnimated5}
        />
        <DeviconTypescript
          icon="devicon:npm"
          width="128"
          height="128"
          className="itemStack box6 max-[480px]:scale-[0.5] md:scale-[0.6] 2xl:scale-[1]"
          onClick={onClickAnimated6}
        />
        <DeviconVitejs
          icon="devicon:vite"
          width="128"
          height="128"
          className="itemStack box7 max-[480px]:scale-[0.5] md:scale-[0.6] 2xl:scale-[1]"
          onClick={onClickAnimated7}
        />
        <DeviconExpress
          icon="devicon:express"
          width="128"
          height="128"
          className="itemStack box8 max-[480px]:scale-[0.5] md:scale-[0.6] 2xl:scale-[1]"
          onClick={onClickAnimated8}
        />
        <DeviconTailwindcss
          icon="devicon:tailwind"
          width="128"
          height="128"
          className="itemStack box9 max-[480px]:scale-[0.5] md:scale-[0.6] 2xl:scale-[1]"
          onClick={onClickAnimated9}
        />
        <DeviconPrisma
          icon="devicon:prisma"
          width="128"
          height="128"
          className="itemStack box10 max-[480px]:scale-[0.5] md:scale-[0.6] 2xl:scale-[1]"
          onClick={onClickAnimated10}
        />
        <DeviconVscode
          icon="devicon:vscode"
          width="128"
          height="128"
          className="itemStack box11 max-[480px]:scale-[0.5] md:scale-[0.6] 2xl:scale-[1]"
          onClick={onClickAnimated11}
        />
        <DeviconGit
          icon="devicon:prisma"
          width="128"
          height="128"
          className="itemStack box12 max-[480px]:scale-[0.5] md:scale-[0.6] 2xl:scale-[1]"
          onClick={onClickAnimated12}
        />
      </div>
    </div>
  );
};

export default Stack;