import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-red-200 shadow-md py-4 md:px-26 px-6  flex justify-between items-center">
      <div className="flex items-center space-x-1 max-w-2xl">
        <span className="text-xl font-bold">
          <img
            src={"./logo.png"}
            alt="Logo"
            className="h-14 object-contain max-lg:h-20"
          />
          {/* <Link to="/">Affiliate Jobs</Link> */}
        </span>
      </div>
      <div className="hidden lg:flex items-center justify-between space-x-6 text-gray-900 font-medium gap-10">
        <Link to="/" className="hover:text-blue-500 font-bold text-2xl">
          Trang chủ
        </Link>
        <Link to="/jobs" className="hover:text-blue-500 font-bold text-2xl">
          Việc làm
        </Link>
        <Link
          to="/companies"
          className="hover:text-blue-500 font-bold text-2xl"
        >
          Công ty
        </Link>
        <Link to="/courses" className="hover:text-blue-500 font-bold text-2xl">
          Khóa học
        </Link>
      </div>
      <div className="gap-4 flex">
        <Link to="/login">
          <Button
            variant="outline"
            className="cursor-pointer w-fit text-xl py-6 px-6 lg:py-4 lg:px-4 lg:text-xl rounded-full"
          >
            Đăng nhập
          </Button>
        </Link>
        <Link to="/register">
          <Button className="cursor-pointer text-xl w-fit lg:py-4 lg:px-4 lg:text-xl py-6 px-6 rounded-full">
            Đăng ký
          </Button>
        </Link>
      </div>

      <div className="relative lg:hidden">
        <button
          className="lg:hidden text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={38} />}
        </button>
        {isOpen && (
          <div className="absolute top-15 -right-6 md:-right-26 bg-white/80 shadow-md flex flex-col items-center space-y-4 lg:hidden z-30 w-screen">
            <Link
              to="/"
              className="hover:text-blue-500 font-bold text-xl w-full text-center hover:bg-blue-100/30 py-2"
            >
              Trang chủ
            </Link>
            <Link
              to="/jobs"
              className="hover:text-blue-500 font-bold text-xl w-full text-center hover:bg-blue-100/30 py-2"
            >
              Việc làm
            </Link>
            <Link
              to="/companies"
              className="hover:text-blue-500 font-bold text-xl w-full text-center hover:bg-blue-100/30 py-2"
            >
              Công ty
            </Link>
            <Link
              to="/courses"
              className="hover:text-blue-500 font-bold text-xl w-full text-center hover:bg-blue-100/30 py-2"
            >
              Khóa học
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
