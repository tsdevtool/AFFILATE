import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between">
      <h1 className="text-xl font-bold">
        <Link to="/">Affiliate Jobs</Link>
      </h1>
      <div className="space-x-4">
        <Link to="/jobs">
          <Button variant="outline">Việc làm</Button>
        </Link>
        <Link to="/companies">
          <Button variant="outline">Công ty</Button>
        </Link>
        <Link to="/courses">
          <Button variant="outline">Khóa học</Button>
        </Link>
        <Link to="/login">
          <Button variant="outline">Đăng nhập</Button>
        </Link>
        <Link to="/register">
          <Button>Đăng ký</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
