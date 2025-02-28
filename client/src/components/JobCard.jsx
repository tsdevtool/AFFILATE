import React from "react";
import { Card } from "./ui/card";

const JobCard = ({ title, company, location, salary }) => {
  return (
    <Card className="p-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-600">
        {company} - {location}
      </p>
      <p className="text-green-500 font-semibold">Lương: {salary}</p>
    </Card>
  );
};

export default JobCard;
