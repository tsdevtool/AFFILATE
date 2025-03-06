import React from "react";
import { Card } from "../ui/card";
import {
  MapPin,
  Clock,
  Briefcase,
  DollarSign,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

const JobCard = ({
  id,
  title,
  company,
  location,
  salary,
  type,
  logo,
  description,
  posted,
}) => {
  return (
    <Card className="p-5 border border-gray-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 bg-white rounded-xl overflow-hidden">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
          {logo ? (
            <img
              src={logo}
              alt={company}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="text-xl font-bold text-cyan-600">
              {company.charAt(0)}
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <Link to={`/jobs/${id}`}>
              <h2 className="text-xl font-bold text-gray-800 hover:text-cyan-600 transition-colors">
                {title}
              </h2>
            </Link>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                type === "Full-time"
                  ? "bg-cyan-100 text-cyan-800"
                  : type === "Part-time"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-indigo-100 text-indigo-800"
              }`}
            >
              {type}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-cyan-600 mt-1">
            {company}
          </h3>

          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {description}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin size={14} className="mr-1 text-cyan-500" />
              <span>{location}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <DollarSign size={14} className="mr-1 text-cyan-500" />
              <span>{salary}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock size={14} className="mr-1 text-cyan-500" />
              <span>{posted}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Briefcase size={14} className="mr-1 text-cyan-500" />
              <span>{type}</span>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <Link
              to={`/jobs/${id}`}
              className="text-sm font-medium text-cyan-600 hover:text-cyan-800 transition-colors flex items-center"
            >
              Xem chi tiết
              <ExternalLink size={14} className="ml-1" />
            </Link>
            <Link
              to={`/jobs/${id}/apply`}
              className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
            >
              Ứng tuyển ngay
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
