import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import {
  Calendar,
  Clock,
  Eye,
  MessageCircle,
  Share2,
  Tag,
  ThumbsUp,
  Search,
  Filter,
} from "lucide-react";

const categories = [
  "Tất cả",
  "Thị trường việc làm",
  "Phát triển kỹ năng",
  "Học tập",
  "Câu chuyện thành công",
  "Hướng dẫn & Mẹo",
  "Học bổng",
];

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data - trong thực tế sẽ fetch từ API
  const blogs = [
    {
      id: 1,
      title: "Top 10 ngành nghề hot nhất 2024",
      summary:
        "Khám phá những ngành nghề đang có nhu cầu cao và mức lương hấp dẫn trong năm 2024",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
      category: "Thị trường việc làm",
      tags: ["Việc làm hot", "Xu hướng", "2024"],
      author: {
        name: "Nguyễn Văn A",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
      },
      publishDate: "2024-03-15",
      readTime: "5 phút",
      views: 1200,
      likes: 45,
      comments: 8,
      featured: true,
    },
    {
      id: 2,
      title: "Kỹ năng cần thiết cho Developer năm 2024",
      summary:
        "Những kỹ năng lập trình viên cần trang bị để nâng cao cơ hội việc làm trong năm 2024",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      category: "Phát triển kỹ năng",
      tags: ["Developer", "Kỹ năng", "IT"],
      author: {
        name: "Trần Thị B",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucy",
      },
      publishDate: "2024-03-14",
      readTime: "7 phút",
      views: 850,
      likes: 32,
      comments: 5,
    },
    {
      id: 3,
      title: "Cách viết CV thu hút nhà tuyển dụng",
      summary:
        "Hướng dẫn chi tiết cách tạo CV ấn tượng để tăng cơ hội được mời phỏng vấn",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
      category: "Hướng dẫn & Mẹo",
      tags: ["CV", "Tuyển dụng", "Việc làm"],
      author: {
        name: "Lê Văn C",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      },
      publishDate: "2024-03-13",
      readTime: "6 phút",
      views: 920,
      likes: 38,
      comments: 12,
    },
    {
      id: 4,
      title: "Từ thực tập sinh đến Software Engineer tại Google",
      summary:
        "Câu chuyện về hành trình phát triển sự nghiệp và những bài học quý giá từ một cựu thực tập sinh",
      image: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40",
      category: "Câu chuyện thành công",
      tags: ["Success Story", "Thực tập", "Google"],
      author: {
        name: "Phạm Thị D",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      },
      publishDate: "2024-03-12",
      readTime: "8 phút",
      views: 1500,
      likes: 120,
      comments: 25,
    },
    {
      id: 5,
      title: "Hướng dẫn săn học bổng du học Nhật Bản 2024",
      summary:
        "Chi tiết các bước chuẩn bị hồ sơ và kinh nghiệm phỏng vấn học bổng MEXT",
      image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
      category: "Học bổng",
      tags: ["Du học", "Nhật Bản", "Học bổng MEXT"],
      author: {
        name: "Hoàng Văn E",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      },
      publishDate: "2024-03-11",
      readTime: "10 phút",
      views: 980,
      likes: 56,
      comments: 18,
    },
    {
      id: 6,
      title: "5 phương pháp học tập hiệu quả cho sinh viên IT",
      summary:
        "Các kỹ thuật học tập và quản lý thời gian giúp cân bằng giữa học tập và thực hành",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      category: "Học tập",
      tags: ["Học tập", "IT", "Sinh viên"],
      author: {
        name: "Vũ Thị F",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      },
      publishDate: "2024-03-10",
      readTime: "7 phút",
      views: 750,
      likes: 42,
      comments: 15,
    },
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "Tất cả" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Blog Việc làm & Nghề nghiệp
            </h1>
            <p className="text-xl text-blue-100">
              Cập nhật tin tức mới nhất về thị trường việc làm và phát triển
              nghề nghiệp
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 bg-white/90"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      {filteredBlogs.find((blog) => blog.featured) && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
          <Card className="overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
            <div className="relative h-96">
              <img
                src={filteredBlogs[0].image}
                alt={filteredBlogs[0].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Badge className="mb-4 bg-blue-500 hover:bg-blue-600">
                  {filteredBlogs[0].category}
                </Badge>
                <h2 className="text-3xl font-bold mb-2">
                  {filteredBlogs[0].title}
                </h2>
                <p className="text-lg text-gray-200 mb-4">
                  {filteredBlogs[0].summary}
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={filteredBlogs[0].author.avatar}
                    alt={filteredBlogs[0].author.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">
                      {filteredBlogs[0].author.name}
                    </p>
                    <div className="flex items-center text-sm text-gray-300">
                      <Calendar className="w-4 h-4 mr-1" />
                      {filteredBlogs[0].publishDate}
                      <Clock className="w-4 h-4 ml-3 mr-1" />
                      {filteredBlogs[0].readTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Blog List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.slice(1).map((blog) => (
            <Card
              key={blog.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{blog.category}</Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {blog.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {blog.summary}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      src={blog.author.avatar}
                      alt={blog.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm font-medium">
                      {blog.author.name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      <span className="text-sm">{blog.views}</span>
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      <span className="text-sm">{blog.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span className="text-sm">{blog.comments}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogsPage;
