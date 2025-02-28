import CompanyFilter from "@/components/CompanyFilter";
import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import CompanyCard from "@/components/CompanyCard";

const companiesData = [
  { id: "google", name: "Google", industry: "Công nghệ", location: "Hà Nội" },
  {
    id: "shopee",
    name: "Shopee",
    industry: "E-commerce",
    location: "Hồ Chí Minh",
  },
  { id: "vng", name: "VNG", industry: "Game", location: "Hà Nội" },
];

const CompaniesPage = () => {
  const [filteredCompanies, setFilteredCompanies] = useState(companiesData);

  const handleFilterChange = (filters) => {
    let filtered = companiesData.filter(
      (company) =>
        company.name.toLowerCase().includes(filters.keyword.toLowerCase()) &&
        (filters.industry ? company.industry === filters.industry : true) &&
        (filters.location ? company.location === filters.location : true)
    );
    setFilteredCompanies(filtered);
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Danh sách công ty</h1>
      <CompanyFilter onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-3 gap-4">
        {filteredCompanies.map((company) => (
          <CompanyCard key={company.id} {...company} />
        ))}
      </div>
    </MainLayout>
  );
};

export default CompaniesPage;
