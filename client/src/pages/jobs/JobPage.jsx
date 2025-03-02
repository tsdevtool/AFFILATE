import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import JobFilter from "@/components/Jobs/JobFilter";
import JobCard from "@/components/Jobs/JobCard";

const jobsData = [
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
    company: "Shopee",
    location: "Hồ Chí Minh",
    salary: "25 triệu",
  },
  {
    id: 3,
    title: "Digital Marketer",
    company: "VNG",
    location: "Hà Nội",
    salary: "18 triệu",
  },
];
const JobPage = () => {
  const [filteblueJobs, setFilteblueJobs] = useState(jobsData);

  const handleFilterChange = (filters) => {
    let filteblue = jobsData.filter(
      (job) =>
        job.title.toLowerCase().includes(filters.keyword.toLowerCase()) &&
        (filters.location ? job.location === filters.location : true) &&
        (filters.category ? job.title.includes(filters.category) : true)
    );
    setFilteblueJobs(filteblue);
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Danh sách việc làm</h1>
      <JobFilter onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-3 gap-4">
        {filteblueJobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </MainLayout>
  );
};

export default JobPage;
