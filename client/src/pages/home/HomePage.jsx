import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "@/components/Hero";

import ScrollToTop from "@/components/ScrollToTop";
import CompanySlider from "@/components/Companies/CompanySlider";
import CompanyCard from "@/components/Companies/CompanyCard";
import CourseList from "@/components/Courses/CourseList";
const HomePage = () => {
  return (
    <MainLayout>
      {/* Hero Full Screen */}
      <section id="hero" className="w-full lg:h-screen">
        <Hero />
      </section>
      <CompanySlider />

      <section className="w-[80%] max-md:w-full mx-auto px-4 mt-6">
        <CourseList />
      </section>

      <ScrollToTop />
    </MainLayout>
  );
};

export default HomePage;
