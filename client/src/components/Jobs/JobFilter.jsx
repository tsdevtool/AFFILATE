import React, { useState } from "react";
import { Search, MapPin, Briefcase, Filter } from "lucide-react";

const JobFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    category: "",
    type: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    onFilterChange({ ...filters, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    const resetFilters = {
      keyword: "",
      location: "",
      category: "",
      type: "",
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-5 border-b border-gray-200">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            name="keyword"
            value={filters.keyword}
            placeholder="Tìm kiếm công việc..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="p-5 space-y-4">
        <h3 className="font-medium text-gray-700 flex items-center">
          <MapPin size={18} className="mr-2 text-cyan-600" />
          Địa điểm
        </h3>
        <div className="space-y-2">
          <select
            name="location"
            value={filters.location}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white"
            onChange={handleChange}
          >
            <option value="">Tất cả địa điểm</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Hồ Chí Minh">Hồ Chí Minh</option>
            <option value="Đà Nẵng">Đà Nẵng</option>
          </select>
        </div>

        <h3 className="font-medium text-gray-700 flex items-center pt-2">
          <Briefcase size={18} className="mr-2 text-cyan-600" />
          Ngành nghề
        </h3>
        <div className="space-y-2">
          <select
            name="category"
            value={filters.category}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white"
            onChange={handleChange}
          >
            <option value="">Tất cả ngành nghề</option>
            <option value="Developer">Lập trình viên</option>
            <option value="Marketing">Marketing</option>
            <option value="Content">Content Creator</option>
            <option value="SEO">SEO</option>
          </select>
        </div>

        <h3 className="font-medium text-gray-700 flex items-center pt-2">
          <Filter size={18} className="mr-2 text-cyan-600" />
          Loại công việc
        </h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="all-types"
              name="type"
              value=""
              checked={filters.type === ""}
              onChange={handleChange}
              className="w-4 h-4 text-cyan-600 focus:ring-cyan-500"
            />
            <label htmlFor="all-types" className="ml-2 text-gray-700">
              Tất cả
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="full-time"
              name="type"
              value="Full-time"
              checked={filters.type === "Full-time"}
              onChange={handleChange}
              className="w-4 h-4 text-cyan-600 focus:ring-cyan-500"
            />
            <label htmlFor="full-time" className="ml-2 text-gray-700">
              Toàn thời gian
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="part-time"
              name="type"
              value="Part-time"
              checked={filters.type === "Part-time"}
              onChange={handleChange}
              className="w-4 h-4 text-cyan-600 focus:ring-cyan-500"
            />
            <label htmlFor="part-time" className="ml-2 text-gray-700">
              Bán thời gian
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="freelance"
              name="type"
              value="Freelance"
              checked={filters.type === "Freelance"}
              onChange={handleChange}
              className="w-4 h-4 text-cyan-600 focus:ring-cyan-500"
            />
            <label htmlFor="freelance" className="ml-2 text-gray-700">
              Freelance
            </label>
          </div>
        </div>

        <div className="pt-4">
          <button
            onClick={handleReset}
            className="w-full py-3 bg-cyan-50 hover:bg-cyan-100 text-cyan-700 font-medium rounded-lg transition-colors flex items-center justify-center"
          >
            Xóa bộ lọc
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
