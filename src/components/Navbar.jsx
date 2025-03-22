import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

//hook
import { useState } from "react";

function Navbar({
  scrollToSection,
  homeRef,
  aboutMeRef,
  serviceRef,
  projectRef,
  contactRef,
  stackRef,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //   Botoes Navbar mecanismo
  const getSectionRef = (page) => {
    switch (page) {
      case "home":
        return homeRef;
      case "about":
        return aboutMeRef;
      case "service":
        return serviceRef;
      case "project":
        return projectRef
      case "stack":
        return stackRef;
      case "contact":
        return contactRef;
      default:
        return null;
    }
  };

  const getButtonLabel = (page) => {
    switch (page) {
      case "home":
        return "HOME";
      case "about":
        return "SOBRE MIM";
      case "service":
        return "SERVIÇOS";
      case "project":
        return "PROJETOS"
      case "stack":
        return "STACK";
      case "contact":
        return "CONTATO";
      default:
        return page;
    }
  };
  const [isActivated, setIsActivated] = useState("home");

  return (
    <>
<div className="fixed z-50 w-full flex justify-around items-center border-zinc-900 bg-zinc-900 h-[67px] shadow-[0px_-20px_50px_4px_rgba(29,78,216,0.8)] animate-neon">
        {/* Logo */}
        <div className="max-[480px]:absolute left-0 pl-2">
          <h1>Logo</h1>
        </div>

        {/* Navbar */}
        <div className="flex m-auto max-[1000px]:hidden z-50">
      {["home", "about", "service","project", "stack", "contact"].map((page) => (
            <nav key={page} className="flex lato-light">
              <button
                onClick={() => {
                  scrollToSection(getSectionRef(page));
                  setIsActivated(page);
                }}
                className={`relative px-6 py-1 ml-10  text-[16px]  transition-all duration-300 overflow-hidden 
          ${isActivated === page ? "text-zinc-300" : "text-zinc-500"}
          `}
              >
                <span className="relative z-10">{getButtonLabel(page)}</span>
                <span
                  className={`absolute top-0 left-0 w-full h-full bg-color-button  transition-all duration-300 -z-10
            ${isActivated === page ? "scale-x-100" : "scale-x-0"}
          `}
                ></span>
              </button>
            </nav>
          ))}
        </div>
        {/* Icone Navbar Mobile */}
        <div className="lg:hidden max-[480px]:absolute right-2.5 pr-2">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none text-[20px]"
          >
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faBars} className="hidden" />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}

      <div
        style={{
          transition: "transform 0.2s ease-in-out",
          transform: isMenuOpen ? "scale(1)" : "scale(0)",
        }}
        className="fixed border inset-0 bg-color-clear bg-opacity-95 flex flex-col items-end justify-center z-50 w-3/4 ml-auto lato-thin"
      >
        <div className="absolute  top-[25px] w-full text-[18px]">
          <button
            onClick={toggleMenu}
            className="absolute top-[-10px] right-2.5  focus:outline-none text-[25px]"
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <nav className=" grid grid-rows-5 gap-0 mt-10 w-full  border border-zinc-800">
            <div className="border-b border-zinc-800  h-14 flex items-center ">
              <button
                className="w-full text-end px-4"
                onClick={() => {
                  scrollToSection(homeRef);
                  toggleMenu();
                }}
              >
                HOME <FontAwesomeIcon icon={faHouse} />
              </button>
            </div>

            <div className="border-b border-zinc-800  h-14 flex items-center">
              <button
                className="w-full text-end px-4"
                onClick={() => {
                  scrollToSection(aboutMeRef);
                  toggleMenu();
                }}
              >
                SOBRE MIM <FontAwesomeIcon icon={faAddressCard} />
              </button>
            </div>

            <div className="border-b border-zinc-800  h-14 flex items-center">
              <button
                className="w-full text-end px-4"
                onClick={() => {
                  scrollToSection(serviceRef);
                  toggleMenu();
                }}
              >
                SERVIÇOS <FontAwesomeIcon icon={faBook} />
              </button>
            </div>
            <div className="border-b border-zinc-800  h-14 flex items-center">
              <button
                className="w-full text-end px-4"
                onClick={() => {
                  scrollToSection(serviceRef);
                  toggleMenu();
                }}
              >
                PROJETOS <FontAwesomeIcon icon={faBook} />
              </button>
            </div>

            <div className="border-b border-zinc-800  h-14 flex items-center">
              <button
                className="w-full text-end px-4"
                onClick={() => {
                  scrollToSection(contactRef);
                  toggleMenu();
                }}
              >
                CONTATO <FontAwesomeIcon icon={faComment} />
              </button>
            </div>
            {/* whatsapp mobile */}
            <div className="border-b border-zinc-800  h-14 flex items-center">
              <button
                className="w-full text-end px-4"
                onClick={() => {
                  window.open(
                    "https://wa.me/5516988187713?text=Olá,%20Leana%20Beraldo%20quero%20agendar%20uma%20consulta",
                    "_blank",
                    "noopener,noreferrer"
                  );
                  toggleMenu(); // Fecha o menu
                }}
              >
                WHATSAPP <FontAwesomeIcon icon={faSquareWhatsapp} />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
Navbar.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  homeRef: PropTypes.object.isRequired,
  aboutMeRef: PropTypes.object.isRequired,
  articlesRef: PropTypes.object.isRequired,
  contactRef: PropTypes.object.isRequired,
};

export default Navbar;