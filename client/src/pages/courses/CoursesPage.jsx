import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";
import {
  Search,
  Sliders,
  ChevronDown,
  Star,
  Clock,
  Users,
  BookOpen,
  Crown,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Hero section data
const heroSlides = [
  {
    id: 1,
    title: "Mở bán khoá học Javascript Pro",
    description:
      "Từ 08/08/2024 khóa học sẽ có giá 1.399k. Khi khóa học hoàn thiện sẽ trở về giá gốc.",
    image:
      "https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png",
    atc: "Đăng ký ngay",
    bgGradient: "bg-gradient-to-r from-purple-700 to-pink-500",
  },
  {
    id: 2,
    title: "Học ReactJS Miễn Phí!",
    description:
      "Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.",
    image:
      "https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png",
    atc: "Đăng ký ngay",
    bgGradient: "bg-gradient-to-r from-blue-700 to-green-500",
  },
  {
    id: 3,
    title: "Mở bán khoá học TypeScript Pro",
    description:
      "Học TypeScript chuyên sâu, nâng cao kỹ năng lập trình Frontend chuyên nghiệp.",
    image:
      "https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png",
    atc: "Đăng ký ngay",
    bgGradient: "bg-gradient-to-r from-blue-700 to-yellow-500",
  },
];

const coursesData = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    instructor: "John Doe",
    level: "Beginner",
    duration: "8 weeks",
    students: 1234,
    rating: 4.8,
    category: "Web Development",
    price: 299000,
    isPro: true,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["HTML", "CSS", "JavaScript"],
    lessons: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: Web Development Basics`,
    })),
  },
  {
    id: 2,
    title: "Mobile App Development with React Native",
    instructor: "Jane Smith",
    level: "Intermediate",
    duration: "10 weeks",
    students: 856,
    rating: 4.9,
    category: "Mobile Development",
    price: 399000,
    isPro: true,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    tags: ["React Native", "JavaScript", "Mobile"],
    lessons: Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: React Native Development`,
    })),
  },
  {
    id: 3,
    title: "Data Science and Machine Learning",
    instructor: "David Wilson",
    level: "Advanced",
    duration: "12 weeks",
    students: 567,
    rating: 4.7,
    category: "Data Science",
    price: 0,
    isPro: false,
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
    tags: ["Python", "ML", "AI"],
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: Data Science Fundamentals`,
    })),
  },
  {
    id: 4,
    title: "UI/UX Design Masterclass",
    instructor: "Sarah Johnson",
    level: "Intermediate",
    duration: "8 weeks",
    students: 923,
    rating: 4.9,
    category: "UI/UX Design",
    price: 349000,
    isPro: true,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    tags: ["Figma", "UI Design", "UX Research"],
    lessons: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: Design Principles`,
    })),
  },
  {
    id: 5,
    title: "DevOps Engineering Essentials",
    instructor: "Michael Brown",
    level: "Advanced",
    duration: "10 weeks",
    students: 445,
    rating: 4.6,
    category: "DevOps",
    price: 499000,
    isPro: true,
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
    tags: ["Docker", "Kubernetes", "CI/CD"],
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: DevOps Practices`,
    })),
  },
  {
    id: 6,
    title: "Python Programming for Beginners",
    instructor: "Emily Chen",
    level: "Beginner",
    duration: "6 weeks",
    students: 2341,
    rating: 4.8,
    category: "Web Development",
    price: 0,
    isPro: false,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
    tags: ["Python", "Programming", "Basics"],
    lessons: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: Python Basics`,
    })),
  },
  {
    id: 7,
    title: "Advanced JavaScript Concepts",
    instructor: "Alex Turner",
    level: "Advanced",
    duration: "8 weeks",
    students: 678,
    rating: 4.9,
    category: "Web Development",
    price: 399000,
    isPro: true,
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a",
    tags: ["JavaScript", "ES6+", "Advanced"],
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: Advanced JS`,
    })),
  },
  {
    id: 8,
    title: "iOS App Development with Swift",
    instructor: "Lisa Wang",
    level: "Intermediate",
    duration: "12 weeks",
    students: 534,
    rating: 4.7,
    category: "Mobile Development",
    price: 449000,
    isPro: true,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    tags: ["Swift", "iOS", "Mobile"],
    lessons: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: Swift Development`,
    })),
  },
  {
    id: 9,
    title: "Blockchain Development",
    instructor: "James Wilson",
    level: "Advanced",
    duration: "10 weeks",
    students: 323,
    rating: 4.6,
    category: "Web Development",
    price: 599000,
    isPro: true,
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
    tags: ["Blockchain", "Smart Contracts", "Web3"],
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: Blockchain Basics`,
    })),
  },
  {
    id: 10,
    title: "Digital Marketing Fundamentals",
    instructor: "Rachel Green",
    level: "Beginner",
    duration: "6 weeks",
    students: 1567,
    rating: 4.8,
    category: "Marketing",
    price: 0,
    isPro: false,
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec",
    tags: ["Marketing", "SEO", "Social Media"],
    lessons: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: Marketing Basics`,
    })),
  },
  {
    id: 11,
    title: "Cloud Computing with AWS",
    instructor: "Tom Anderson",
    level: "Intermediate",
    duration: "10 weeks",
    students: 789,
    rating: 4.7,
    category: "DevOps",
    price: 449000,
    isPro: true,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    tags: ["AWS", "Cloud", "DevOps"],
    lessons: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: AWS Services`,
    })),
  },
  {
    id: 12,
    title: "Artificial Intelligence Basics",
    instructor: "Maria Garcia",
    level: "Intermediate",
    duration: "8 weeks",
    students: 456,
    rating: 4.6,
    category: "Data Science",
    price: 399000,
    isPro: true,
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
    tags: ["AI", "Machine Learning", "Python"],
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: AI Concepts`,
    })),
  },
  {
    id: 13,
    title: "Responsive Web Design",
    instructor: "Chris Lee",
    level: "Beginner",
    duration: "6 weeks",
    students: 1890,
    rating: 4.9,
    category: "Web Development",
    price: 0,
    isPro: false,
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8",
    tags: ["HTML", "CSS", "Responsive"],
    lessons: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: Responsive Design`,
    })),
  },
  {
    id: 14,
    title: "Game Development with Unity",
    instructor: "Mark Thompson",
    level: "Intermediate",
    duration: "12 weeks",
    students: 678,
    rating: 4.8,
    category: "Game Development",
    price: 499000,
    isPro: true,
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914",
    tags: ["Unity", "C#", "Game Design"],
    lessons: Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: Unity Development`,
    })),
  },
  {
    id: 15,
    title: "Cybersecurity Fundamentals",
    instructor: "Daniel Kim",
    level: "Beginner",
    duration: "8 weeks",
    students: 890,
    rating: 4.7,
    category: "Security",
    price: 349000,
    isPro: true,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    tags: ["Security", "Network", "Ethical Hacking"],
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: Security Basics`,
    })),
  },
  {
    id: 16,
    title: "Flutter Mobile Development",
    instructor: "Sophie Martin",
    level: "Intermediate",
    duration: "10 weeks",
    students: 567,
    rating: 4.8,
    category: "Mobile Development",
    price: 399000,
    isPro: true,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    tags: ["Flutter", "Dart", "Mobile"],
    lessons: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: Flutter Basics`,
    })),
  },
  {
    id: 17,
    title: "Node.js Backend Development",
    instructor: "Ryan Clark",
    level: "Advanced",
    duration: "10 weeks",
    students: 456,
    rating: 4.6,
    category: "Web Development",
    price: 449000,
    isPro: true,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    tags: ["Node.js", "Express", "MongoDB"],
    lessons: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: Backend Development`,
    })),
  },
  {
    id: 18,
    title: "SEO and Content Marketing",
    instructor: "Emma White",
    level: "Beginner",
    duration: "6 weeks",
    students: 1234,
    rating: 4.7,
    category: "Marketing",
    price: 0,
    isPro: false,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a",
    tags: ["SEO", "Content", "Marketing"],
    lessons: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: SEO Strategies`,
    })),
  },
  {
    id: 19,
    title: "Docker and Kubernetes",
    instructor: "Andrew Miller",
    level: "Advanced",
    duration: "8 weeks",
    students: 345,
    rating: 4.8,
    category: "DevOps",
    price: 499000,
    isPro: true,
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b",
    tags: ["Docker", "Kubernetes", "DevOps"],
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: Container Orchestration`,
    })),
  },
  {
    id: 20,
    title: "Vue.js Frontend Development",
    instructor: "Nina Rodriguez",
    level: "Intermediate",
    duration: "8 weeks",
    students: 678,
    rating: 4.9,
    category: "Web Development",
    price: 349000,
    isPro: true,
    image: "https://images.unsplash.com/photo-1537884944318-390069bb8665",
    tags: ["Vue.js", "JavaScript", "Frontend"],
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Lesson ${i + 1}: Vue.js Basics`,
    })),
  },
];

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Data Science",
  "UI/UX Design",
  "DevOps",
];

