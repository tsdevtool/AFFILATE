import React from "react";
import coursesData from "@/utils/coursesData";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
const CoursesPage = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Danh sách khóa học</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {coursesData.map((course) => (
          <Link
            key={course.id}
            to={`/courses/${course.id}`}
            className="p-4 bg-white shadow rounded-lg"
          >
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
};

export default CoursesPage;
