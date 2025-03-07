import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { Loader2, Mail, Lock, User, AlertCircle } from "lucide-react";

const registerSchema = z
  .object({
    name: z.string().min(3, "Tên phải có ít nhất 3 ký tự"),
    email: z.string().email("Email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu không khớp",
    path: ["confirmPassword"],
  });

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [registerError, setRegisterError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setRegisterError("");

    try {
      // Giả lập API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Dữ liệu đăng ký:", data);
      // TODO: Xử lý đăng ký với backend
    } catch (error) {
      setRegisterError("Đăng ký thất bại. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Tạo tài khoản mới
            </h2>
            <p className="text-gray-600">Bắt đầu hành trình học tập của bạn</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-8">
            {registerError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 text-red-500 p-4 rounded-lg flex items-center mb-6"
              >
                <AlertCircle className="w-5 h-5 mr-2" />
                {registerError}
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Họ và tên
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    {...register("name")}
                    className={`pl-10 pr-4 py-3 w-full border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                      errors.name ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    {...register("email")}
                    className={`pl-10 pr-4 py-3 w-full border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                      errors.email ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="example@email.com"
                  />
                </div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mật khẩu
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    {...register("password")}
                    className={`pl-10 pr-4 py-3 w-full border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                      errors.password ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.password && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.password.message}
                  </motion.p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Xác nhận mật khẩu
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    {...register("confirmPassword")}
                    className={`pl-10 pr-4 py-3 w-full border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                      errors.confirmPassword
                        ? "border-red-300"
                        : "border-gray-300"
                    }`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.confirmPassword && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.confirmPassword.message}
                  </motion.p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Đang đăng ký...
                  </>
                ) : (
                  "Đăng ký"
                )}
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Hoặc đăng ký với
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <button className="flex items-center justify-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                </button>
                <button className="flex items-center justify-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <img
                    src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                    alt="Facebook"
                    className="w-5 h-5"
                  />
                </button>
                <button className="flex items-center justify-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <img src="/ico-github.jpg" alt="GitHub" className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          <p className="mt-8 text-center text-gray-600">
            Đã có tài khoản?{" "}
            <Link
              to="/login"
              className="font-medium text-cyan-600 hover:text-cyan-500"
            >
              Đăng nhập
            </Link>
          </p>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default RegisterPage;
