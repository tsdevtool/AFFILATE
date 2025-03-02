import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
const CompanyCard = ({ id, name, industry, location, logo, category }) => {
  // const navigate = useNavigate();

  return (
    <Link>
      <Card
        className={
          "relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-500 border border-gray-200 hover:border-transparent hover:bg-gradient-to-r hover:from-[#1a1a3f] hover:to-[#2c2c6c]"
        }
      >
        <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
          <img
            src="/bg-technology.jpg"
            alt="Technology"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Nội dung */}
        <CardContent className="relative z-10 p-6 flex flex-col items-center">
          <img src={logo} alt={name} className="h-16 object-contain mb-4 " />
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-500">
            {name}
          </h3>
          <p className="text-sm text-gray-600 group-hover:text-gray-200 transition-colors duration-500">
            {industry}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CompanyCard;

{
  /* <motion.div
      whileHover={{
        scale: 1.05,
        backgroundImage: `url('/bg-${category}.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-4 shadow-lg flex flex-col items-center text-center relative overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 bg-gray-600/20"></div>
      <div className="relative z-10 p-4 flex flex-col items-center text-center">
        <img src={logo} alt={name} className="w-16 h-16 object-contain mb-4 " />
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-white text-lg font-bold">
          {industry} - {location}
        </p>
        <Link to={`/company/${id}`} className="text-blue-500">
          Xem chi tiết →
        </Link>
      </div>
    </motion.div> */
}
