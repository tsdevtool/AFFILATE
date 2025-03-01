import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md py-4 md:px-26 px-6  flex justify-between items-center">
      <div className="flex items-center space-x-1 max-w-2xl">
        <span className="text-xl font-bold">
          <img src={"./logo.png"} alt="Logo" className="h-14 object-contain" />
          {/* <Link to="/">Affiliate Jobs</Link> */}
        </span>
      </div>
      <div className="hidden lg:flex items-center justify-between space-x-6 text-gray-900 font-medium gap-10">
        <Link to="/" className="hover:text-amber-500 font-bold text-xl">
          Trang chủ
        </Link>
        <Link to="/jobs" className="hover:text-amber-500 font-bold text-xl">
          Việc làm
        </Link>
        <Link
          to="/companies"
          className="hover:text-amber-500 font-bold text-xl"
        >
          Công ty
        </Link>
        <Link to="/courses" className="hover:text-amber-500 font-bold text-xl">
          Khóa học
        </Link>
      </div>
      <div className="gap-4 flex">
        <Link to="/login">
          <Button variant="outline" className="cursor-pointer">
            Đăng nhập
          </Button>
        </Link>
        <Link to="/register">
          <Button className="cursor-pointer">Đăng ký</Button>
        </Link>
      </div>

      <div className="relative lg:hidden">
        <button
          className="lg:hidden text-amber-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {isOpen && (
          <div className="absolute top-15 -right-6 md:-right-26 bg-white/80 shadow-md flex flex-col items-center space-y-4 lg:hidden z-30 w-screen">
            <Link
              to="/"
              className="hover:text-amber-500 font-bold text-xl w-full text-center hover:bg-amber-100/30 py-2"
            >
              Trang chủ
            </Link>
            <Link
              to="/jobs"
              className="hover:text-amber-500 font-bold text-xl w-full text-center hover:bg-amber-100/30 py-2"
            >
              Việc làm
            </Link>
            <Link
              to="/companies"
              className="hover:text-amber-500 font-bold text-xl w-full text-center hover:bg-amber-100/30 py-2"
            >
              Công ty
            </Link>
            <Link
              to="/courses"
              className="hover:text-amber-500 font-bold text-xl w-full text-center hover:bg-amber-100/30 py-2"
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
