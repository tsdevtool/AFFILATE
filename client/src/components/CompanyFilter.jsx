import React, { useState } from "react";

const CompanyFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    keyword: "",
    industry: "",
    location: "",
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
        placeholder="Nhập tên công ty..."
        className="border p-2 rounded w-full mb-2"
        onChange={handleChange}
      />
      <select
        name="industry"
        className="border p-2 rounded w-full mb-2"
        onChange={handleChange}
      >
        <option value="">Chọn lĩnh vực</option>
        <option value="Công nghệ">Công nghệ</option>
        <option value="Marketing">Marketing</option>
      </select>
      <select
        name="location"
        className="border p-2 rounded w-full"
        onChange={handleChange}
      >
        <option value="">Chọn địa điểm</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
      </select>
    </div>
  );
};

export default CompanyFilter;
