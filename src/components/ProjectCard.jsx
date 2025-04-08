import { div } from "framer-motion/client";
import React from "react";
import { useEffect } from "react";

const ProjectCard = ({ title, description, img }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const refModalOverlay = React.useRef(null);
  const refCardsProject = React.useRef(null);
  const handleClick = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      {modalIsOpen && (
        <div
  className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
  ref={refModalOverlay}
>
  <div className="w-[700px] h-[700px] bg-black rounded-lg shadow-2xl flex flex-col items-center justify-center p-6 border border-neutral-600 shadow-slate-300">
    <div className="w-full h-[60%] overflow-hidden flex items-center justify-center">
      <img
        src={img}
        alt={title}
        className="max-w-full max-h-full rounded-md object-contain"
      />
    </div>
    <h2 className="text-xl font-bold mt-4 text-center text-white">{title}</h2>
    <p className="text-center text-neutral-300">{description}</p>
    <button
      className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
      onClick={() => setModalIsOpen(false)}
    >
      Fechar
    </button>
  </div>
</div>

      )}

      <div
        className="h-[350px] bg-black text-slate-300 rounded-lg shadow-2xl flex flex-col items-center p-4 border border-neutral-600  shadow-slate-300"
        onClick={handleClick}
        ref={refCardsProject}
      >
        <div className="w-full h-full overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-auto rounded-md object-cover"
          />
        </div>

        <h2 className="text-xl font-bold mt-2">{title}</h2>
        <p className="">{description}</p>
      </div>
    </>
  );
};

export default ProjectCard;
