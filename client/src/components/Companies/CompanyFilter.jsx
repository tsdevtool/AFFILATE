import React, { useState, useRef, useEffect } from "react";
import { Search, MapPin, Building2, X, ChevronDown, Users } from "lucide-react";

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

const locations = [
  "Hà Nội",
  "Hồ Chí Minh",
  "Đà Nẵng",
  "Hải Phòng",
  "Cần Thơ",
  "Bình Dương",
  "Đồng Nai",
];

const companySizes = [
  "1-50 nhân viên",
  "51-200 nhân viên",
  "201-500 nhân viên",
  "501-1000 nhân viên",
  "1000+ nhân viên",
];

const CompanyFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    keyword: "",
    industry: "",
    location: "",
    size: "",
  });
  const [suggestions, setSuggestions] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [openDropdown, setOpenDropdown] = useState("");

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onFilterChange({ ...filters, [name]: value });

    if (name === "keyword") {
      const filtered = industries.filter((industry) =>
        industry.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(value ? filtered : []);
    }
  };

  const addFilter = (type, value) => {
    if (!selectedFilters.find((f) => f.type === type && f.value === value)) {
      setSelectedFilters([...selectedFilters, { type, value }]);
    }
  };

  const removeFilter = (type, value) => {
    setSelectedFilters(
      selectedFilters.filter((f) => !(f.type === type && f.value === value))
    );
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
    setFilters({
      keyword: "",
      industry: "",
      location: "",
      size: "",
    });
    onFilterChange({
      keyword: "",
      industry: "",
      location: "",
      size: "",
    });
  };

  const CustomSelect = ({
    name,
    value,
    onChange,
    options,
    icon: Icon,
    label,
    placeholder,
  }) => {
    const isOpen = openDropdown === name;

    const handleSelect = (option) => {
      const optionValue = typeof option === "string" ? option : option.value;
      const event = { target: { name, value: optionValue } };
      onChange(event);
      setOpenDropdown("");
    };

    return (
      <div className="relative" ref={dropdownRef}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpenDropdown(isOpen ? "" : name)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border
              ${
                isOpen
                  ? "border-cyan-500 ring-1 ring-cyan-500"
                  : "border-gray-200 hover:border-gray-300"
              }
              bg-white transition-all duration-200 text-left`}
          >
            <div className="flex items-center min-w-0">
              {Icon && (
                <Icon className="flex-shrink-0 h-5 w-5 text-gray-400 mr-3" />
              )}
              <span
                className={`truncate ${
                  value ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {value || placeholder}
              </span>
            </div>
            <ChevronDown
              className={`flex-shrink-0 h-5 w-5 text-gray-400 ml-2 transition-transform duration-200
              ${isOpen ? "transform rotate-180" : ""}`}
            />
          </button>

          {isOpen && (
            <div
              className="absolute left-0 right-0 mt-2 py-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50
              transform opacity-100 scale-100 transition-all duration-200 origin-top"
            >
              <div className="max-h-60 overflow-auto custom-scrollbar">
                {options.map((option, index) => {
                  const optionValue =
                    typeof option === "string" ? option : option.value;
                  const optionLabel =
                    typeof option === "string" ? option : option.label;
                  const isSelected = value === optionValue;

                  return (
                    <div
                      key={index}
                      onClick={() => handleSelect(option)}
                      className={`flex items-center px-4 py-2.5 cursor-pointer transition-colors duration-150
                        ${
                          isSelected
                            ? "bg-cyan-50 text-cyan-700"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                      {Icon && (
                        <Icon
                          className={`h-4 w-4 mr-3 ${
                            isSelected ? "text-cyan-500" : "text-gray-400"
                          }`}
                        />
                      )}
                      <span
                        className={`${
                          isSelected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {optionLabel}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>

      {/* Search Bar */}
      <div className="bg-white shadow-md rounded-xl p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              name="keyword"
              value={filters.keyword}
              placeholder="Tìm kiếm theo tên công ty hoặc ngành nghề..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 
                focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 
                transition-colors hover:border-gray-300"
              onChange={handleChange}
              onBlur={() => setTimeout(() => setSuggestions([]), 200)}
            />
            {suggestions.length > 0 && (
              <ul
                className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 
                rounded-lg shadow-lg z-50 max-h-60 overflow-auto divide-y divide-gray-100"
              >
                {suggestions.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer 
                      flex items-center text-gray-700 transition-colors"
                    onMouseDown={() => {
                      setFilters({ ...filters, keyword: item });
                      addFilter("keyword", item);
                      setSuggestions([]);
                    }}
                  >
                    <Building2 className="h-4 w-4 mr-2 text-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <CustomSelect
            name="location"
            value={filters.location}
            onChange={(e) => {
              handleChange(e);
              if (e.target.value) addFilter("location", e.target.value);
            }}
            options={locations}
            icon={MapPin}
            placeholder="Tất cả địa điểm"
          />
        </div>

        {/* Selected Filters */}
        {selectedFilters.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {selectedFilters.map((filter, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1.5 rounded-full 
                  text-sm bg-cyan-50 text-cyan-700 border border-cyan-200
                  transition-all hover:bg-cyan-100"
              >
                {filter.value}
                <button
                  onClick={() => removeFilter(filter.type, filter.value)}
                  className="ml-2 text-cyan-600 hover:text-cyan-800 
                    transition-colors rounded-full hover:bg-cyan-200 p-0.5"
                >
                  <X className="h-4 w-4" />
                </button>
              </span>
            ))}
            <button
              onClick={clearAllFilters}
              className="text-sm text-gray-500 hover:text-gray-700 
                ml-2 transition-colors hover:underline"
            >
              Xóa tất cả
            </button>
          </div>
        )}
      </div>

      {/* Additional Filters */}
      <div className="bg-white shadow-md rounded-xl p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CustomSelect
            name="industry"
            value={filters.industry}
            onChange={(e) => {
              handleChange(e);
              if (e.target.value) addFilter("industry", e.target.value);
            }}
            options={industries}
            icon={Building2}
            label="Lĩnh vực"
            placeholder="Tất cả lĩnh vực"
          />

          <CustomSelect
            name="size"
            value={filters.size}
            onChange={(e) => {
              handleChange(e);
              if (e.target.value) addFilter("size", e.target.value);
            }}
            options={companySizes}
            icon={Users}
            label="Quy mô công ty"
            placeholder="Tất cả quy mô"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyFilter;
