import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { ArrowLeft, Upload, Trash2, CheckCircle } from "lucide-react";

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Hà Nội",
    type: "Full-time",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
  },
  // ... other jobs
];

const JobApplyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobsData.find((j) => j.id === parseInt(id));

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    education: "",
    coverLetter: "",
  });

  const [resume, setResume] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "application/pdf" || file.type.startsWith("image/"))
    ) {
      setResume(file);
    } else {
      alert("Vui lòng tải lên file PDF hoặc hình ảnh");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Chuyển hướng đến trang xác nhận với thông tin đã điền
    navigate(`/jobs/${id}/apply/confirm`, {
      state: {
        formData,
        resume,
        job,
      },
    });
  };

  if (!job) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to={`/jobs/${id}`}
            className="inline-flex items-center text-cyan-100 hover:text-white"
          >
            <ArrowLeft size={20} className="mr-2" />
            Quay lại chi tiết việc làm
          </Link>
          <div className="mt-4 flex items-center gap-4">
            <img
              src={job.logo}
              alt={job.company}
              className="w-16 h-16 bg-white rounded-lg p-2 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">{job.title}</h1>
              <p className="text-cyan-100">
                {job.company} - {job.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Thông tin ứng tuyển
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Họ và tên
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kinh nghiệm làm việc
                </label>
                <select
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Chọn kinh nghiệm</option>
                  <option value="0">Chưa có kinh nghiệm</option>
                  <option value="1-2">1-2 năm</option>
                  <option value="2-5">2-5 năm</option>
                  <option value="5+">Trên 5 năm</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Học vấn
                </label>
                <input
                  type="text"
                  name="education"
                  required
                  value={formData.education}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Ví dụ: Cử nhân CNTT - Đại học ABC"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Thư xin việc
                </label>
                <textarea
                  name="coverLetter"
                  rows="4"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Giới thiệu bản thân và lý do bạn muốn ứng tuyển vị trí này"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tải lên CV
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    {resume ? (
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-gray-900">{resume.name}</span>
                        <button
                          type="button"
                          onClick={() => setResume(null)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    ) : (
                      <>
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md font-medium text-cyan-600 hover:text-cyan-500"
                          >
                            <span>Tải lên CV của bạn</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              accept=".pdf,image/*"
                              onChange={handleFileChange}
                              required
                            />
                          </label>
                          <p className="pl-1">hoặc kéo thả vào đây</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PDF hoặc hình ảnh
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Link
                to={`/jobs/${id}`}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
              >
                Hủy
              </Link>
              <button
                type="submit"
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium"
              >
                Gửi hồ sơ ứng tuyển
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default JobApplyPage;
