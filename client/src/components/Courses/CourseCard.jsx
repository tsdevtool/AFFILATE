import { Crown } from "lucide-react";
import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-4 transform hover:scale-105 transition-all duration-300 flex flex-col h-full">
      <a
        href={`/courses/${course.id}`}
        className="block relative overflow-hidden rounded-xl"
      >
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-40 object-cover rounded-xl"
        />
        {course.isPro && (
          <>
            <div className="absolute top-3 left-3 bg-gray-800/60 rounded-full p-1">
              <Crown color="#e8ae30" strokeWidth={3} />
            </div>
          </>
        )}
      </a>
      <div className="mt-3 flex flex-col flex-grow">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            <a href={`/courses/${course.id}`} className="hover:text-blue-600">
              {course.title}
            </a>
          </h3>
          <p className="text-gray-600 text-sm mt-1">{course.description}</p>
        </div>

        {/* Thêm flex-grow để đẩy phần này xuống dưới */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mt-3">
            {course.isPro ? (
              <span className="text-blue-500 font-bold">
                {course.price} VND
              </span>
            ) : (
              <span className="text-green-500 font-bold">Miễn phí</span>
            )}
          </div>
          <div className="flex items-center justify-between mt-2 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
              </svg>
              <span>4.8</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"></path>
              </svg>
              <span>{course.lessons.length} bài học</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
