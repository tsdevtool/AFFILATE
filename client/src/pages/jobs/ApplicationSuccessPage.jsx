import React from "react";
import { useLocation, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { CheckCircle, ExternalLink } from "lucide-react";

const ApplicationSuccessPage = () => {
  const location = useLocation();
  const { job } = location.state || {};

  if (!job) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Không tìm thấy thông tin
            </h2>
            <Link
              to="/jobs"
              className="mt-4 inline-flex items-center text-cyan-600 hover:text-cyan-800"
            >
              Quay lại trang việc làm
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-100 mb-8">
            <CheckCircle className="w-10 h-10 text-cyan-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Ứng tuyển thành công!
          </h1>

          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <img
                src={job.logo}
                alt={job.company}
                className="w-12 h-12 object-contain"
              />
              <div className="text-left">
                <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>
                <p className="text-gray-600">{job.company}</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                Chúng tôi đã nhận được hồ sơ ứng tuyển của bạn. Nhà tuyển dụng
                sẽ xem xét và phản hồi trong thời gian sớm nhất.
              </p>
              <p>
                Bạn có thể theo dõi trạng thái ứng tuyển trong mục "Hồ sơ ứng
                tuyển của tôi".
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <Link
              to="/my-applications"
              className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors"
            >
              Xem hồ sơ ứng tuyển
              <ExternalLink size={16} className="ml-2" />
            </Link>
            <Link
              to="/jobs"
              className="inline-flex items-center px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-medium transition-colors"
            >
              Tìm việc làm khác
            </Link>
          </div>

          <div className="mt-8 p-4 bg-cyan-50 rounded-lg">
            <h3 className="font-medium text-cyan-900 mb-2">Mẹo tìm việc</h3>
            <ul className="text-sm text-cyan-800 space-y-2">
              <li>• Cập nhật CV thường xuyên để tăng cơ hội được chọn</li>
              <li>
                • Theo dõi email thường xuyên để không bỏ lỡ cơ hội phỏng vấn
              </li>
              <li>
                • Tìm hiểu kỹ về công ty và vị trí ứng tuyển trước khi phỏng vấn
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ApplicationSuccessPage;
