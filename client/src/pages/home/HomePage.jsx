import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "@/components/Hero";
import CompanyCard from "@/components/CompanyCard";

import ScrollToTop from "@/components/ScrollToTop";
import CompanySlider from "./CompanySlider";
const HomePage = () => {
  return (
    <MainLayout>
      {/* Hero Full Screen */}
      <section
        id="hero"
        className="w-full lg:h-screen shadow-2xl shadow-amber-300"
      >
        <Hero />
      </section>
      <CompanySlider />
      {/* Nội dung giữ nguyên max-width */}
      <setion className="w-[80%] max-md:w-full mx-auto px-4">
        <h2 className="text-2xl font-bold mt-6">Công ty nổi bật</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-4">
          <CompanyCard name="Google" industry="Công nghệ" />
          <CompanyCard name="VNG" industry="Game" />
          <CompanyCard name="Shopee" industry="E-commerce" />
        </div>
      </setion>
      <ScrollToTop />
    </MainLayout>
  );
};

export default HomePage;
