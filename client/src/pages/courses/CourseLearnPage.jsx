import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  MessageSquare,
  Star,
  ThumbsUp,
  ThumbsDown,
  Send,
  Lock,
  Share2,
  X,
  Download,
} from "lucide-react";

const CourseLearnPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeLesson, setActiveLesson] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showShareModal, setShowShareModal] = useState(false);

  // Kiểm tra trạng thái đăng ký
  useEffect(() => {
    const checkEnrollment = async () => {
      try {
        // Giả lập API call - sau này sẽ gọi API thật
        const enrolled = localStorage.getItem(`enrolled_${id}`);
        setIsEnrolled(Boolean(enrolled));
      } catch (error) {
        console.error("Failed to check enrollment:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkEnrollment();
  }, [id]);

  // Tạo URL chia sẻ
  const shareUrl = `${window.location.origin}/courses/${id}/register`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    shareUrl
  )}`;

  // Xử lý tải QR code
  const handleDownloadQR = () => {
    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = `course-${id}-qr.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Giả lập dữ liệu khóa học - sau này sẽ lấy từ API
  const course = {
    id: 1,
    title: "Web Development Fundamentals",
    instructor: "John Doe",
    chapters: [
      {
        id: 1,
        title: "Giới thiệu khóa học",
        lessons: [
          {
            id: 1,
            title: "Tổng quan về khóa học",
            duration: "05:30",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Giới thiệu về nội dung và mục tiêu của khóa học",
            materials: [
              {
                name: "Slides bài giảng",
                url: "#",
              },
              {
                name: "Tài liệu tham khảo",
                url: "#",
              },
            ],
          },
          {
            id: 2,
            title: "Cài đặt môi trường",
            duration: "10:15",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Hướng dẫn cài đặt các công cụ cần thiết",
            materials: [
              {
                name: "Hướng dẫn cài đặt",
                url: "#",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "HTML & CSS Cơ bản",
        lessons: [
          {
            id: 3,
            title: "HTML Tags cơ bản",
            duration: "15:20",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Tìm hiểu về các thẻ HTML cơ bản",
            materials: [
              {
                name: "Code demo",
                url: "#",
              },
            ],
          },
          {
            id: 4,
            title: "CSS Selectors",
            duration: "12:45",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Học về CSS Selectors và độ ưu tiên",
            materials: [
              {
                name: "Bài tập thực hành",
                url: "#",
              },
            ],
          },
        ],
      },
    ],
    comments: [
      {
        id: 1,
        user: "Alice",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
        content: "Khóa học rất hay và dễ hiểu!",
        rating: 5,
        timestamp: "2024-03-15T10:30:00",
        likes: 12,
        dislikes: 1,
      },
      {
        id: 2,
        user: "Bob",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
        content: "Giảng viên giảng dạy rất nhiệt tình",
        rating: 4,
        timestamp: "2024-03-14T15:45:00",
        likes: 8,
        dislikes: 0,
      },
    ],
  };

  const currentLesson = course.chapters
    .flatMap((chapter) => chapter.lessons)
    .find((_, index) => index === activeLesson);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi comment - sau này sẽ tích hợp với API
    console.log("New comment:", comment);
    setComment("");
  };

  if (isLoading) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-600"></div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-100">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar - Danh sách bài học */}
          <div className="lg:w-80 bg-white border-r border-gray-200 lg:h-screen lg:sticky lg:top-0 overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  {course.title}
                </h2>
                <button
                  onClick={() => setShowShareModal(true)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="Chia sẻ khóa học"
                >
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <p className="text-gray-600">Giảng viên: {course.instructor}</p>
            </div>

            <div className="p-4">
              {course.chapters.map((chapter, chapterIndex) => (
                <div key={chapter.id} className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-900">
                      {chapter.title}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </div>
                  <div className="space-y-1">
                    {chapter.lessons.map((lesson, lessonIndex) => {
                      const globalIndex =
                        course.chapters
                          .slice(0, chapterIndex)
                          .reduce((acc, ch) => acc + ch.lessons.length, 0) +
                        lessonIndex;

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => setActiveLesson(globalIndex)}
                          className={`w-full flex items-center p-2 rounded-lg text-left transition-colors ${
                            activeLesson === globalIndex
                              ? "bg-cyan-50 text-cyan-600"
                              : "hover:bg-gray-50 text-gray-600"
                          }`}
                        >
                          <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="font-medium">{lesson.title}</div>
                            <div className="text-sm text-gray-500">
                              {lesson.duration}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Video Player */}
            <div className="aspect-video bg-black">
              <iframe
                src={currentLesson.videoUrl}
                title={currentLesson.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>

            {/* Lesson Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentLesson.title}
                </h1>
                <p className="text-gray-600 mb-6">
                  {currentLesson.description}
                </p>

                {/* Tài liệu học tập */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Tài liệu học tập
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentLesson.materials.map((material, index) => (
                      <a
                        key={index}
                        href={material.url}
                        className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <BookOpen className="w-5 h-5 text-cyan-600 mr-3" />
                        <span className="text-gray-900">{material.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <button
                  onClick={() => setShowComments(!showComments)}
                  className="flex items-center justify-between w-full"
                >
                  <div className="flex items-center">
                    <MessageSquare className="w-5 h-5 text-gray-600 mr-2" />
                    <h2 className="text-xl font-semibold text-gray-900">
                      Bình luận và đánh giá
                    </h2>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transform transition-transform ${
                      showComments ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showComments && (
                  <div className="mt-6">
                    {/* Comment Form */}
                    <form onSubmit={handleCommentSubmit} className="mb-8">
                      <div className="flex items-start space-x-4">
                        <img
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=User"
                          alt="Your avatar"
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Viết bình luận của bạn..."
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            rows="3"
                          />
                          <div className="flex justify-end mt-2">
                            <button
                              type="submit"
                              className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors flex items-center"
                            >
                              <Send className="w-4 h-4 mr-2" />
                              Gửi bình luận
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>

                    {/* Comments List */}
                    <div className="space-y-6">
                      {course.comments.map((comment) => (
                        <div key={comment.id} className="flex space-x-4">
                          <img
                            src={comment.avatar}
                            alt={comment.user}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center mb-1">
                              <span className="font-medium text-gray-900 mr-2">
                                {comment.user}
                              </span>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < comment.rating
                                        ? "text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-600 mb-2">
                              {comment.content}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>
                                {new Date(
                                  comment.timestamp
                                ).toLocaleDateString()}
                              </span>
                              <button className="flex items-center hover:text-cyan-600">
                                <ThumbsUp className="w-4 h-4 mr-1" />
                                {comment.likes}
                              </button>
                              <button className="flex items-center hover:text-red-600">
                                <ThumbsDown className="w-4 h-4 mr-1" />
                                {comment.dislikes}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Chia sẻ khóa học
              </h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="text-center">
              <img
                src={qrCodeUrl}
                alt="QR Code"
                className="w-48 h-48 mx-auto mb-4"
              />
              <p className="text-sm text-gray-600 mb-4">
                Quét mã QR để truy cập khóa học
              </p>
              <div className="space-y-3">
                <button
                  onClick={handleDownloadQR}
                  className="w-full py-3 px-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Tải mã QR
                </button>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={shareUrl}
                    readOnly
                    className="flex-1 px-4 py-2 border rounded-lg bg-gray-50"
                  />
                  <button
                    onClick={() => navigator.clipboard.writeText(shareUrl)}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Sao chép
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default CourseLearnPage;
