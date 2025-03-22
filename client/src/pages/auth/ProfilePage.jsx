import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import MainLayout from "../layouts/MainLayout";
import { 
  User, Mail, Calendar, Lock, 
  Loader2, AlertCircle, CheckCircle, 
  Edit, Save, XCircle 
} from "lucide-react";
import { useAuthStore } from "@/store";

const profileSchema = z.object({
  firstName: z.string().min(2, "Tên phải có ít nhất 2 ký tự"),
  lastName: z.string().min(2, "Họ phải có ít nhất 2 ký tự"),
  email: z.string().email("Email không hợp lệ").optional(),
  dob: z.string().optional(),
});

const passwordSchema = z.object({
  currentPassword: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
  newPassword: z.string().min(6, "Mật khẩu mới phải có ít nhất 6 ký tự"),
  confirmPassword: z.string().min(6, "Xác nhận mật khẩu phải có ít nhất 6 ký tự"),
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "Mật khẩu mới và xác nhận mật khẩu không khớp",
  path: ["confirmPassword"],
});

const ProfilePage = () => {
  const { user, isLoading, error, getProfile, updateUser } = useAuthStore();
  const [successMessage, setSuccessMessage] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [isPasswordMode, setIsPasswordMode] = useState(false);

  const {
    register: registerProfile,
    handleSubmit: handleProfileSubmit,
    formState: { errors: profileErrors },
    reset: resetProfile,
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      dob: user?.dob || "",
    },
  });

  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors },
    reset: resetPassword,
  } = useForm({
    resolver: zodResolver(passwordSchema),
  });

  useEffect(() => {
    if (!user) {
      getProfile().catch(err => {
        console.error("Lỗi khi lấy thông tin profile:", err);
      });
    }
  }, [getProfile, user]);

  useEffect(() => {
    if (user) {
      resetProfile({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        dob: user.dob || "",
      });
    }
  }, [user, resetProfile]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const onProfileSubmit = async (formData) => {
    try {
      updateUser(formData);
      setSuccessMessage("Cập nhật thông tin thành công!");
      setIsEditMode(false);
    } catch (err) {
      console.error("Lỗi cập nhật profile:", err);
    }
  };

  const onPasswordSubmit = async () => {
    try {
      setSuccessMessage("Đổi mật khẩu thành công!");
      setIsPasswordMode(false);
      resetPassword();
    } catch (err) {
      console.error("Lỗi đổi mật khẩu:", err);
    }
  };

  const cancelEdit = () => {
    setIsEditMode(false);
    resetProfile({
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      dob: user?.dob || "",
    });
  };

  if (!user && isLoading) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 sm:p-10 text-white">
              <h1 className="text-3xl font-bold">{isPasswordMode ? "Đổi mật khẩu" : "Thông tin cá nhân"}</h1>
              <p className="mt-2 opacity-80">
                {isPasswordMode 
                  ? "Cập nhật mật khẩu đăng nhập của bạn" 
                  : "Quản lý thông tin cá nhân của bạn"}
              </p>
            </div>

            <div className="p-6 sm:p-10">
              {successMessage && (
                <div className="bg-green-50 text-green-600 p-4 rounded-lg flex items-center mb-6">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  {successMessage}
                </div>
              )}

              {error && (
                <div className="bg-red-50 text-red-500 p-4 rounded-lg flex items-center mb-6">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  {error}
                </div>
              )}

              {isPasswordMode ? (
                <form onSubmit={handlePasswordSubmit(onPasswordSubmit)} className="space-y-6">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Mật khẩu hiện tại
                    </label>
                    <div className="relative">
                      <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        {...registerPassword("currentPassword")}
                        className={`pl-10 pr-4 py-3 w-full border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                          passwordErrors.currentPassword ? "border-red-300" : "border-gray-300"
                        }`}
                      />
                    </div>
                    {passwordErrors.currentPassword && (
                      <p className="mt-1 text-sm text-red-500">
                        {passwordErrors.currentPassword.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Mật khẩu mới
                    </label>
                    <div className="relative">
                      <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        {...registerPassword("newPassword")}
                        className={`pl-10 pr-4 py-3 w-full border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                          passwordErrors.newPassword ? "border-red-300" : "border-gray-300"
                        }`}
                      />
                    </div>
                    {passwordErrors.newPassword && (
                      <p className="mt-1 text-sm text-red-500">
                        {passwordErrors.newPassword.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Xác nhận mật khẩu mới
                    </label>
                    <div className="relative">
                      <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        {...registerPassword("confirmPassword")}
                        className={`pl-10 pr-4 py-3 w-full border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                          passwordErrors.confirmPassword ? "border-red-300" : "border-gray-300"
                        }`}
                      />
                    </div>
                    {passwordErrors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-500">
                        {passwordErrors.confirmPassword.message}
                      </p>
                    )}
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-2 border-gray-300"
                      onClick={() => setIsPasswordMode(false)}
                    >
                      Quay lại
                    </Button>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white flex-1"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Đang xử lý...
                        </>
                      ) : (
                        "Cập nhật mật khẩu"
                      )}
                    </Button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleProfileSubmit(onProfileSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Họ
                      </label>
                      <div className="relative">
                        <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          {...registerProfile("lastName")}
                          className={`pl-10 pr-4 py-3 w-full border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                            profileErrors.lastName ? "border-red-300" : "border-gray-300"
                          }`}
                          disabled={!isEditMode}
                        />
                      </div>
                      {profileErrors.lastName && (
                        <p className="mt-1 text-sm text-red-500">
                          {profileErrors.lastName.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Tên
                      </label>
                      <div className="relative">
                        <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          {...registerProfile("firstName")}
                          className={`pl-10 pr-4 py-3 w-full border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                            profileErrors.firstName ? "border-red-300" : "border-gray-300"
                          }`}
                          disabled={!isEditMode}
                        />
                      </div>
                      {profileErrors.firstName && (
                        <p className="mt-1 text-sm text-red-500">
                          {profileErrors.firstName.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          {...registerProfile("email")}
                          className={`pl-10 pr-4 py-3 w-full border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                            profileErrors.email ? "border-red-300" : "border-gray-300"
                          }`}
                          disabled={true}
                        />
                      </div>
                      {profileErrors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {profileErrors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Ngày sinh
                      </label>
                      <div className="relative">
                        <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="date"
                          {...registerProfile("dob")}
                          className={`pl-10 pr-4 py-3 w-full border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                            profileErrors.dob ? "border-red-300" : "border-gray-300"
                          }`}
                          disabled={!isEditMode}
                        />
                      </div>
                      {profileErrors.dob && (
                        <p className="mt-1 text-sm text-red-500">
                          {profileErrors.dob.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {user?.roles && user.roles.length > 0 && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Vai trò</h3>
                      <div className="flex flex-wrap gap-2">
                        {user.roles.map((role, index) => (
                          <span 
                            key={index}
                            className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                          >
                            {role.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 pt-4">
                    {isEditMode ? (
                      <>
                        <Button
                          type="button"
                          variant="outline"
                          className="border-2 border-red-300 text-red-600 hover:bg-red-50"
                          onClick={cancelEdit}
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Hủy
                        </Button>
                        <Button
                          type="submit"
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Đang lưu...
                            </>
                          ) : (
                            <>
                              <Save className="w-4 h-4 mr-2" />
                              Lưu thay đổi
                            </>
                          )}
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          type="button"
                          variant="outline"
                          className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50"
                          onClick={() => setIsEditMode(true)}
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Chỉnh sửa thông tin
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="border-2 border-gray-300 text-gray-600 hover:bg-gray-50"
                          onClick={() => setIsPasswordMode(true)}
                        >
                          <Lock className="w-4 h-4 mr-2" />
                          Đổi mật khẩu
                        </Button>
                      </>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfilePage; 