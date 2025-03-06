import React from "react";
import MainLayout from "../layouts/MainLayout";

const NotFoundPage = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold text-blue-500">
        404 - Trang không tồn tại
      </h1>
      <p>Trang bạn đang tìm kiếm không tồn tại. Hãy quay lại trang chủ.</p>
    </MainLayout>
  );
};

export default NotFoundPage;
