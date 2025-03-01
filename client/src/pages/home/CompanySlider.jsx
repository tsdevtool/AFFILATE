import React, { useEffect, useRef } from "react";
import { companiesData } from "../companies/CompaniesPage";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import CompanyCard from "@/components/CompanyCard";
const CompanySlider = () => {
  const companies = companiesData;
  const carouselRef = useRef(null);
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const maxScroll =
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

        if (carouselRef.current.scrollLeft >= maxScroll) {
          // Nếu đã đến cuối, reset ngay về đầu mà không có hiệu ứng giật
          carouselRef.current.scrollTo({ left: 0, behavior: "instant" });
        } else {
          // Nếu chưa đến cuối, tiếp tục cuộn
          carouselRef.current.scrollBy({ left: 1, behavior: "smooth" });
        }
      }
    }, 30); // Điều chỉnh tốc độ cuộn tại đây

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="company"
      className="relative overflow-hidden w-full bg-gray-900 shadow-2xl  shadow-amber-300 "
    >
      {/* <Button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 z-20 -translate-y-0.5 rounded-full w-12 h-12 bg-gray-900/60 hover:bg-gray-900"
      >
        <ChevronLeft className="size-8" />
      </Button> */}
      <motion.div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scrollbar-hidden whitespace-nowrap px-6 py-4"
      >
        {companies.map((company) => (
          <motion.div
            key={company.id}
            className="flex-none w-64"
            whileHover={{ scale: 1.05 }}
          >
            <CompanyCard {...company} />
          </motion.div>
        ))}
      </motion.div>
      {/* <Button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 z-10 -translate-y-0.5 rounded-full w-12 h-12 bg-gray-900/60 hover:bg-gray-900"
      >
        <ChevronRight className="size-8" />
      </Button> */}
    </section>
  );
};

export default CompanySlider;
