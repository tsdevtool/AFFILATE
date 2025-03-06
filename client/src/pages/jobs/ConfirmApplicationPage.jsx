import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {
  ArrowLeft,
  Building,
  MapPin,
  Briefcase,
  Mail,
  Phone,
  GraduationCap,
  Clock,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const ConfirmApplicationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, resume, job } = location.state || {};

  if (!formData || !job) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 mb-6">
              <AlertCircle className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Không tìm thấy thông tin ứng tuyển
            </h2>
            <p className="text-gray-600 mb-6">
              Vui lòng quay lại trang ứng tuyển và điền đầy đủ thông tin.
            </p>
            <Link
              to="/jobs"
              className="text-cyan-600 hover:text-cyan-800 font-medium"
            >
              Quay lại trang việc làm
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  const handleConfirm = () => {
    // Trong thực tế, ở đây sẽ gửi dữ liệu lên server
    navigate(`/jobs/${job.id}/apply/success`, {
      state: { job },
    });
  };

  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to={`/jobs/${job.id}/apply`}
            className="inline-flex items-center text-cyan-100 hover:text-white"
          >
            <ArrowLeft size={20} className="mr-2" />
            Quay lại form ứng tuyển
          </Link>
          <h1 className="text-2xl font-bold text-white mt-4">
            Xác nhận thông tin ứng tuyển
          </h1>
          <p className="text-cyan-100 mt-2">
            Vui lòng kiểm tra lại thông tin trước khi gửi hồ sơ ứng tuyển
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Job Information */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
              <img
                src={job.logo}
                alt={job.company}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>
              <div className="mt-2 space-y-2">
                <div className="flex items-center text-gray-600">
                  <Building size={18} className="mr-2" />
                  {job.company}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin size={18} className="mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Briefcase size={18} className="mr-2" />
                  {job.type}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Information */}
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Thông tin cá nhân
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center text-gray-600">
                <CheckCircle size={18} className="mr-2 text-cyan-500" />
                <span className="font-medium">Họ và tên:</span>
                <span className="ml-2">{formData.fullName}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail size={18} className="mr-2 text-cyan-500" />
                <span className="font-medium">Email:</span>
                <span className="ml-2">{formData.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone size={18} className="mr-2 text-cyan-500" />
                <span className="font-medium">Số điện thoại:</span>
                <span className="ml-2">{formData.phone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock size={18} className="mr-2 text-cyan-500" />
                <span className="font-medium">Kinh nghiệm:</span>
                <span className="ml-2">{formData.experience} năm</span>
              </div>
              <div className="flex items-center text-gray-600 col-span-2">
                <GraduationCap size={18} className="mr-2 text-cyan-500" />
                <span className="font-medium">Học vấn:</span>
                <span className="ml-2">{formData.education}</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Thư xin việc
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 text-gray-600">
              {formData.coverLetter}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              CV đính kèm
            </h3>
            <div className="flex items-center gap-2 text-gray-600">
              <FileText size={18} className="text-cyan-500" />
              <span>{resume.name}</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
            <Link
              to={`/jobs/${job.id}/apply`}
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Chỉnh sửa thông tin
            </Link>
            <button
              onClick={handleConfirm}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors"
            >
              Xác nhận và gửi hồ sơ
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ConfirmApplicationPage;
