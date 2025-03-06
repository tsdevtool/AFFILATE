import React from "react";
import { useParams } from "react-router-dom";
import {
  Building2,
  MapPin,
  Users,
  Star,
  Globe,
  Mail,
  Phone,
  Clock,
  Briefcase,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import MainLayout from "../layouts/MainLayout";

const scrollbarStyles = {
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#f1f1f1",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#cbd5e1",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#94a3b8",
  },
};

const CompanyDetail = () => {
  const { id } = useParams();

  // Mock data - trong thực tế sẽ fetch từ API
  const company = {
    id: 1,
    name: "Tech Solutions",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=TS",
    industry: "Công nghệ thông tin",
    location: "Hà Nội",
    size: "201-500 nhân viên",
    rating: 4.5,
    reviews: 128,
    website: "https://techsolutions.com",
    email: "contact@techsolutions.com",
    phone: "+84 123 456 789",
    foundedYear: 2010,
    description: `Tech Solutions là công ty công nghệ hàng đầu Việt Nam, chuyên cung cấp giải pháp phần mềm cho doanh nghiệp. 
    Chúng tôi tự hào là đối tác tin cậy của nhiều tập đoàn lớn trong và ngoài nước.
    
    Với đội ngũ nhân sự giàu kinh nghiệm và đam mê công nghệ, chúng tôi luôn nỗ lực mang đến những sản phẩm chất lượng cao và dịch vụ chuyên nghiệp.`,
    benefits: [
      "Chế độ bảo hiểm toàn diện",
      "Lương thưởng cạnh tranh",
      "Môi trường làm việc năng động",
      "Cơ hội đào tạo và phát triển",
      "Các hoạt động team building",
      "Chế độ nghỉ phép linh hoạt",
    ],
    openPositions: [
      {
        id: 1,
        title: "Senior Frontend Developer",
        type: "Full-time",
        experience: "3-5 năm",
        salary: "2000-3000 USD",
        skills: ["React", "TypeScript", "Tailwind CSS"],
        urgent: true,
      },
      {
        id: 2,
        title: "Backend Developer",
        type: "Full-time",
        experience: "2-4 năm",
        salary: "1500-2500 USD",
        skills: ["Node.js", "PostgreSQL", "Redis"],
        urgent: false,
      },
      {
        id: 3,
        title: "Product Manager",
        type: "Full-time",
        experience: "5+ năm",
        salary: "3000-4000 USD",
        skills: ["Agile", "Product Strategy", "User Research"],
        urgent: true,
      },
    ],
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-start gap-6">
              <img
                src={company.logo}
                alt={company.name}
                className="w-24 h-24 rounded-lg bg-gray-100"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {company.name}
                  </h1>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 text-lg font-medium text-gray-900">
                      {company.rating}
                    </span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-gray-600">
                      {company.reviews} đánh giá
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-4">
                  <div className="flex items-center text-gray-600">
                    <Building2 className="h-5 w-5 mr-2" />
                    {company.industry}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    {company.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    {company.size}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {company.benefits.slice(0, 3).map((benefit, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-cyan-50 text-cyan-700"
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Company Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Giới thiệu công ty
              </h2>
              <div className="prose max-w-none">
                {company.description.split("\n").map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Phúc lợi
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {company.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 rounded-lg bg-gray-50"
                  >
                    <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact & Jobs */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Thông tin liên hệ
              </h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Globe className="h-5 w-5 mr-3" />
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:underline"
                  >
                    {company.website}
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-3" />
                  <a
                    href={`mailto:${company.email}`}
                    className="text-cyan-600 hover:underline"
                  >
                    {company.email}
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>{company.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-3" />
                  <span>Thành lập năm {company.foundedYear}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Vị trí đang tuyển
                </h2>
                <span className="text-cyan-600">
                  {company.openPositions.length} vị trí
                </span>
              </div>
              <div
                className="space-y-4 max-h-[600px] overflow-auto"
                style={scrollbarStyles}
              >
                {company.openPositions.map((position) => (
                  <div
                    key={position.id}
                    className="group p-4 rounded-lg border border-gray-200 hover:border-cyan-500 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900 group-hover:text-cyan-600">
                          {position.title}
                        </h3>
                        <div className="mt-1 flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {position.type}
                          </span>
                          <span>{position.experience}</span>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-cyan-500" />
                    </div>
                    <div className="mt-3">
                      <div className="text-sm font-medium text-cyan-600">
                        {position.salary}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {position.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    {position.urgent && (
                      <span className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Tuyển gấp
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CompanyDetail;
