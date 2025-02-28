import React from "react";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";

const CompanyCard = ({ id, name, industry, location }) => {
  // const navigate = useNavigate();

  return (
    <Card className="p-4">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">
        {industry} - {location}
      </p>
      <Link to={`/company/${id}`} className="text-blue-500">
        Xem chi tiết →
      </Link>
    </Card>
  );
};

export default CompanyCard;
