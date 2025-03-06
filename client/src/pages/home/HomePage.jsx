import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Hero from "@/components/Hero";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BookOpen,
  Briefcase,
  Users,
  Award,
  Star,
  ChevronRight,
} from "lucide-react";

import ScrollToTop from "@/components/ScrollToTop";
import CompanyCard from "@/components/Companies/CompanyCard";
import CourseList from "@/components/Courses/CourseList";
import CompanySlider from "@/components/Companies/CompanySlider";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <CompanySlider />

      {/* Giới thiệu về nền tảng */}
      <section className="py-20 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nền tảng kết nối sinh viên với cơ hội nghề nghiệp
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi cung cấp các khóa học chất lượng cao và cơ hội thực tập
              tại các công ty hàng đầu, giúp sinh viên phát triển sự nghiệp ngay
              từ khi còn ngồi trên ghế nhà trường.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Khóa học chất lượng",
                description: "Được thiết kế bởi chuyên gia trong ngành",
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Cơ hội thực tập",
                description: "Tại các công ty công nghệ hàng đầu",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Cộng đồng học tập",
                description: "Kết nối với các chuyên gia và đồng nghiệp",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 text-cyan-600 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Khóa học nổi bật */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Khóa học nổi bật
            </h2>
            <p className="text-xl text-gray-600">
              Những khóa học được yêu thích nhất
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
                title: "Web Development",
                rating: "4.9",
                students: "1,234",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
                title: "Mobile App Development",
                rating: "4.8",
                students: "987",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
                title: "Data Science",
                rating: "4.7",
                students: "756",
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span>{course.rating}</span>
                    </div>
                    <div>{course.students} học viên</div>
                  </div>
                  <Link
                    to="/courses"
                    className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium"
                  >
                    Xem chi tiết
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/courses"
              className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors"
            >
              Xem tất cả khóa học
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Cơ hội thực tập */}
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cơ hội thực tập tại các công ty hàng đầu
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Chúng tôi hợp tác với các công ty công nghệ hàng đầu để mang đến
                cho sinh viên cơ hội thực tập và làm việc trong môi trường
                chuyên nghiệp.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Được mentoring bởi các chuyên gia",
                  "Tham gia các dự án thực tế",
                  "Cơ hội được tuyển dụng chính thức",
                  "Phát triển kỹ năng mềm và chuyên môn",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center text-gray-700"
                  >
                    <Award className="w-5 h-5 text-cyan-600 mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <Link
                to="/jobs"
                className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors"
              >
                Tìm cơ hội thực tập
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Internship"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
                <div className="text-2xl font-bold text-cyan-600 mb-1">
                  500+
                </div>
                <div className="text-gray-600">Vị trí thực tập</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                <div className="text-2xl font-bold text-cyan-600 mb-1">50+</div>
                <div className="text-gray-600">Công ty đối tác</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Đánh giá từ sinh viên và đối tác */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Đánh giá từ sinh viên và đối tác
            </h2>
            <p className="text-xl text-gray-600">
              Những chia sẻ từ người đã trải nghiệm
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                type: "student",
                name: "Nguyễn Văn A",
                role: "Web Developer Intern tại Google",
                avatar:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                content:
                  "Khóa học và cơ hội thực tập đã giúp tôi phát triển kỹ năng và tìm được công việc mơ ước.",
              },
              {
                type: "partner",
                name: "Trần Thị B",
                role: "HR Manager tại Microsoft",
                avatar:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                content:
                  "Chúng tôi đã tìm được nhiều nhân tài thông qua nền tảng này. Sinh viên được đào tạo rất tốt.",
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {review.name}
                    </h3>
                    <p className="text-cyan-600">{review.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{review.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-6">
              Sẵn sàng cho tương lai nghề nghiệp của bạn?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Đăng ký ngay để khám phá các khóa học và cơ hội thực tập hấp dẫn
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/register"
                className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-medium hover:bg-cyan-50 transition-colors"
              >
                Đăng ký ngay
              </Link>
              <Link
                to="/courses"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Xem khóa học
              </Link>
              <Link
                to="/jobs"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Tìm việc thực tập
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
    </MainLayout>
  );
};

export default HomePage;
