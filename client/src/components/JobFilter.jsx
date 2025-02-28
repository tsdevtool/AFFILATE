import React, { useState } from "react";

const JobFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    category: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    onFilterChange({ ...filters, [e.target.name]: e.target.value });
  };
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-4">
      <input
        type="text"
        name="keyword"
        placeholder="Nhập từ khóa..."
        className="border p-2 rounded w-full mb-2"
        onChange={handleChange}
      />
      <select
        name="location"
        className="border p-2 rounded w-full mb-2"
        onChange={handleChange}
      >
        <option value="">Chọn địa điểm</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
      </select>
      <select
        name="category"
        className="border p-2 rounded w-full"
        onChange={handleChange}
      >
        <option value="">Chọn ngành nghề</option>
        <option value="Công nghệ">Công nghệ</option>
        <option value="Marketing">Marketing</option>
      </select>
    </div>
  );
};

export default JobFilter;
