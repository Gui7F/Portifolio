import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { faWandMagic } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import ShinyText from "../components/ShinyText";
  
// animations
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


const Servicos = () => {
  
  const containerService = useRef(null);
  
  //Animaçoes para os primeiros services 
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const titles = gsap.utils.toArray(".titleService")
      titles.forEach((el) => {
        gsap.from(el , {
          y: -100,
          rotate: 360,
          opacity: 0,
          duration: 1,
          ease: "power2",
          force3D: true ,
          scrollTrigger: {
            trigger: containerService.current,
            start: "top 40%",
            toggleActions: "play reverse play reverse",
            invalidateOnRefresh: true
          },
      }) 
      });
      const texts = gsap.utils.toArray(".textService");
      texts.forEach((el) => {
        gsap.from(el, {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "elastic.inOut",
          force3D: true,
          scrollTrigger: {
            trigger: containerService.current,
            start: "top 40%",
            toggleActions: "play reverse play reverse",
            invalidateOnRefresh: true
          },
        });
      })

    }, containerService);

    return () => ctx.revert();
  }, [containerService])



  return (
    <main className="m-auto 2xl:w-3/4 w-[90%] h-full" ref={containerService}>
      <div className="2xl:w-[99%] lg:w-[98.5%] w-[96%] m-auto bg-black border border-neutral-600 mb-3 flex items-center justify-center">
      <h1 className="text-center py-6 custom-class 2xl:text-5xl text-2xl"><ShinyText text="Serviços"/></h1>
      </div>
      
      <article className="lg:flex">
        <div className="lg:w-1/3 m-2 text-center border bg-black border-neutral-600 p-6  shadow-2xl shadow-slate-300 max-[480px]:mb-3">
          <div className="titleService flex flex-col items-center" >
          <FontAwesomeIcon icon= {faLaptopCode} className=" align-middle 2xl:text-6xl text-[50px] text-slate-300 mb-2"  />
          <h2 className="text-slate-300 2xl:text-2xl text-[20px] mb-4">Frontend</h2>
          </div>
          <p className="textService font-sans text-slate-200 w-full text-justify line-clamp-6 hover:line-clamp-none" >
            Sou um desenvolvedor frontend especializado em criar interfaces
            modernas e eficientes, utilizando tecnologias como React para
            construção de componentes reutilizáveis e dinâmicos, Tailwind CSS
            para estilização ágil e responsiva, e TypeScript para garantir
            código seguro e bem tipado. Além disso, integro APIs de forma eficaz
            com Axios e possuo conhecimentos em Express para desenvolver
            soluções full-stack quando necessário. Minha abordagem prioriza a
            organização do código, a experiência do usuário e a entrega de
            projetos escaláveis e de alta performance.
          </p>
        </div>
        <div className="lg:w-1/3 m-2 text-center border bg-black border-neutral-600 p-6  shadow-2xl shadow-slate-300 max-[480px]:mb-3">
           <div className="titleService flex flex-col items-center">
           <FontAwesomeIcon icon= {faNetworkWired} className=" align-middle 2xl:text-6xl text-[50px] text-slate-300 mb-2" r/>
           <h2 className="text-slate-300 2xl:text-2xl text-[20px] mb-4">Backend</h2>
           </div>
          <p className="textService font-sans text-slate-200 w-full text-justify line-clamp-6 hover:line-clamp-none "  >
            Sou desenvolvedor backend com experiência em Node.js e Express,
            utilizando TypeScript para criar APIs REST e RESTFull robustas e bem
            estruturadas. Domino a construção de endpoints CRUD, autenticação
            com Bcrypt e JWT, e validação de dados com ExpressValidator.
            Atualmente, estudo NestJS para elevar ainda mais a qualidade e
            organização dos meus projetos. Minha abordagem prioriza segurança,
            escalabilidade e boas práticas, meus estudos com backend é mais
            recente porém estou a cada dia aumentando meu conhecimento das boas
            praticas e arquiteturas de APIs.
          </p>
        </div>
        <div className="lg:w-1/3 m-2 text-center border bg-black border-neutral-600 p-6  shadow-2xl shadow-slate-300 max-[480px]:mb-3">
        <div className="titleService flex flex-col items-center">
          <FontAwesomeIcon icon= {faWandMagic} className=" align-middle 2xl:text-6xl text-[50px] text-slate-300 mb-2"/>
          <h2 className="text-slate-300 2xl:text-2xl text-[20px] mb-4">Desing</h2>
        </div>
          <p className="textService font-sans text-slate-200 w-full text-justify line-clamp-6 hover:line-clamp-none ">
            Sou apaixonado por design e experiência do usuário, utilizando Figma
            para idealização de interfaces e Photoshop para tratamento e
            otimização de imagens. Aplico teorias de cores e tipografia para
            criar designs harmoniosos, considerando aspectos culturais,
            estéticos e a usabilidade. Meu foco é unir beleza, funcionalidade e
            uma experiência intuitiva para o usuário final.
          </p>
        </div>
      </article>
      <article className="lg:flex">
        <div className="lg:w-1/3 m-2 text-center border bg-black border-neutral-600 p-6  shadow-2xl shadow-slate-300 max-[480px]:mb-3">
          <div className="titleService flex flex-col items-center">
          <FontAwesomeIcon icon= {faDatabase} className=" align-middle 2xl:text-6xl text-[50px] text-slate-300 mb-2"/>
          <h2 className="text-slate-300 2xl:text-2xl text-[20px] mb-4">Database</h2>
          </div>
          <p className="textService font-sans text-slate-200 w-full text-justify line-clamp-6 hover:line-clamp-none">
            Tenho experiência em integração com bancos de dados NoSQL,
            especialmente MongoDB, dominando estruturas de collections e
            documents para criar aplicações escaláveis horizontalmente. Além
            disso, possuo conhecimentos iniciais em SQL, incluindo normalização
            de dados, relacionamentos entre entidades e manipulação de dados
            através de comandos SQL. Meu foco é garantir soluções de banco de
            dados eficientes e adequadas às necessidades do projeto.
          </p>
        </div>
        <div className="lg:w-1/3 m-2 text-center border bg-black border-neutral-600 p-6  shadow-2xl shadow-slate-300 max-[480px]:mb-3">
           <div className="titleService flex flex-col items-center">
           <FontAwesomeIcon icon= {faGitAlt} className=" align-middle 2xl:text-6xl text-[50px] text-slate-300 mb-2"/>
           <h2 className="text-slate-300 2xl:text-2xl text-[20px] mb-4">Git</h2>
           </div>
          <p className="textService font-sans text-slate-200 w-full text-justify line-clamp-6 hover:line-clamp-none ">
            Utilizo Git desde o início dos meus estudos para versionamento e
            controle de código, garantindo organização e rastreabilidade em cada
            etapa do projeto. Consigo resolver conflitos de forma eficiente,
            criar commits descritivos com a ajuda do Git Copilot e manter um
            fluxo de trabalho claro e estruturado. Essa prática me permite
            gerenciar projetos de forma colaborativa e segura, seguindo boas
            práticas de desenvolvimento.
          </p>
        </div>
        <div className="lg:w-1/3 m-2 text-center border bg-black border-neutral-600 p-6  shadow-2xl shadow-slate-300 max-[480px]:mb-3">
        <div className="titleService flex flex-col items-center">
        <FontAwesomeIcon icon= {faComment} className=" align-middle 2xl:text-6xl text-[50px] text-slate-300 mb-2"/>
        <h2 className="text-slate-300 2xl:text-2xl text-[20px] mb-4">Comunicação</h2>
        </div>
          <p className="textService font-sans text-slate-200 w-full text-justify line-clamp-6 hover:line-clamp-none ">
            Tenho uma soft skill muito desenvolvida em comunicação, com uma boa
            noção do valor da comunicação clara, objetiva e profissional.
            Reconheço que a forma como nos comunicamos tem alta influência na
            geração de valor, especialmente em uma área onde a informação é
            essencial. Busco sempre me expressar de maneira eficiente e
            acessível, adaptando minha comunicação para diferentes stakeholders,
            desde colegas de equipe até clientes. Estou constantemente
            aprendendo e aplicando boas práticas para garantir que a troca de
            informações seja precisa e alinhada aos objetivos do projeto.
          </p>
        </div>
      </article>
    </main>

    
  );
};

export default Servicos;