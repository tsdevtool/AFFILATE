import React from "react";
import coursesData from "@/utils/coursesData";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import HeroCoursesSection from "./HeroCoursesSection";
import CourseCard from "@/components/CourseCard";
const CoursesPage = () => {
  return (
    <MainLayout>
      <div className="w-screen overflow-hidden flex flex-col items-center p-3">
        <div className="md:w-7xl w-full flex flex-col items-center gap-4">
          <HeroCoursesSection />
          <div className="w-full flex flex-col items-center gap-4  ">
            <div className="flex flex-col w-full shadow-xl shadow-gray-300 rounded-4xl px-12 py-6">
              <h1 className="text-3xl font-bold mb-3">Danh sách khóa học</h1>
              <div className="grid grid-cols-4 justify-center gap-4">
                {coursesData.map((course) => (
                  <CourseCard course={course} key={course.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CoursesPage;
