import { Button } from "@/components/ui/button";
import React from "react";
import { z } from "zod";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MainLayout from "../layouts/MainLayout";
const loginSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Dữ liệu đăng nhập:", data);
    // TODO: Gửi dữ liệu lên backend
  };

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 shadow-lg rounded-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block font-semibold">Email</label>
              <input
                type="email"
                {...register("email")}
                className="border p-2 w-full rounded"
              />
              {errors.email && (
                <p className="text-blue-500">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block font-semibold">Mật khẩu</label>
              <input
                type="password"
                {...register("password")}
                className="border p-2 w-full rounded"
              />
              {errors.password && (
                <p className="text-blue-500">{errors.password.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Đăng nhập
            </Button>
          </form>

          <p className="text-center mt-4">
            Chưa có tài khoản?{" "}
            <Link to="/register" className="text-blue-500">
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginPage;
