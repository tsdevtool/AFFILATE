import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log("Dữ liệu đăng ký:", data);
    // TODO: Gửi dữ liệu lên backend
  };

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 shadow-lg rounded-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Đăng ký</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block font-semibold">Họ và tên</label>
              <input
                type="text"
                {...register("name")}
                className="border p-2 w-full rounded"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block font-semibold">Email</label>
              <input
                type="email"
                {...register("email")}
                className="border p-2 w-full rounded"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
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
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block font-semibold">Xác nhận mật khẩu</label>
              <input
                type="password"
                {...register("confirmPassword")}
                className="border p-2 w-full rounded"
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Đăng ký
            </Button>
          </form>

          <p className="text-center mt-4">
            Đã có tài khoản?{" "}
            <Link to="/login" className="text-blue-500">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default RegisterPage;
