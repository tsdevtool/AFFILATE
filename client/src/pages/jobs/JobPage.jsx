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
    type: "Full-time",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
    description:
      "Phát triển giao diện người dùng cho các ứng dụng web sử dụng React, Angular hoặc Vue.",
    posted: "2 ngày trước",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Shopee",
    location: "Hồ Chí Minh",
    salary: "25 triệu",
    type: "Full-time",
    logo: "https://cdn.haitrieu.com/wp-content/uploads/2022/05/Logo-Shopee.png",
    description:
      "Xây dựng và duy trì các API, cơ sở dữ liệu và hệ thống backend cho ứng dụng thương mại điện tử.",
    posted: "3 ngày trước",
  },
  {
    id: 3,
    title: "Digital Marketer",
    company: "VNG",
    location: "Hà Nội",
    salary: "18 triệu",
    type: "Part-time",
    logo: "https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-VNG.png",
    description:
      "Lập kế hoạch và thực hiện các chiến dịch marketing số, quản lý mạng xã hội và phân tích dữ liệu.",
    posted: "1 tuần trước",
  },
  {
    id: 4,
    title: "Content Creator",
    company: "TikTok",
    location: "Hồ Chí Minh",
    salary: "15 triệu",
    type: "Freelance",
    logo: "https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png",
    description:
      "Sáng tạo nội dung hấp dẫn cho các nền tảng mạng xã hội, tập trung vào video ngắn và xu hướng mới.",
    posted: "5 ngày trước",
  },
  {
    id: 5,
    title: "Affiliate Marketing Specialist",
    company: "Lazada",
    location: "Đà Nẵng",
    salary: "22 triệu",
    type: "Full-time",
    logo: "https://cdn.haitrieu.com/wp-content/uploads/2022/05/Logo-Lazada.png",
    description:
      "Phát triển và quản lý chương trình tiếp thị liên kết, làm việc với các đối tác và tối ưu hóa hiệu suất chiến dịch.",
    posted: "Hôm nay",
  },
  {
    id: 6,
    title: "SEO Specialist",
    company: "FPT",
    location: "Hà Nội",
    salary: "17 triệu",
    type: "Full-time",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/FPT_logo_2010.svg/2560px-FPT_logo_2010.svg.png",
    description:
      "Tối ưu hóa website để cải thiện thứ hạng trên các công cụ tìm kiếm, phân tích từ khóa và xây dựng liên kết.",
    posted: "3 ngày trước",
  },
];

const JobPage = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  const handleFilterChange = (filters) => {
    let filtered = jobsData.filter(
      (job) =>
        job.title.toLowerCase().includes(filters.keyword.toLowerCase()) &&
        (filters.location ? job.location === filters.location : true) &&
        (filters.category ? job.title.includes(filters.category) : true) &&
        (filters.type ? job.type === filters.type : true)
    );
    setFilteredJobs(filtered);
  };

  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Khám Phá Cơ Hội Việc Làm
          </h1>
          <p className="text-cyan-100 text-center max-w-3xl mx-auto text-lg">
            Tìm kiếm công việc phù hợp với kỹ năng và đam mê của bạn trong lĩnh
            vực tiếp thị liên kết
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Bộ lọc tìm kiếm
              </h2>
              <JobFilter onFilterChange={handleFilterChange} />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {filteredJobs.length} việc làm phù hợp
              </h2>
              <div className="text-sm text-gray-500">
                Sắp xếp theo:
                <select className="ml-2 border border-gray-300 rounded p-1 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  <option>Mới nhất</option>
                  <option>Lương cao nhất</option>
                  <option>Phù hợp nhất</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => <JobCard key={job.id} {...job} />)
              ) : (
                <div className="col-span-full bg-cyan-50 p-8 rounded-lg text-center">
                  <p className="text-lg text-gray-600">
                    Không tìm thấy việc làm phù hợp với bộ lọc của bạn.
                  </p>
                  <button
                    className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md transition-colors"
                    onClick={() => setFilteredJobs(jobsData)}
                  >
                    Xóa bộ lọc
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default JobPage;