const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;
  const navigate = useNavigate();

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "All" || course.level === selectedLevel;
    const matchesPrice =
      course.price >= priceRange[0] && course.price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatPrice = (price) => {
    if (price === 0) return "Miễn phí";
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const handleViewCourse = (courseId) => {
    navigate(`/courses/${courseId}/register`);
  };

  return (
    <MainLayout>
      {/* Introduction Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Khám phá khoá học
            </h1>
            <p className="text-xl text-cyan-100">
              Nâng cao kỹ năng của bạn với các khóa học chất lượng cao
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-8">
          <div className="relative w-full h-[350px]">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
              <Button
                id="prevBtn"
                variant="ghost"
                className="p-2 rounded-full bg-white/20 w-12 h-12 hover:bg-gray-900/60 cursor-pointer"
              >
                <ChevronLeft className="size-6 text-white" />
              </Button>
            </div>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{ prevEl: "#prevBtn", nextEl: "#nextBtn" }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="w-full h-full rounded-4xl"
            >
              {heroSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div
                    className={`flex items-center w-full h-full py-20 px-24 shadow-lg ${slide.bgGradient}`}
                  >
                    <div className="flex-[2] text-white text-left pr-6">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                        {slide.title}
                      </h1>
                      <p className="mt-2 text-sm sm:text-lg">
                        {slide.description}
                      </p>
                      <button className="mt-4 px-6 py-2 text-white font-bold bg-transparent border border-white rounded-full hover:bg-white/10 transition-colors">
                        {slide.atc}
                      </button>
                    </div>

                    <div className="flex-[1] flex justify-center">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-auto rounded-lg object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
              <Button
                id="nextBtn"
                variant="ghost"
                className="p-2 rounded-full bg-white/20 w-12 h-12 cursor-pointer hover:bg-gray-900/60"
              >
                <ChevronRight className="size-6 text-white" />
              </Button>
            </div>
          </div>
        </div>

        {/* Search Box */}
        <div className="py-8">
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Tìm kiếm khóa học..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-full shadow-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Main Content */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-64 hidden md:block"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Bộ lọc
                  </h2>
                  <Filter className="text-gray-600" />
                </div>

                {/* Categories */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Danh mục
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? "bg-cyan-100 text-cyan-600"
                            : "hover:bg-gray-100 text-gray-600"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Levels */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Trình độ
                  </h3>
                  <div className="space-y-2">
                    {levels.map((level) => (
                      <button
                        key={level}
                        onClick={() => setSelectedLevel(level)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedLevel === level
                            ? "bg-cyan-100 text-cyan-600"
                            : "hover:bg-gray-100 text-gray-600"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Khoảng giá
                  </h3>
                  <div className="px-2">
                    <input
                      type="range"
                      min="0"
                      max="1000000"
                      step="100000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([0, parseInt(e.target.value)])
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>{formatPrice(0)}</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Filters - Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full px-4 py-3 bg-white rounded-lg shadow-md flex items-center justify-between"
              >
                <div className="flex items-center">
                  <Sliders className="w-5 h-5 text-gray-600 mr-2" />
                  <span className="text-gray-900 font-medium">Bộ lọc</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transform transition-transform ${
                    isFilterOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 bg-white rounded-xl shadow-lg p-6"
                  >
                    {/* Mobile Filters Content */}
                    <div className="space-y-6">
                      {/* Categories */}
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                          Danh mục
                        </h3>
                        <div className="space-y-2">
                          {categories.map((category) => (
                            <button
                              key={category}
                              onClick={() => setSelectedCategory(category)}
                              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                                selectedCategory === category
                                  ? "bg-cyan-100 text-cyan-600"
                                  : "hover:bg-gray-100 text-gray-600"
                              }`}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Levels */}
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                          Trình độ
                        </h3>
                        <div className="space-y-2">
                          {levels.map((level) => (
                            <button
                              key={level}
                              onClick={() => setSelectedLevel(level)}
                              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                                selectedLevel === level
                                  ? "bg-cyan-100 text-cyan-600"
                                  : "hover:bg-gray-100 text-gray-600"
                              }`}
                            >
                              {level}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Price Range */}
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                          Khoảng giá
                        </h3>
                        <div className="px-2">
                          <input
                            type="range"
                            min="0"
                            max="1000000"
                            step="100000"
                            value={priceRange[1]}
                            onChange={(e) =>
                              setPriceRange([0, parseInt(e.target.value)])
                            }
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                          />
                          <div className="flex justify-between mt-2 text-sm text-gray-600">
                            <span>{formatPrice(0)}</span>
                            <span>{formatPrice(priceRange[1])}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Course Grid */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {currentCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-medium text-cyan-600">
                        {course.level}
                      </div>
                      {course.isPro && (
                        <div className="absolute top-4 left-4 bg-black/60 rounded-full p-2">
                          <Crown className="w-5 h-5 text-yellow-400" />
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{course.instructor}</p>

                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span>{course.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{course.students}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{course.duration}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span
                          className={`text-lg font-bold ${
                            course.isPro ? "text-cyan-600" : "text-green-600"
                          }`}
                        >
                          {formatPrice(course.price)}
                        </span>
                        <button
                          onClick={() => handleViewCourse(course.id)}
                          className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                        >
                          Xem chi tiết
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {filteredCourses.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Không tìm thấy khóa học
                  </h3>
                  <p className="text-gray-600">
                    Thử thay đổi bộ lọc hoặc tìm kiếm với từ khóa khác
                  </p>
                </motion.div>
              ) : (
                <div className="mt-8 flex justify-center items-center space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-lg ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    const isCurrentPage = pageNumber === currentPage;
                    const isNearCurrentPage =
                      Math.abs(pageNumber - currentPage) <= 1;
                    const isFirstPage = pageNumber === 1;
                    const isLastPage = pageNumber === totalPages;

                    if (
                      isCurrentPage ||
                      isNearCurrentPage ||
                      isFirstPage ||
                      isLastPage
                    ) {
                      return (
                        <React.Fragment key={pageNumber}>
                          {!isFirstPage &&
                            pageNumber === totalPages &&
                            currentPage < totalPages - 2 && (
                              <span className="px-3 py-2">...</span>
                            )}
                          <button
                            onClick={() => handlePageChange(pageNumber)}
                            className={`px-4 py-2 rounded-lg ${
                              isCurrentPage
                                ? "bg-cyan-600 text-white"
                                : "bg-white text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            {pageNumber}
                          </button>
                          {isFirstPage &&
                            pageNumber < totalPages - 2 &&
                            currentPage > 3 && (
                              <span className="px-3 py-2">...</span>
                            )}
                        </React.Fragment>
                      );
                    }
                    return null;
                  })}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-lg ${
                      currentPage === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CoursesPage;
