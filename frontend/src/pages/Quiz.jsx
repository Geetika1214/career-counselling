import React from "react";
import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft } from "lucide-react";

const Quiz = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="relative w-[90%] max-w-3xl bg-white shadow-lg p-6 rounded-lg">
        <button
          className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md"
          onClick={() => navigate(-1)}
        >
          {/* <ArrowLeft className="h-6 w-6 text-gray-700" /> */}
        </button>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3248/3248148.png"
              alt="Quiz Icon"
              className="w-40 h-40 object-contain"
            />
            <div className="ml-6 bg-blue-900 p-6 rounded-lg shadow-lg">
              <h1 className="text-white text-xl font-semibold">Let’s Play Edu Quiz</h1>
              <p className="text-gray-200 mt-2">By: Code Crafters</p>
            </div>
          </div>
          {/* <Button
            className="mt-6 px-6 py-2 bg-blue-300 hover:bg-blue-400 text-red-600 font-semibold rounded-lg shadow-md"
            onClick={() => navigate("/quiz")}
          >
            Next
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
