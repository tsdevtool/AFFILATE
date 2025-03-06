import React, { useState } from "react";

const industries = [
  "Công nghệ thông tin",
  "Marketing",
  "Công nghiệp ô tô",
  "Công nghiệp ô tô & Công nghệ sạch",
  "Công nghệ thông tin & Điện tử tiêu dùng",
  "Giáo dục & Đào tạo",
  "Chăm sóc sức khỏe & Dược phẩm",
  "Dược phẩm & Công nghệ sinh học",
  "Thiết kế đồ họa & Đa phương tiện",
  "Thương mại điện tử",
];

const CompanyFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    keyword: "",
    industry: "",
    location: "",
  });
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onFilterChange({ ...filters, [name]: value });

    // Hiển thị gợi ý khi gõ vào ô nhập
    if (name === "keyword") {
      const filtered = industries.filter((industry) =>
        industry.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(value ? filtered : []);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-4 relative">
      <div className="relative">
        <input
          type="text"
          name="keyword"
          placeholder="Nhập tên công ty hoặc ngành nghề..."
          className="border p-2 rounded w-full mb-2 focus:border-blue-500 hover:border-blue-400 transition duration-200"
          onChange={handleChange}
          onBlur={() => setTimeout(() => setSuggestions([]), 200)} // Ẩn gợi ý khi rời khỏi input
        />
        {suggestions.length > 0 && (
          <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded shadow-lg mt-1 z-10">
            {suggestions.map((item, index) => (
              <li
                key={index}
                className="p-2 hover:bg-blue-100 cursor-pointer"
                onMouseDown={() => {
                  setFilters({ ...filters, keyword: item });
                  setSuggestions([]);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <select
        name="industry"
        className="border p-2 rounded w-full mb-2 focus:border-blue-500 hover:border-blue-400 transition duration-200"
        onChange={handleChange}
      >
        <option value="">Chọn lĩnh vực</option>
        {industries.map((industry, index) => (
          <option key={index} value={industry}>
            {industry}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CompanyFilter;
