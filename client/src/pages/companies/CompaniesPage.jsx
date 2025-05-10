import CompanyFilter from "@/components/Companies/CompanyFilter";
import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import CompanyCard from "@/components/Companies/CompanyCard";

export const companiesData = [
  {
    id: "google",
    name: "Google",
    industry: "Công nghệ thông tin",
    location: "Hà Nội",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    category: "technology",
    description:
      "Google là công ty hàng đầu về tìm kiếm, trí tuệ nhân tạo và công nghệ đám mây.",
  },
  {
    id: "apple",
    name: "Apple",
    industry: "Công nghệ thông tin",
    location: "TP.HCM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    category: "technology",
    description: "Apple nổi tiếng với iPhone, MacBook và hệ sinh thái iOS.",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    industry: "Công nghệ thông tin",
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
    industry: "Thương mại điện tử",
    location: "Đà Nẵng",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/300px-Shopee.svg.png",
    category: "business",
    description: "Shopee là sàn thương mại điện tử phổ biến tại Đông Nam Á.",
  },
  {
    id: "adobe",
    name: "Adobe",
    industry: "Thiết kế đồ họa & Đa phương tiện",
    location: "Hà Nội",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Adobe_Corporate_wordmark.svg/1920px-Adobe_Corporate_wordmark.svg.png",
    category: "design",
    description:
      "Adobe cung cấp phần mềm thiết kế như Photoshop, Illustrator, Premiere Pro.",
  },
  {
    id: "canva",
    name: "Canva",
    industry: "Thiết kế đồ họa & Đa phương tiện",
    location: "TP.HCM",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Canva_Logo.svg/1920px-Canva_Logo.svg.png",
    category: "design",
    description:
      "Canva là nền tảng thiết kế trực tuyến thân thiện với người dùng.",
  },
  {
    id: "pfizer",
    name: "Pfizer",
    industry: "Dược phẩm & Công nghệ sinh học",
    location: "Hà Nội",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Pfizer_%282021%29.svg/1920px-Pfizer_%282021%29.svg.png",
    category: "healthcare",
    description:
      "Pfizer là tập đoàn dược phẩm nổi bật với vaccine và thuốc chữa bệnh.",
  },
  {
    id: "johnson",
    name: "Johnson & Johnson",
    industry: "Chăm sóc sức khỏe & Dược phẩm",
    location: "TP.HCM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/JNJ_Logo_New.svg/1920px-JNJ_Logo_New.svg.png",
    category: "healthcare",
    description:
      "Johnson & Johnson chuyên về dược phẩm và sản phẩm chăm sóc sức khỏe.",
  },
  {
    id: "coursera",
    name: "Coursera",
    industry: "Giáo dục & Đào tạo",
    location: "Hà Nội",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Coursera_logo_%282020%29.svg/1920px-Coursera_logo_%282020%29.svg.png",
    category: "education",
    description:
      "Coursera là nền tảng học trực tuyến từ các trường đại học danh tiếng.",
  },
  {
    id: "udemy",
    name: "Udemy",
    industry: "Giáo dục & Đào tạo",
    location: "TP.HCM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
    category: "education",
    description:
      "Udemy cung cấp hàng ngàn khóa học trực tuyến cho nhiều lĩnh vực khác nhau.",
  },
  {
    id: "tesla",
    name: "Tesla",
    industry: "Công nghiệp ô tô & Công nghệ sạch",
    location: "Hà Nội",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    category: "automotive",
    description:
      "Tesla dẫn đầu trong ngành sản xuất ô tô điện và năng lượng tái tạo.",
  },
  {
    id: "toyota",
    name: "Toyota",
    industry: "Công nghiệp ô tô",
    location: "TP.HCM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Toyota.svg/1920px-Toyota.svg.png",
    category: "automotive",
    description:
      "Toyota là một trong những nhà sản xuất ô tô lớn nhất thế giới.",
  },
  {
    id: "samsung",
    name: "Samsung",
    industry: "Công nghệ thông tin & Điện tử tiêu dùng",
    location: "Đà Nẵng",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    category: "technology",
    description:
      "Samsung sản xuất điện thoại, TV, và nhiều thiết bị công nghệ khác.",
  },
];

