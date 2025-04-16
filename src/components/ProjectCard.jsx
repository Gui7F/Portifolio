import { div } from "framer-motion/client";
import React from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ title, description, img , shortDescription, tag}) => {
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
          className=" fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          ref={refModalOverlay}
        >
          <div className="2xl:max-w-[800px] w-[95%] h-auto  bg-black rounded-lg shadow-2xl flex flex-col items-center justify-center px-6 py-3 border border-neutral-600 shadow-slate-300">
            <div className="ml-[100%] mb-4">
            <button
              
              className=" text-white text-center text-3xl px-1 rounded hover:rotate-180 hover:bg-red-600 duration-300" 
              onClick={() => setModalIsOpen(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            </div>

            <div className="w-full h-[80%] overflow-hidden flex items-center justify-center">
              <img
                src={img}
                alt={title}
                className="max-w-full max-h-full rounded-md object-contain"
              />
            </div>
            <h2 className="text-xl font-bold mt-4 text-center text-white">
              {title}
            </h2>
            <p className="2xl:text-justify text-center text-neutral-300">{description}</p>

            {/* Buttons and tags */}
            <div className="2xl:flex justify-arround items-center w-full">
                {/* Button Deploy */}
             <div className="flex items-center justify-center">
                <div className="flex items-center justify-center mt-4 mr-2 ">
                  <button className="group text-white flex border border-neutral-600 rounded-md px-4 py-2">
                  <svg
                  className="transition-transform duration-300 group-hover:-rotate-[45deg]" 
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m2.45 10.575l4.2-4.2q.35-.35.825-.5t.975-.05l1.3.275Q8.4 7.7 7.625 9t-1.5 3.15zm5.125 2.275q.575-1.8 1.563-3.4t2.387-3q2.2-2.2 5.025-3.287t5.275-.663q.425 2.45-.65 5.275T17.9 12.8q-1.375 1.375-3 2.388t-3.425 1.587zm6.9-3q.575.575 1.413.575T17.3 9.85t.575-1.412t-.575-1.413t-1.412-.575t-1.413.575t-.575 1.413t.575 1.412m-.7 12.025l-1.6-3.675q1.85-.725 3.163-1.5t2.912-2.125l.25 1.3q.1.5-.05.988t-.5.837zM4.05 16.05q.875-.875 2.125-.888t2.125.863t.875 2.125t-.875 2.125q-.625.625-2.087 1.075t-4.038.8q.35-2.575.8-4.025T4.05 16.05"/></svg>
                  <p className="font-extralight">Deploy</p>
                  </button>
                </div>

                {/* Button GitHub */}
                <div className="flex items-center justify-center mt-4 mr-2">
                  <button className="group text-white flex border border-neutral-600 rounded-md px-4 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128"><g fill="#fff"><path fill-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388c0 26.682 17.303 49.317 41.297 57.303c3.017.56 4.125-1.31 4.125-2.905c0-1.44-.056-6.197-.082-11.243c-16.8 3.653-20.345-7.125-20.345-7.125c-2.747-6.98-6.705-8.836-6.705-8.836c-5.48-3.748.413-3.67.413-3.67c6.063.425 9.257 6.223 9.257 6.223c5.386 9.23 14.127 6.562 17.573 5.02c.542-3.903 2.107-6.568 3.834-8.076c-13.413-1.525-27.514-6.704-27.514-29.843c0-6.593 2.36-11.98 6.223-16.21c-.628-1.52-2.695-7.662.584-15.98c0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033c11.526-7.813 16.59-6.19 16.59-6.19c3.287 8.317 1.22 14.46.593 15.98c3.872 4.23 6.215 9.617 6.215 16.21c0 23.194-14.127 28.3-27.574 29.796c2.167 1.874 4.097 5.55 4.097 11.183c0 8.08-.07 14.583-.07 16.572c0 1.607 1.088 3.49 4.148 2.897c23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" clip-rule="evenodd"/><path d="M26.484 91.806c-.133.3-.605.39-1.035.185c-.44-.196-.685-.605-.543-.906c.13-.31.603-.395 1.04-.188c.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28c-.396-.42-.47-.983-.177-1.254c.298-.266.844-.14 1.24.28c.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52c-.37-.538-.37-1.183.01-1.44c.373-.258.97-.025 1.35.507c.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23c-.527-.487-.674-1.18-.343-1.544c.336-.366 1.045-.264 1.564.23c.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486c-.683-.207-1.13-.76-.99-1.238c.14-.477.823-.7 1.512-.485c.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92c-.723.017-1.308-.387-1.315-.877c0-.503.568-.91 1.29-.924c.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117c-.7.13-1.35-.172-1.44-.653c-.086-.498.422-.997 1.122-1.126c.714-.123 1.354.17 1.444.663zm0 0"/></g></svg>
                  <p className="font-extralight">Repo</p>
                  </button>
                </div>
            </div>
                <div className="flex items-center justify-center  mt-3">
                  {tag.map((item, index) => (
                    <p
                      key={index}
                      className="border border-neutral-600 2xl:text-base text-[10px] text-white rounded-md px-2 py-[-2px] ml-2  hover:bg-neutral-300 hover:text-black hover:cursor-pointer"
                    >
                      {item}
                    </p>
                  ))}
                </div>
            </div>
            {/* Buttons and tags */}
          </div>
        </div>
      )}

      <div
        className="h-[350px] bg-black text-slate-300 shadow-2xl flex flex-col items-center p-4 border border-neutral-600  shadow-slate-300"
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
        <p className="">{shortDescription}</p>
      </div>
    </>
  );
};

export default ProjectCard;
