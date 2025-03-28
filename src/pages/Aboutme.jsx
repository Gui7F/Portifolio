import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Components 
import ShinyText from "../components/ShinyText";

const Aboutme = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="2xl:flex 2xl:space-x-20  m-auto relative bg-black 2xl:w-3/4 w-[90%] border border-neutral-600 pt-[80px] pb-[80px]">
      {/* Imagem */}
      <div className="2xl:w-[40%] w-[80%] m-auto h-[500px]  bg-slate-400">
        <img src="" alt="" />
      </div>

      {/* Texto com Carrossel */}
      <div className="2xl:w-1/2 text-slate-300 relative">
        <h1 className='2xl:text-5xl max-[480px]:mt-9 text-3xl text-center'><ShinyText text={"Sobre Mim"}/></h1>

        {/* Botões personalizados */}
        <button
          ref={prevRef}
          className="absolute 2xl:left-[-50px] left-[-15px] top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-white hover:text-black transition"
        >
          ←
        </button>

        <button
          ref={nextRef}
          className="absolute 2xl:right-[-50px] right-[-20px] top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-white hover:text-black transition"
        >
          →
        </button>

        {/* Swiper com setas personalizadas */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          spaceBetween={30}
          slidesPerView={1}
          className="mt-6 text-justify w-[90%]"
        >
          <SwiperSlide>
            <div>
              <h2 className="text-xl text-center font-bold mb-2">Texto1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eos amet? Delectus fuga voluptate perspiciatis suscipit, odio modi possimus sapiente, obcaecati, ratione consequuntur quasi nisi dignissimos quibusdam nihil necessitatibus repellendus.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div>
              <h2 className="text-xl text-center font-bold mb-2">Texto1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eos amet? Delectus fuga voluptate perspiciatis suscipit, odio modi possimus sapiente, obcaecati, ratione consequuntur quasi nisi dignissimos quibusdam nihil necessitatibus repellendus.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Aboutme;
