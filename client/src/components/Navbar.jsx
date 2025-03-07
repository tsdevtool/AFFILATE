import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Theo dõi scroll để thay đổi style navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Đóng mobile menu khi chuyển trang
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Việc làm", href: "/jobs" },
    { label: "Công ty", href: "/companies" },
    { label: "Khóa học", href: "/courses" },
    { label: "Blogs", href: "/blogs" },
  ];

  return (
    <>
      <nav
        className={`w-full z-50 transition-all duration-300 ${
          isHomePage ? "fixed" : "sticky"
        } top-0 left-0 right-0 ${
          isScrolled || !isHomePage
            ? "bg-white shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative text-base font-semibold transition-colors group ${
                    location.pathname === item.href
                      ? "text-blue-600"
                      : isScrolled || !isHomePage
                      ? "text-gray-800 hover:text-blue-600"
                      : "text-white hover:text-blue-200"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-0.5 transform origin-left transition-transform duration-300 ${
                      location.pathname === item.href
                        ? "scale-x-100"
                        : "scale-x-0"
                    } group-hover:scale-x-100 ${
                      isScrolled || !isHomePage ? "bg-blue-600" : "bg-white"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/login">
                <Button
                  variant="outline"
                  className={`px-6 py-2 rounded-full border-2 transition-colors ${
                    isScrolled || !isHomePage
                      ? "border-blue-600 text-blue-600 hover:bg-blue-50"
                      : "border-white text-white hover:bg-white/10"
                  }`}
                >
                  Đăng nhập
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  className={`px-6 py-2 rounded-full transition-colors ${
                    isScrolled || !isHomePage
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Đăng ký
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled || !isHomePage
                    ? "text-gray-600 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 bg-white shadow-lg">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        location.pathname === item.href
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-800 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="pt-4 space-y-3"
                >
                  <Link to="/login" className="block">
                    <Button
                      variant="outline"
                      className="w-full py-3 rounded-lg border-2 border-blue-600 text-blue-600"
                    >
                      Đăng nhập
                    </Button>
                  </Link>
                  <Link to="/register" className="block">
                    <Button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white">
                      Đăng ký
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {!isHomePage && <div className="h-[4rem]" />}
    </>
  );
};

export default Navbar;
