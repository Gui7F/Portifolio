import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Aboutme = () => {
  return (
    <div className="2xl:flex m-auto bg-black w-3/4 mt-64 pt-[70px] pb-[70px]">
      {/* Imagem */}
      <div className="w-[500px] h-[500px] bg-slate-400 ml-64">
        <img src="" alt="" />
      </div>

      {/* Texto com Carrossel */}
      <div className="2xl:w-1/2 text-slate-300">
        <h1 className="2xl:text-5xl">Sobre Mim</h1>

        {/* Carrossel de textos */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          className="mt-6"
        >
          <SwiperSlide>
            <div>
              <h2 className="text-xl font-bold mb-2">Texto1</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
                explicabo aperiam distinctio quaerat doloremque itaque dolor
                repellendus dolorum eveniet possimus amet eligendi, consectetur eius,
                debitis ab nobis provident nihil. Ad.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
                explicabo aperiam distinctio quaerat doloremque itaque dolor
                repellendus dolorum eveniet possimus amet eligendi, consectetur eius,
                debitis ab nobis provident nihil. Ad.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
                explicabo aperiam distinctio quaerat doloremque itaque dolor
                repellendus dolorum eveniet possimus amet eligendi, consectetur eius,
                debitis ab nobis provident nihil. Ad.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
                explicabo aperiam distinctio quaerat doloremque itaque dolor
                repellendus dolorum eveniet possimus amet eligendi, consectetur eius,
                debitis ab nobis provident nihil. Ad.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Aboutme;

