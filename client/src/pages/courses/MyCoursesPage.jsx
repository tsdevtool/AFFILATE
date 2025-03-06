import React from "react";
import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { BookOpen, Clock, Crown, Star, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MyCoursesPage = () => {
  const navigate = useNavigate();

  // Giả lập dữ liệu khóa học đã đăng ký - sau này sẽ lấy từ API
  const enrolledCourses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      instructor: "John Doe",
      progress: 35, // Phần trăm hoàn thành
      lastLesson: "CSS Flexbox",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      isPro: true,
      totalLessons: 48,
      completedLessons: 12,
    },
    {
      id: 2,
      title: "Python Programming for Beginners",
      instructor: "Emily Chen",
      progress: 80,
      lastLesson: "Functions and Methods",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
      isPro: false,
      totalLessons: 36,
      completedLessons: 29,
    },
  ];

  const handleContinueLearning = (courseId) => {
    navigate(`/courses/${courseId}/learn`);
  };

  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Khóa học của tôi
            </h1>
            <p className="text-xl text-cyan-100">
              Tiếp tục học tập và theo dõi tiến độ của bạn
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                {course.isPro && (
                  <div className="absolute top-4 left-4 bg-black/60 rounded-full p-2">
                    <Crown className="w-5 h-5 text-yellow-400" />
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.instructor}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Tiến độ: {course.progress}%</span>
                    <span>
                      {course.completedLessons}/{course.totalLessons} bài học
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-cyan-600 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>

                <div className="mb-4 p-3 bg-cyan-50 rounded-lg">
                  <p className="text-sm text-cyan-800">
                    <span className="font-medium">Bài học gần nhất:</span>{" "}
                    {course.lastLesson}
                  </p>
                </div>

                <button
                  onClick={() => handleContinueLearning(course.id)}
                  className="w-full py-2 px-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors flex items-center justify-center"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Tiếp tục học
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default MyCoursesPage;
