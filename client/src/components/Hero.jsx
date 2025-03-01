import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
const slides = [
  {
    id: 1,
    title: "Luyện Thi Tin Học Trẻ",
    description:
      "Chuẩn bị cho kỳ thi tin học với chương trình đào tạo chuyên sâu!",
    image: "https://picsum.photos/1600/900",
    cta: "Đăng ký ngay",
  },
  {
    id: 2,
    title: "Học Lập Trình Scratch",
    description:
      "Dành cho học sinh từ lớp 4 đến lớp 9, học lập trình một cách thú vị!",
    image: "https://picsum.photos/1600/900",
    cta: "Bắt đầu học",
  },
];
const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full aspect-[16/9] max-h-screen overflow-hidden bg-red-500">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative flex items-center justify-center h-full text-white">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full lg:h-screen object-cover"
              />
              <div className="absolute inset-0 bg-gray-900/30"></div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center px-6"
              >
                <h1 className="text-6xl max-md:text-7xl font-extrabold text-white drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg max-md:text-xl mt-4">
                  {slide.description}
                </p>
                <button className="mt-6 bg-yellow-400/70 hover:bg-yellow-400 hover:text-red-600 text-red-800 px-6 py-3 rounded-lg text-lg font-bold shadow-md cursor-pointer">
                  {slide.cta}
                </button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
