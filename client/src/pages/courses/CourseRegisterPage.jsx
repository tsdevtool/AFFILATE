import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import {
  Clock,
  Users,
  Star,
  Crown,
  BookOpen,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const CourseRegisterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("pending"); // pending, processing, success, failed
  const [enrollmentStatus, setEnrollmentStatus] = useState(null); // null, enrolled, not_enrolled

  // Giả lập kiểm tra trạng thái đăng ký
  useEffect(() => {
    const checkEnrollmentStatus = async () => {
      // Giả lập API call - sau này sẽ gọi API thật
      const enrolled = localStorage.getItem(`enrolled_${id}`);
      setEnrollmentStatus(enrolled ? "enrolled" : "not_enrolled");
    };
    checkEnrollmentStatus();
  }, [id]);

  // Giả lập dữ liệu khóa học - sau này sẽ lấy từ API
  const course = {
    id: 1,
    title: "Web Development Fundamentals",
    instructor: "John Doe",
    description: `Khóa học này sẽ giúp bạn:
    • Nắm vững kiến thức nền tảng về HTML, CSS và JavaScript
    • Xây dựng được các trang web responsive
    • Hiểu và áp dụng các best practices trong phát triển web
    • Thực hành với nhiều dự án thực tế
    • Được hỗ trợ 24/7 từ giảng viên`,
    level: "Beginner",
    duration: "8 weeks",
    students: 1234,
    rating: 4.8,
    price: 299000,
    isPro: true,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    totalLessons: 48,
    totalHours: 32,
    requirements: [
      "Không yêu cầu kiến thức lập trình",
      "Máy tính có kết nối internet",
      "Tinh thần học tập nghiêm túc",
    ],
    whatYouWillLearn: [
      "Nền tảng HTML, CSS, JavaScript",
      "Responsive Web Design",
      "DOM Manipulation",
      "Web APIs và AJAX",
      "Git cơ bản",
      "Deploy website",
    ],
  };

  const handleStartCourse = async () => {
    setIsProcessing(true);

    if (course.price === 0) {
      // Khóa học miễn phí - đăng ký ngay
      try {
        // Giả lập API call để đăng ký khóa học
        await new Promise((resolve) => setTimeout(resolve, 1000));
        localStorage.setItem(`enrolled_${id}`, "true");
        setShowSuccessModal(true);
      } catch (error) {
        console.error("Enrollment failed:", error);
      } finally {
        setIsProcessing(false);
      }
    } else {
      // Khóa học tính phí - chuyển đến trang thanh toán
      setIsProcessing(false);
      navigate(`/courses/${id}/payment`);
    }
  };

  const handleSuccessConfirm = () => {
    navigate(`/courses/${id}/learn`);
  };

  // Nếu đã đăng ký khóa học, chuyển hướng đến trang học
  if (enrollmentStatus === "enrolled") {
    return (
      <MainLayout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Bạn đã đăng ký khóa học này
            </h2>
            <p className="text-gray-600 mb-6">
              Bạn có thể tiếp tục học hoặc xem lại các khóa học đã đăng ký
            </p>
            <div className="space-y-3">
              <button
                onClick={() => navigate(`/courses/${id}/learn`)}
                className="w-full py-3 px-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Tiếp tục học
              </button>
              <button
                onClick={() => navigate("/my-courses")}
                className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Xem khóa học của tôi
              </button>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-cyan-100 mb-4">
                Giảng viên: {course.instructor}
              </p>
              <div className="flex items-center space-x-4 text-white">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-1" />
                  <span>{course.students} học viên</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-1" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full md:w-96"
            >
              <div className="bg-white rounded-xl shadow-lg p-6">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {course.price === 0
                      ? "Miễn phí"
                      : new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(course.price)}
                  </span>
                  {course.isPro && (
                    <div className="flex items-center bg-black/10 px-3 py-1 rounded-full">
                      <Crown className="w-5 h-5 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">Pro</span>
                    </div>
                  )}
                </div>
                <button
                  onClick={handleStartCourse}
                  disabled={isProcessing}
                  className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors flex items-center justify-center ${
                    isProcessing
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-cyan-600 hover:bg-cyan-700"
                  }`}
                >
                  {isProcessing && (
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  )}
                  {isProcessing
                    ? "Đang xử lý..."
                    : course.price === 0
                    ? "Bắt đầu học ngay"
                    : "Đăng ký khóa học"}
                </button>
                <div className="mt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    <span>{course.totalLessons} bài học</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{course.totalHours} giờ học</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Học mọi lúc, mọi nơi</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Giấy chứng nhận hoàn thành</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {/* Mô tả khóa học */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Mô tả khóa học
              </h2>
              <div className="prose max-w-none">
                {course.description.split("\n").map((line, index) => (
                  <p key={index} className="mb-2">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Bạn sẽ học được gì */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Bạn sẽ học được gì
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Yêu cầu */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Yêu cầu</h2>
              <div className="space-y-3">
                {course.requirements.map((req, index) => (
                  <div key={index} className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-cyan-600 mr-2 flex-shrink-0" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar content if needed */}
          <div className="space-y-6">
            {/* Additional content can be added here */}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 max-w-md mx-4"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {course.price === 0
                  ? "Bắt đầu học ngay!"
                  : "Đăng ký thành công!"}
              </h3>
              <p className="text-gray-600 mb-6">
                {course.price === 0
                  ? "Bạn đã có thể truy cập toàn bộ nội dung khóa học."
                  : "Cảm ơn bạn đã đăng ký khóa học. Bạn đã có thể bắt đầu học ngay bây giờ."}
              </p>
              <div className="space-y-3">
                <button
                  onClick={handleSuccessConfirm}
                  className="w-full py-3 px-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                >
                  Bắt đầu học
                </button>
                <button
                  onClick={() => navigate("/my-courses")}
                  className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Xem khóa học của tôi
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </MainLayout>
  );
};

export default CourseRegisterPage;
