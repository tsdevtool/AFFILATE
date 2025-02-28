import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "@/components/Hero";
import CompanyCard from "@/components/CompanyCard";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <h2 className="text-2xl font-bold mt-6">Công ty nổi bật</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <CompanyCard name="Google" industry="Công nghệ" />
        <CompanyCard name="VNG" industry="Game" />
        <CompanyCard name="Shopee" industry="E-commerce" />
      </div>
    </MainLayout>
  );
};

export default HomePage;
