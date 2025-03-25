import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { faWandMagic } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import ShinyText from "../components/ShinyText";
  


const Servicos = () => {
  return (
    <main className="m-auto w-3/4 pt-[80px] h-full">
      <h1 className="text-center"><ShinyText text="Service" disabled={false} speed={3} className='custom-class text-5xl' /></h1>
      <article className="lg:flex md:flex">
        <div className="lg:w-1/3 m-2 text-center border bg-black border-neutral-600 p-6 rounded-lg shadow-2xl shadow-slate-300 max-[480px]:mb-10">
          <FontAwesomeIcon icon= {faLaptopCode} className=" align-middle text-6xl text-slate-300 mb-2"/>
          <h2 className="text-slate-300 text-2xl mb-4">Frontend</h2>
          <p className="font-sans text-slate-200 w-full text-justify line-clamp-6 hover:line-clamp-none">
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
        <div className="lg:w-1/3 m-2 text-center border bg-black border-neutral-600 p-6 rounded-lg shadow-2xl shadow-slate-300 max-[480px]:mb-10">
        <FontAwesomeIcon icon= {faNetworkWired} className=" align-middle text-6xl text-slate-300 mb-2"/>
          <h2 className="text-slate-300 text-2xl mb-4">Backend</h2>
          <p className="font-sans text-slate-200 w-full text-justify line-clamp-6 hover:line-clamp-none">
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
        <div className="lg:w-1/3 m-2 text-center border bg-black border-neutral-600 p-6 rounded-lg shadow-2xl shadow-slate-300 max-[480px]:mb-10">
        <FontAwesomeIcon icon= {faWandMagic} className=" align-middle text-6xl text-slate-300 mb-2"/>
          <h2 className="text-slate-300 text-2xl mb-4">Desing</h2>
          <p className="font-sans text-slate-200 w-full text-justify line-clamp-6 hover:line-clamp-none">
            Sou apaixonado por design e experiência do usuário, utilizando Figma
            para idealização de interfaces e Photoshop para tratamento e
            otimização de imagens. Aplico teorias de cores e tipografia para
            criar designs harmoniosos, considerando aspectos culturais,
            estéticos e a usabilidade. Meu foco é unir beleza, funcionalidade e
            uma experiência intuitiva para o usuário final.
          </p>
        </div>
      </article>
      <article className="lg:flex md:flex">
        <div className="lg:w-1/3 m-2 text-center border bg-black border-neutral-600 p-6 rounded-lg shadow-2xl shadow-slate-300 max-[480px]:mb-10">
        <FontAwesomeIcon icon= {faDatabase} className=" align-middle text-6xl text-slate-300 mb-2"/>
          <h2 className="text-slate-300 text-2xl mb-4">Database</h2>
          <p className="font-sans text-slate-200 w-full text-justify line-clamp-6 hover:line-clamp-none">
            Tenho experiência em integração com bancos de dados NoSQL,
            especialmente MongoDB, dominando estruturas de collections e
            documents para criar aplicações escaláveis horizontalmente. Além
            disso, possuo conhecimentos iniciais em SQL, incluindo normalização
            de dados, relacionamentos entre entidades e manipulação de dados
            através de comandos SQL. Meu foco é garantir soluções de banco de
            dados eficientes e adequadas às necessidades do projeto.
          </p>
        </div>
        <div className="lg:w-1/3 m-2 text-center border bg-black border-neutral-600 p-6 rounded-lg shadow-2xl shadow-slate-300 max-[480px]:mb-10">
        <FontAwesomeIcon icon= {faGitAlt} className=" align-middle text-6xl text-slate-300 mb-2"/>
          <h2 className="text-slate-300 text-2xl mb-4">Git</h2>
          <p className="font-sans text-slate-200 w-full text-justify line-clamp-6 hover:line-clamp-none">
            Utilizo Git desde o início dos meus estudos para versionamento e
            controle de código, garantindo organização e rastreabilidade em cada
            etapa do projeto. Consigo resolver conflitos de forma eficiente,
            criar commits descritivos com a ajuda do Git Copilot e manter um
            fluxo de trabalho claro e estruturado. Essa prática me permite
            gerenciar projetos de forma colaborativa e segura, seguindo boas
            práticas de desenvolvimento.
          </p>
        </div>
        <div className="lg:w-1/3 m-2 text-center border bg-black border-neutral-600 p-6 rounded-lg shadow-2xl shadow-slate-300 max-[480px]:mb-10">
        <FontAwesomeIcon icon= {faComment} className=" align-middle text-6xl text-slate-300 mb-2"/>
          <h2 className="text-slate-300 text-2xl mb-4">Comunicação</h2>
          <p className="font-sans text-slate-200 w-full text-justify line-clamp-6 hover:line-clamp-none">
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