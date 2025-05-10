import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useAuthStore } from "@/store";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  
  const { isAuthenticated, user, logout, isLoading } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowUserMenu(false);
  }, [location]);
  
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error("Lỗi đăng xuất:", error);
    }
  };

  const displayName = user ? `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.email : 'Tài khoản';

  const menuItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Việc làm", href: "/jobs" },
    { label: "Đối tác", href: "/companies" },
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
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
            </Link>

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

            <div className="hidden lg:flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="relative">
                  <Button
                    variant="ghost"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className={`flex items-center space-x-2 rounded-full transition-colors ${
                      isScrolled || !isHomePage
                        ? "text-gray-800 hover:bg-gray-100"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <User className="w-5 h-5" />
                    <span>{displayName}</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                  
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <Link 
                        to="/profile" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Hồ sơ
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        disabled={isLoading}
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        {isLoading ? 'Đang đăng xuất...' : 'Đăng xuất'}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>

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

        <AnimatePresence>
          {isOpen && (
            <div className="lg:hidden">
              <div className="px-4 pt-2 pb-6 space-y-1 bg-white shadow-lg">
                {menuItems.map((item) => (
                  <div
                    key={item.href}
                    className="pt-4 space-y-3"
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
                  </div>
                ))}
                <div className="pt-4 space-y-3">
                  {isAuthenticated ? (
                    <>
                      {user && (
                        <div className="bg-blue-50 rounded-lg p-3 mb-3">
                          <p className="text-gray-700 font-medium">Xin chào,</p>
                          <p className="text-blue-600 font-bold">{displayName}</p>
                        </div>
                      )}
                      <Link to="/profile" className="block">
                        <Button
                          variant="outline"
                          className="w-full py-3 rounded-lg border-2 border-blue-600 text-blue-600 flex items-center justify-center"
                        >
                          <User className="w-5 h-5 mr-2" />
                          Hồ sơ của tôi
                        </Button>
                      </Link>
                      <Button
                        onClick={handleLogout}
                        disabled={isLoading}
                        className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white flex items-center justify-center"
                      >
                        <LogOut className="w-5 h-5 mr-2" />
                        {isLoading ? 'Đang đăng xuất...' : 'Đăng xuất'}
                      </Button>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </nav>
      {!isHomePage && <div className="h-[4rem]" />}
    </>
  );
};

export default Navbar;
