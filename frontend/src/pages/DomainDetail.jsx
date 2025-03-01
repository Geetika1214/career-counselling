import React from "react";
import { useParams } from "react-router-dom";

const DomainDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-slate-700">
        More details about {id.replace("-", " ")}
      </h1>
    </div>
  );
};

export default DomainDetail;
