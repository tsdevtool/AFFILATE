import coursesData from "@/utils/coursesData";
import React from "react";
import CourseCard from "./CourseCard";

const CourseList = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4  ">
      <div className="flex flex-col w-full shadow-xl shadow-gray-300 rounded-4xl px-12 py-6">
        <h1 className="text-3xl font-bold mb-3">Danh sách khóa học</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-4">
          {coursesData.map((course) => (
            <CourseCard course={course} key={course.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
