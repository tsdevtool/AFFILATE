import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Mở bán khoá học Javascript Pro",
    description:
      "Từ 08/08/2024 khóa học sẽ có giá 1.399k. Khi khóa học hoàn thiện sẽ trở về giá gốc.",
    image:
      "https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png",
    atc: "Đăng ký ngay",
    bgGradient: "bg-gradient-to-r from-purple-700 to-pink-500",
  },
  {
    id: 2,
    title: "Học ReactJS Miễn Phí!",
    description:
      "Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.",
    image:
      "https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png",
    atc: "Đăng ký ngay",
    bgGradient: "bg-gradient-to-r from-blue-700 to-green-500",
  },
  {
    id: 3,
    title: "Mở bán khoá học TypeScript Pro",
    description:
      "Học TypeScript chuyên sâu, nâng cao kỹ năng lập trình Frontend chuyên nghiệp.",
    image:
      "https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png",
    atc: "Đăng ký ngay",
    bgGradient: "bg-gradient-to-r from-red-700 to-yellow-500",
  },
];

const HeroCoursesSection = () => {
  return (
    <div className="relative w-full h-[350px] ">
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <Button
          id="prevBtn"
          variant="ghost"
          className="p-2 rounded-full bg-white/20 w-12 h-12 hover:bg-gray-900/60 cursor-pointer"
        >
          <ChevronLeft className="size-6 text-white" />
        </Button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{ prevEl: "#prevBtn", nextEl: "#nextBtn" }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full rounded-4xl"
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <div
              className={`flex items-center w-full h-auto py-20  px-24 rounded-4xl shadow-lg ${course.bgGradient}`}
            >
              {/* Nội dung khóa học (Bên trái - 2/3) */}
              <div className="flex-[2] text-white text-left pr-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  {course.title}
                </h1>
                <p className="mt-2 text-sm sm:text-lg">{course.description}</p>
                <button className="mt-4 px-6 py-2 text-white font-bold bg-transparent border border-white rounded-full">
                  {course.atc}
                </button>
              </div>

              {/* Ảnh khóa học (Bên phải - 1/3) */}
              <div className="flex-[1] flex justify-center">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-auto rounded-lg object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 ">
        <Button
          id="nextBtn"
          variant="ghost"
          className="p-2 rounded-full bg-white/20 w-12 h-12 cursor-pointer hover:bg-gray-900/60"
        >
          <ChevronRight className="size-6 text-white " />
        </Button>
      </div>
    </div>
  );
};

export default HeroCoursesSection;
