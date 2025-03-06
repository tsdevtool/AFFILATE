import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import {
  Building,
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  HourglassIcon,
  ChevronDown,
  ExternalLink,
  Search,
  Filter,
} from "lucide-react";

// Giả lập dữ liệu ứng tuyển (trong thực tế sẽ lấy từ API)
const applications = [
  {
    id: 1,
    job: {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
      location: "Hà Nội",
      type: "Full-time",
    },
    appliedDate: "2024-03-10",
    status: "pending", // pending, accepted, rejected
    lastUpdate: "2024-03-10",
    interview: {
      scheduled: true,
      date: "2024-03-15",
      time: "14:00",
      type: "Online",
      link: "https://meet.google.com",
    },
  },
  {
    id: 2,
    job: {
      id: 2,
      title: "Digital Marketing",
      company: "TikTok",
      logo: "https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png",
      location: "Hồ Chí Minh",
      type: "Full-time",
    },
    appliedDate: "2024-03-08",
    status: "accepted",
    lastUpdate: "2024-03-09",
    interview: {
      scheduled: false,
    },
  },
  {
    id: 3,
    job: {
      id: 3,
      title: "Content Creator",
      company: "Facebook",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
      location: "Đà Nẵng",
      type: "Part-time",
    },
    appliedDate: "2024-03-05",
    status: "rejected",
    lastUpdate: "2024-03-07",
    interview: {
      scheduled: false,
    },
  },
];

const ApplicationCard = ({ application }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "accepted":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "pending":
        return "Đang xử lý";
      case "accepted":
        return "Đã chấp nhận";
      case "rejected":
        return "Đã từ chối";
      default:
        return "Không xác định";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <HourglassIcon size={16} className="mr-1" />;
      case "accepted":
        return <CheckCircle2 size={16} className="mr-1" />;
      case "rejected":
        return <XCircle size={16} className="mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
            <img
              src={application.job.logo}
              alt={application.job.company}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <Link
                  to={`/jobs/${application.job.id}`}
                  className="text-xl font-bold text-gray-900 hover:text-cyan-600"
                >
                  {application.job.title}
                </Link>
                <div className="flex items-center mt-1">
                  <Building size={16} className="text-gray-400 mr-1" />
                  <span className="text-gray-600">
                    {application.job.company}
                  </span>
                </div>
              </div>
              <span
                className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                  application.status
                )}`}
              >
                {getStatusIcon(application.status)}
                {getStatusText(application.status)}
              </span>
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                Ngày ứng tuyển:{" "}
                {new Date(application.appliedDate).toLocaleDateString("vi-VN")}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                Cập nhật:{" "}
                {new Date(application.lastUpdate).toLocaleDateString("vi-VN")}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center text-sm text-cyan-600 hover:text-cyan-700"
        >
          {isExpanded ? "Thu gọn" : "Xem thêm"}
          <ChevronDown
            size={16}
            className={`ml-1 transform transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            {application.interview.scheduled ? (
              <div className="bg-cyan-50 rounded-lg p-4">
                <h4 className="font-medium text-cyan-900 mb-2">
                  Thông tin phỏng vấn
                </h4>
                <div className="space-y-2 text-sm text-cyan-800">
                  <p>
                    Thời gian:{" "}
                    {new Date(application.interview.date).toLocaleDateString(
                      "vi-VN"
                    )}{" "}
                    {application.interview.time}
                  </p>
                  <p>Hình thức: {application.interview.type}</p>
                  {application.interview.link && (
                    <a
                      href={application.interview.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-600 hover:text-cyan-700"
                    >
                      Tham gia phỏng vấn
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">
                Chưa có thông tin phỏng vấn
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const MyApplicationsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-white">
            Hồ sơ ứng tuyển của tôi
          </h1>
          <p className="mt-2 text-cyan-100">
            Theo dõi và quản lý các công việc bạn đã ứng tuyển
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="mb-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên công việc hoặc công ty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="pending">Đang xử lý</option>
              <option value="accepted">Đã chấp nhận</option>
              <option value="rejected">Đã từ chối</option>
            </select>
          </div>
        </div>

        {/* Applications List */}
        <div className="space-y-4">
          {filteredApplications.length > 0 ? (
            filteredApplications.map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <div className="text-gray-500">
                {searchTerm || statusFilter !== "all" ? (
                  <>
                    <p className="text-lg font-medium">
                      Không tìm thấy kết quả
                    </p>
                    <p className="mt-1">
                      Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-lg font-medium">
                      Bạn chưa có hồ sơ ứng tuyển nào
                    </p>
                    <Link
                      to="/jobs"
                      className="mt-4 inline-flex items-center text-cyan-600 hover:text-cyan-700"
                    >
                      Tìm kiếm việc làm ngay
                      <ExternalLink size={16} className="ml-1" />
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default MyApplicationsPage;
