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
