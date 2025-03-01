import CompanyFilter from "@/components/CompanyFilter";
import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import CompanyCard from "@/components/CompanyCard";

export const companiesData = [
  {
    id: "google",
    name: "Google",
    industry: "Công nghệ",
    location: "Hà Nội",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    category: "technology",
    description:
      "Google là công ty hàng đầu về tìm kiếm, trí tuệ nhân tạo và công nghệ đám mây.",
  },
  {
    id: "apple",
    name: "Apple",
    industry: "Công nghệ",
    location: "TP.HCM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    category: "technology",
    description: "Apple nổi tiếng với iPhone, MacBook và hệ sinh thái iOS.",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    industry: "Công nghệ",
    location: "Đà Nẵng",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    category: "technology",
    description:
      "Microsoft là công ty phần mềm với hệ điều hành Windows, Office và dịch vụ đám mây Azure.",
  },
  {
    id: "amazon",
    name: "Amazon",
    industry: "Thương mại điện tử",
    location: "Hà Nội",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    category: "business",
    description: "Amazon là nền tảng thương mại điện tử lớn nhất thế giới.",
  },
  {
    id: "alibaba",
    name: "Alibaba",
    industry: "Thương mại điện tử",
    location: "TP.HCM",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Alibaba-Group-Logo.svg/1920px-Alibaba-Group-Logo.svg.png",
    category: "business",
    description:
      "Alibaba cung cấp nền tảng mua sắm trực tuyến hàng đầu tại Trung Quốc và thế giới.",
  },
  {
    id: "shopee",
    name: "Shopee",
    industry: "E-commerce",
    location: "Đà Nẵng",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/300px-Shopee.svg.png",
    category: "business",
    description: "Shopee là sàn thương mại điện tử phổ biến tại Đông Nam Á.",
  },
  {
    id: "adobe",
    name: "Adobe",
    industry: "Thiết kế đồ họa",
    location: "Hà Nội",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Adobe_Corporate_wordmark.svg/1920px-Adobe_Corporate_wordmark.svg.png",
    category: "design",
    description:
      "Adobe cung cấp phần mềm thiết kế như Photoshop, Illustrator, Premiere Pro.",
  },
  {
    id: "canva",
    name: "Canva",
    industry: "Thiết kế trực tuyến",
    location: "TP.HCM",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Canva_Logo.svg/1920px-Canva_Logo.svg.png",
    category: "design",
    description:
      "Canva là nền tảng thiết kế trực tuyến thân thiện với người dùng.",
  },
  {
    id: "pfizer",
    name: "Pfizer",
    industry: "Dược phẩm",
    location: "Hà Nội",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Pfizer_%282021%29.svg/1920px-Pfizer_%282021%29.svg.png",
    category: "healthcare",
    description:
      "Pfizer là tập đoàn dược phẩm nổi bật với vaccine và thuốc chữa bệnh.",
  },
  {
    id: "johnson",
    name: "Johnson & Johnson",
    industry: "Chăm sóc sức khỏe",
    location: "TP.HCM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/JNJ_Logo_New.svg/1920px-JNJ_Logo_New.svg.png",
    category: "healthcare",
    description:
      "Johnson & Johnson chuyên về dược phẩm và sản phẩm chăm sóc sức khỏe.",
  },
  {
    id: "coursera",
    name: "Coursera",
    industry: "Đào tạo trực tuyến",
    location: "Hà Nội",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Coursera_logo_%282020%29.svg/1920px-Coursera_logo_%282020%29.svg.png",
    category: "education",
    description:
      "Coursera là nền tảng học trực tuyến từ các trường đại học danh tiếng.",
  },
  {
    id: "udemy",
    name: "Udemy",
    industry: "E-learning",
    location: "TP.HCM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
    category: "education",
    description:
      "Udemy cung cấp hàng ngàn khóa học trực tuyến cho nhiều lĩnh vực khác nhau.",
  },
  {
    id: "tesla",
    name: "Tesla",
    industry: "Ô tô điện",
    location: "Hà Nội",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    category: "automotive",
    description:
      "Tesla dẫn đầu trong ngành sản xuất ô tô điện và năng lượng tái tạo.",
  },
  {
    id: "toyota",
    name: "Toyota",
    industry: "Ô tô",
    location: "TP.HCM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Toyota.svg/1920px-Toyota.svg.png",
    category: "automotive",
    description:
      "Toyota là một trong những nhà sản xuất ô tô lớn nhất thế giới.",
  },
  {
    id: "samsung",
    name: "Samsung",
    industry: "Điện tử",
    location: "Đà Nẵng",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    category: "technology",
    description:
      "Samsung sản xuất điện thoại, TV, và nhiều thiết bị công nghệ khác.",
  },
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
      <div className="w-[80%] max-md:w-full mx-auto px-4">
        <h1 className="text-3xl font-bold">Danh sách công ty</h1>
        <CompanyFilter onFilterChange={handleFilterChange} />
        <div className="grid grid-cols-3 gap-4">
          {filteredCompanies.map((company) => (
            <CompanyCard key={company.id} {...company} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default CompaniesPage;
