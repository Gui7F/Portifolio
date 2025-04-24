import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import SpotlightCard from "../components/SpotlightCard";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";

// animation
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_0yj6tgm",
        "template_mc26wi9",
        form.current,
        "pnCCWaS-uwATSWwW9"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Mensagem enviada com sucesso!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Erro ao enviar mensagem.");
        }
      )

      .finally(() => {
        setLoading(false);
        e.target.reset();
      });
  };

  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const textItens = gsap.utils.toArray(".textForm");
      textItens.forEach((item) => {
        gsap.from(item, {
          x: -100,
          opacity: 0,
          duration: 1,
          ease : "power4",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        });
      });

      const formItens = gsap.utils.toArray(".itensForm");
      formItens.forEach((item) => {
        gsap.from(item, {
          y: 100,
          opacity: 0,
          duration: 2,
          ease:"back",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        });
      });
    });
    return () => ctx.revert();
  }, [containerRef]);

  return (
    <>
      <SpotlightCard
        className="custom-spotlight-card 2xl:w-[60%] w-[90%] m-auto h-auto 2xl:m-auto mb-[100px]"
        spotlightColor="rgba(147, 167, 180, 0.5)"
      >
        <div
          className="text-slate-300 flex justify-between w-full h-full"
          ref={containerRef}
        >
          {/* Texto */}
          <div className="2xl:w-2/3 pr-8 lg:w-[80%] max-[900px]:hidden max-[480px]:hidden">
            <h1 className="textForm 2xl:text-5xl text-2xl mb-20">
              Entre em contato comigo
            </h1>
            <p className="textForm 2xl:text-[22px] mb-40 md:w-[80%] lg:text-[18px]">
              <span>"</span> Vamos trabalhar juntos, cooperar em projetos com
              confiança e honestidade, com código limpo e bem estruturado,
              sinta-se à vontade para entrar em contato comigo através do
              formulário. <span>"</span>
            </p>
            <h2 className="textForm 2xl:text-2xl lg:text-[18px]">
              Rede Social
            </h2>
            <div className="textForm flex space-x-4 mt-4 m-auto text-center text-3xl">
              <a
                href="https://github.com/Gui7F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/gui-web-developer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://wa.me/5516988287084?text=Ol%C3%A1%20Gui%2C%20tudo%20bem%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          {/* Formulário */}
          <div className="2xl:w-1/3 lg:w-[40%] md:w-[75%] m-auto w-full">
            <h1 className="itensForm 2xl:text-3xl lg:text-[18px] mb-7">EMAIL</h1>
            <form ref={form} onSubmit={sendEmail} className="itensForm">
              <label className="text-sm">NOME</label>
              <input
                type="text"
                name="from_name"
                required
                className="block w-full mb-4 bg-neutral-800 focus:outline-none rounded-md p-1"
              />
              <label className="text-sm">EMAIL</label>
              <input
                type="email"
                name="from_email"
                required
                className="block w-full mb-4 bg-neutral-800 focus:outline-none rounded-md p-1"
              />
              <label className="text-sm">MENSAGEM</label>
              <textarea
                name="message"
                required
                className="block w-full h-[250px] mb-4 bg-neutral-800 focus:outline-none rounded-md p-1"
              ></textarea>
              <button
                type="submit"
                className="bg-neutral-800 px-4 py-1 rounded-md"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      </SpotlightCard>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Contact;
