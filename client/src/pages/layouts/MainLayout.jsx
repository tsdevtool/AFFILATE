import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <main className="max-w-full mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
