import JobCard from "@/components/JobCard";
import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const companiesData = {
  google: {
    name: "Google",
    industry: "Công nghệ",
    location: "Hà Nội",
    description: "Google là công ty công nghệ hàng đầu thế giới.",
  },
  shopee: {
    name: "Shopee",
    industry: "E-commerce",
    location: "Hồ Chí Minh",
    description: "Shopee là sàn thương mại điện tử lớn nhất Đông Nam Á.",
  },
  vng: {
    name: "VNG",
    industry: "Game",
    location: "Hà Nội",
    description: "VNG là công ty công nghệ và game hàng đầu Việt Nam.",
  },
};

const jobsData = {
  google: [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Hà Nội",
      salary: "20 triệu",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Google",
      location: "Hà Nội",
      salary: "25 triệu",
    },
  ],
  shopee: [
    {
      id: 3,
      title: "Product Manager",
      company: "Shopee",
      location: "Hồ Chí Minh",
      salary: "30 triệu",
    },
  ],
  vng: [
    {
      id: 4,
      title: "Game Developer",
      company: "VNG",
      location: "Hà Nội",
      salary: "22 triệu",
    },
  ],
};
const CompanyDetail = () => {
  const { id } = useParams();
  const company = companiesData[id];
  const jobs = jobsData[id] || [];

  if (!company) {
    return (
      <MainLayout>
        <h1 className="text-3xl font-bold">Công ty không tồn tại!</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">{company.name}</h1>
      <p className="text-gray-600">
        {company.industry} - {company.location}
      </p>
      <p className="mt-4">{company.description}</p>

      <h2 className="text-2xl font-bold mt-6">Việc làm tại {company.name}</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} {...job} />)
        ) : (
          <p>Hiện tại chưa có việc làm.</p>
        )}
      </div>
    </MainLayout>
  );
};

export default CompanyDetail;