// Dữ liệu trường học
export const schoolsData = [
  {
    id: "hust",
    name: "Đại học Bách khoa Hà Nội",
    industry: "Giáo dục đại học",
    location: "Hà Nội",
    logo: "https://upload.wikimedia.org/wikipedia/vi/c/cd/Logo-hust.svg",
    category: "university",
    description: "Đại học kỹ thuật hàng đầu Việt Nam, thành lập từ năm 1956.",
  },
  {
    id: "neu",
    name: "Đại học Kinh tế Quốc dân",
    industry: "Giáo dục đại học",
    location: "Hà Nội",
    logo: "https://upload.wikimedia.org/wikipedia/vi/b/bf/Logo_NEU.svg",
    category: "university",
    description: "Trường đào tạo kinh tế, quản trị kinh doanh lớn nhất Việt Nam.",
  },
  {
    id: "hcmus",
    name: "ĐH Khoa học Tự nhiên TP.HCM",
    industry: "Giáo dục đại học",
    location: "TP.HCM",
    logo: "https://upload.wikimedia.org/wikipedia/vi/f/fd/Logo_HCMUS.svg",
    category: "university",
    description: "Trường đại học hàng đầu về khoa học cơ bản, thành viên ĐHQG TP.HCM.",
  },
  {
    id: "vnu",
    name: "Đại học Quốc gia Hà Nội",
    industry: "Giáo dục đại học",
    location: "Hà Nội",
    logo: "https://upload.wikimedia.org/wikipedia/vi/c/c4/Logo_Hanoi_VNU.jpg",
    category: "university",
    description: "Hệ thống đại học hàng đầu Việt Nam với nhiều trường thành viên uy tín.",
  },
  {
    id: "fpt",
    name: "Đại học FPT",
    industry: "Giáo dục đại học",
    location: "Hà Nội",
    logo: "https://upload.wikimedia.org/wikipedia/vi/1/1d/Logo_FPT_University.png",
    category: "university",
    description: "Trường đại học định hướng thực hành về công nghệ thông tin và kinh doanh.",
  },
  {
    id: "rmit",
    name: "Đại học RMIT Việt Nam",
    industry: "Giáo dục đại học",
    location: "TP.HCM",
    logo: "https://upload.wikimedia.org/wikipedia/vi/5/5b/Logo_RMIT_Vietnam.png",
    category: "university",
    description: "Đại học quốc tế với chương trình đào tạo chuẩn Úc.",
  },
];

const CompaniesPage = () => {
  const [filteredPartners, setFilteredPartners] = useState(companiesData);
  const [activeTab, setActiveTab] = useState("companies"); // "companies" hoặc "schools"

  const handleFilterChange = (filters) => {
    // Xác định nguồn dữ liệu dựa vào tab đang active
    const dataSource = activeTab === "companies" ? companiesData : schoolsData;
    
    let filtered = dataSource.filter(
      (partner) =>
        partner.name.toLowerCase().includes(filters.keyword.toLowerCase()) &&
        (filters.industry ? partner.industry === filters.industry : true) &&
        (filters.location ? partner.location === filters.location : true)
    );
    setFilteredPartners(filtered);
  };

  // Xử lý khi chuyển tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFilteredPartners(tab === "companies" ? companiesData : schoolsData);
  };

  return (
    <MainLayout>
      <div className="w-[80%] max-md:w-full mx-auto px-4">
        <h1 className="text-3xl font-bold text-center">Danh sách đối tác</h1>
        
        {/* Tab Navigation */}
        <div className="flex border-b mb-4 mt-6">
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === "companies" 
                ? "text-blue-600 border-b-2 border-blue-600" 
                : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={() => handleTabChange("companies")}
          >
            Công ty
          </button>
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === "schools" 
                ? "text-blue-600 border-b-2 border-blue-600" 
                : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={() => handleTabChange("schools")}
          >
            Trường học
          </button>
        </div>
        
        <CompanyFilter onFilterChange={handleFilterChange} />
        
        <div className="grid grid-cols-3 gap-4 mt-6">
          {filteredPartners.map((partner) => (
            <CompanyCard key={partner.id} {...partner} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default CompaniesPage;
