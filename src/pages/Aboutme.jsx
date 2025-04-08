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
        <img className="h-full w-full object-cover" src="./fotoperfil.jpg" alt="" />
      </div>

      {/* Texto com Carrossel */}
      <div className="2xl:w-1/2 text-slate-300 relative">
        <h1 className="2xl:text-5xl md:mt-5 max-[480px]:mt-9 text-3xl text-center">
          <ShinyText text={"Sobre Mim"} />
        </h1>

        {/* Botões personalizados */}
        <button
          ref={prevRef}
          className="absolute 2xl:left-[-50px] left-[-15px] top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-white hover:text-black transition"
        >
          ←
        </button>

        <button
          ref={nextRef}
          className="absolute 2xl:right-[-20px] max-[480px]:right-[-20px] md:right-[-20px] top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-white hover:text-black transition"
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
          className="mt-6 text-justify max-[480px]:w-[90%] md:w-[70%]"
        >
          <SwiperSlide>
            <div>
              <h2 className="text-xl text-center font-bold mb-2">
                Apresentação
              </h2>
              <p className="mb-2">
                Meu nome é Guilherme Ribeiro, sou estudante de Analise e
                Desenvolvimento de Sistemas. Tenho 25 anos e sou apaixonado por
                tecnologia, programação e design. Estou sempre em busca de novos
                desafios e oportunidades para aprender e crescer na área de
                desenvolvimento web.
              </p>
              <p>
                Sou pai de duas crianças e sou casado, o que me motiva a
                trabalhar duro para proporcionar um futuro melhor para minha
                família. Acredito que a tecnologia pode transformar vidas e
                estou comprometido em fazer parte dessa transformação.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <h2 className="text-xl text-center font-bold mb-2">
                Experiência
              </h2>
              <p className="mb-2">
                Trabalho desde os 16 anos, quando iniciei minha trajetória como
                jovem aprendiz na área de vendas. Com o tempo, fui ampliando
                minha experiência em diferentes setores, atuando como ajudante
                até chegar a Encanador Industrial II na área de mecânica
                industrial e, atualmente, como vigilante patrimonial. Essa
                jornada tem sido essencial para meu desenvolvimento pessoal e
                profissional, permitindo que eu conclua meus estudos e invista
                na minha formação superior.
              </p>
              <p>
                Paralelamente, venho me dedicando a projetos práticos e
                freelancers na área de desenvolvimento web, onde tenho aplicado
                meus conhecimentos em situações reais com clientes e demandas
                específicas. Estou constantemente me aprimorando, com o objetivo
                de ingressar de forma sólida e preparada no mercado profissional
                de tecnologia.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h2 className="text-xl text-center font-bold mb-2">
                Personalidade
              </h2>
              <p className="mb-2">
                Sou uma pessoa simples, que valoriza o caráter e a bondade.
                Procuro ser justo e honesto em todas as situações. Gosto de
                ajudar os outros e estou sempre disposto a aprender com quem me
                estende a mão. Sou extremamente colaborativo, pois acredito que
                ninguém realiza nada sozinho. Por isso, levo a humildade e o
                respeito como princípios fundamentais da minha vida.
              </p>
              <p>
                Gosto de paz e tranquilidade desde mais novo, nunca fui de ir muito a festas ou baladas. Prefiro ficar em casa, jogando videogame ou assistindo
                filmes e séries no meu tempo livre ou simplemente passear com a familia e amigos, aproveitando momentos de descontração e diversão. Tambem gosto 
                de treinar e cuidar da minha saúde, e me manter em forma, tanto fisicamente quanto mentalmente.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Aboutme;
