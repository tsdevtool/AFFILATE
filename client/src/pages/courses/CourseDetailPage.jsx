import coursesData from "@/utils/coursesData";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const CourseDetailPage = () => {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === id);

  const [currentLesson, setCurrentLesson] = useState(course.lessons[0]);

  if (!course) {
    return <h1>Khóa học không tồn tại!</h1>;
  }

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <div className="grid grid-cols-4 gap-4 mt-6">
        {/* Video bên trái */}
        <div className="col-span-3">
          <iframe
            className="w-full h-64"
            src={currentLesson.videoUrl}
            title={currentLesson.title}
            allowFullScreen
          ></iframe>
          {/* Nội dung chi tiết bên dưới video */}
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">{currentLesson.title}</h2>
            <p className="text-gray-600">Mô tả bài học...</p>
          </div>
        </div>

        {/* Menu danh sách bài học bên phải */}
        <div className="col-span-1 bg-white shadow p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Bài học</h2>
          <ul>
            {course.lessons.map((lesson) => (
              <li key={lesson.id}>
                <button
                  className={`text-blue-500 ${
                    lesson.id === currentLesson.id ? "font-bold" : ""
                  }`}
                  onClick={() => setCurrentLesson(lesson)}
                >
                  {lesson.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default CourseDetailPage;
