import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {
  MapPin,
  Clock,
  Briefcase,
  DollarSign,
  Building,
  Calendar,
  GraduationCap,
  Users,
  CheckCircle,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

// Giả lập dữ liệu chi tiết công việc (trong thực tế sẽ lấy từ API)
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
    experience: "2-4 năm",
    education: "Đại học/Cao đẳng",
    benefits: [
      "Lương tháng 13, thưởng các ngày lễ",
      "Bảo hiểm sức khỏe cao cấp",
      "Chế độ nghỉ phép linh hoạt",
      "Môi trường làm việc quốc tế",
      "Cơ hội đào tạo và phát triển",
      "Các hoạt động team building",
    ],
    requirements: [
      "Thành thạo HTML, CSS, JavaScript",
      "Kinh nghiệm với React.js hoặc các framework tương tự",
      "Hiểu biết về RESTful APIs và GraphQL",
      "Kỹ năng tối ưu hóa hiệu suất website",
      "Khả năng làm việc nhóm tốt",
      "Tiếng Anh giao tiếp tốt",
    ],
    responsibilities: [
      "Phát triển và duy trì các ứng dụng web",
      "Tối ưu hóa ứng dụng cho hiệu suất tối đa",
      "Cộng tác với đội ngũ backend developers",
      "Viết code có khả năng tái sử dụng và dễ bảo trì",
      "Tham gia vào quá trình review code",
      "Nghiên cứu và áp dụng công nghệ mới",
    ],
    companyInfo: {
      about:
        "Google là công ty công nghệ hàng đầu thế giới, chuyên về các sản phẩm và dịch vụ liên quan đến Internet, phần mềm máy tính, và các công nghệ mới.",
      culture:
        "Văn hóa làm việc năng động, sáng tạo và cởi mở. Chúng tôi khuyến khích sự đổi mới và tư duy độc lập.",
      size: "150,000+ nhân viên",
      founded: "1998",
      industry: "Công nghệ thông tin",
      website: "https://google.com",
    },
  },
  // Thêm dữ liệu cho các công việc khác tương tự
];

const JobDetailPage = () => {
  const { id } = useParams();
  const job = jobsData.find((j) => j.id === parseInt(id));

  if (!job) {
    return (
      <MainLayout>
        <div className="max-w-7xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Không tìm thấy công việc
            </h2>
            <p className="mt-2 text-gray-600">
              Công việc bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
            </p>
            <Link
              to="/jobs"
              className="mt-4 inline-flex items-center text-cyan-600 hover:text-cyan-800"
            >
              <ArrowLeft size={20} className="mr-2" />
              Quay lại danh sách việc làm
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/jobs"
            className="inline-flex items-center text-cyan-100 hover:text-white mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Quay lại danh sách việc làm
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-white rounded-lg p-2 flex-shrink-0">
              <img
                src={job.logo}
                alt={job.company}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">
                {job.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-cyan-50">
                <div className="flex items-center">
                  <Building size={18} className="mr-2" />
                  {job.company}
                </div>
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <DollarSign size={18} className="mr-2" />
                  {job.salary}
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="mr-2" />
                  {job.posted}
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Link
                to={`/jobs/${id}/apply`}
                className="inline-block bg-white text-cyan-600 hover:bg-cyan-50 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Ứng tuyển ngay
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Mô tả công việc
              </h2>
              <p className="text-gray-600">{job.description}</p>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Yêu cầu công việc
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-cyan-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Trách nhiệm công việc
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-cyan-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-600">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Quyền lợi
              </h2>
              <ul className="space-y-3">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-cyan-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Job Overview */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Tổng quan
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-cyan-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Kinh nghiệm</p>
                    <p className="text-gray-900">{job.experience}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="w-5 h-5 text-cyan-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Học vấn</p>
                    <p className="text-gray-900">{job.education}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 text-cyan-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Loại công việc</p>
                    <p className="text-gray-900">{job.type}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Thông tin công ty
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">{job.companyInfo.about}</p>
                <div className="pt-4 space-y-3">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-cyan-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Quy mô</p>
                      <p className="text-gray-900">{job.companyInfo.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-cyan-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Thành lập</p>
                      <p className="text-gray-900">{job.companyInfo.founded}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-5 h-5 text-cyan-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Lĩnh vực</p>
                      <p className="text-gray-900">
                        {job.companyInfo.industry}
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href={job.companyInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-cyan-600 hover:text-cyan-800"
                >
                  Xem website công ty
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default JobDetailPage;
