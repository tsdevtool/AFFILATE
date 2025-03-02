import React from "react";
import MainLayout from "../layouts/MainLayout";
import HeroCoursesSection from "../../components/Courses/HeroCoursesSection";
import CourseList from "@/components/Courses/CourseList";
const CoursesPage = () => {
  return (
    <MainLayout>
      <div className="w-screen overflow-hidden flex flex-col items-center p-3">
        <div className="lg:w-7xl w-full flex flex-col items-center gap-4">
          <HeroCoursesSection />
          <CourseList />
        </div>
      </div>
    </MainLayout>
  );
};

export default CoursesPage;
