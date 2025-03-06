import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {
  CreditCard,
  Wallet,
  QrCode,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const CoursePaymentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card"); // card, banking, momo
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("pending"); // pending, processing, success, failed

  // Giả lập dữ liệu khóa học - sau này sẽ lấy từ API
  const course = {
    id,
    title: "Web Development Fundamentals",
    price: 299000,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  };

  const paymentMethods = [
    {
      id: "card",
      name: "Thẻ tín dụng/ghi nợ",
      icon: CreditCard,
      description: "Thanh toán an toàn với Visa, Mastercard, JCB",
    },
    {
      id: "banking",
      name: "Chuyển khoản ngân hàng",
      icon: Wallet,
      description: "Chuyển khoản qua tài khoản ngân hàng",
    },
    {
      id: "momo",
      name: "Ví MoMo",
      icon: QrCode,
      description: "Quét mã QR để thanh toán với ví MoMo",
    },
  ];

  const handlePayment = async () => {
    setIsProcessing(true);
    setPaymentStatus("processing");

    try {
      // Giả lập API call thanh toán
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Giả lập thanh toán thành công
      setPaymentStatus("success");
      localStorage.setItem(`enrolled_${id}`, "true");

      // Chuyển hướng sau 1 giây
      setTimeout(() => {
        navigate(`/courses/${id}/learn`);
      }, 1000);
    } catch (error) {
      setPaymentStatus("failed");
      console.error("Payment failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-6">
              <h1 className="text-2xl font-bold text-white">
                Thanh toán khóa học
              </h1>
            </div>

            <div className="p-6">
              {/* Course Info */}
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg mb-6">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {course.title}
                  </h2>
                  <p className="text-2xl font-bold text-cyan-600">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(course.price)}
                  </p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  Chọn phương thức thanh toán
                </h3>
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === method.id
                        ? "border-cyan-600 bg-cyan-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="hidden"
                    />
                    <method.icon
                      className={`w-6 h-6 ${
                        paymentMethod === method.id
                          ? "text-cyan-600"
                          : "text-gray-400"
                      }`}
                    />
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">
                        {method.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {method.description}
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              {/* Payment Form */}
              {paymentMethod === "card" && (
                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Số thẻ
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ngày hết hạn
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "banking" && (
                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-cyan-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Thông tin chuyển khoản
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="text-gray-600">Ngân hàng:</span>{" "}
                        <span className="font-medium">Vietcombank</span>
                      </p>
                      <p>
                        <span className="text-gray-600">Số tài khoản:</span>{" "}
                        <span className="font-medium">1234567890</span>
                      </p>
                      <p>
                        <span className="text-gray-600">Chủ tài khoản:</span>{" "}
                        <span className="font-medium">CÔNG TY TNHH ABC</span>
                      </p>
                      <p>
                        <span className="text-gray-600">Nội dung CK:</span>{" "}
                        <span className="font-medium">KH_{id}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "momo" && (
                <div className="space-y-4 mb-8">
                  <div className="flex justify-center">
                    <div className="p-4 bg-pink-50 rounded-lg text-center">
                      <QrCode className="w-48 h-48 mx-auto text-pink-600 mb-4" />
                      <p className="text-sm text-gray-600">
                        Quét mã QR bằng ứng dụng MoMo để thanh toán
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Status */}
              {paymentStatus === "processing" && (
                <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg mb-6">
                  <Loader2 className="w-5 h-5 text-blue-600 animate-spin mr-2" />
                  <span className="text-blue-600">
                    Đang xử lý thanh toán...
                  </span>
                </div>
              )}

              {paymentStatus === "success" && (
                <div className="flex items-center justify-center p-4 bg-green-50 rounded-lg mb-6">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-600">
                    Thanh toán thành công! Đang chuyển hướng...
                  </span>
                </div>
              )}

              {paymentStatus === "failed" && (
                <div className="flex items-center justify-center p-4 bg-red-50 rounded-lg mb-6">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-red-600">
                    Thanh toán thất bại. Vui lòng thử lại!
                  </span>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors flex items-center justify-center ${
                  isProcessing
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-cyan-600 hover:bg-cyan-700"
                }`}
              >
                {isProcessing && (
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                )}
                {isProcessing
                  ? "Đang xử lý..."
                  : `Thanh toán ${new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(course.price)}`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CoursePaymentPage;
