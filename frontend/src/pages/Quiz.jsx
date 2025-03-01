import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const dummyQuestions = [
  { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Machine Learning", "Hyperlink and Text Markup Language", "Home Tool Markup Language"] },
  { question: "Which CSS property controls the text size?", options: ["font-style", "text-size", "font-size", "text-style"] },
  { question: "Which JavaScript keyword is used to declare a variable?", options: ["let", "variable", "v", "var"] }
];

const Quiz = () => {
  const [view, setView] = useState("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < dummyQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setView("end"); // Move to completion view
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4">
      
      {/* View 1: Welcome Screen */}
      {view === "welcome" && (
        <div className="flex w-full max-w-2xl bg-gray-300 p-10 rounded-lg shadow-lg h-120">
          {/* Back Button */}
          <Link 
            to="/" 
            className="absolute top-4 left-4 text-gray-700 hover:text-black transition flex items-center space-x-2"
          >
            <span className="text-4xl text-black" ><FaArrowAltCircleLeft /> </span>
          </Link>

          <div className="w-1/2 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-gray-800">Welcome to the Quiz</h1>
            <p className="text-gray-600 mt-2">Test your knowledge!</p>
            <button
              onClick={() => setView("questions")}
              className="mt-6 bg-slate-900 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-indigo-400 transition"
            >
              Start Quiz
            </button>
          </div>
          <div className="w-1/2 flex justify-center">
            <img src="https://www.paramed.app/assets/osteo/hero-0482db07d46c857b9f004fe478401b622cba5e47a4c9160dae03bcfd6ff95c5e.svg" 
              alt="Quiz Start" 
              className="rounded-lg shadow-lg w-3/4"
            />
          </div>
        </div>
      )}

      {/* view2 */}
      {view === "questions" && (
        <div className="flex flex-col items-center w-full max-w-3xl bg-white/30 backdrop-blur-lg p-10 rounded-2xl shadow-xl border border-white/40">
          
          {/* Question Text */}
          <h2 className="text-3xl font-bold text-black  text-center">{dummyQuestions[currentQuestionIndex].question}</h2>
          
          {/* Options Container */}
          <div className="mt-6 w-full space-y-4">
            {dummyQuestions[currentQuestionIndex].options.map((option, index) => (
              <button 
                key={index} 
                className="block w-full p-3 text-lg border border-white/50 rounded-lg bg-white/20 text-black shadow-md 
                          hover:bg-gradient-to-r hover:from-slate-500 hover:to-indigo-500 hover:text-white transition-all duration-300"
              >
                {option}
              </button>
            ))}
          </div>
          
          {/* Next Button */}
          <button
            onClick={handleNextQuestion}
            className="mt-8 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg 
                      shadow-lg hover:scale-105 transform transition duration-300"
          >
            {currentQuestionIndex === dummyQuestions.length - 1 ? "Finish Quiz" : "Next"}
          </button>
        </div>
      )}


      {/* View 3: End of Quiz */}
      {view === "end" && (
        <div className="flex flex-col items-center  max-w-xl bg-gray-300 p-10 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800">Quiz Completed!</h1>
          <p className="text-gray-600 mt-2">Thank you for participating.</p>
          <button
            onClick={() => console.log("Go to results page")}
            className="mt-6 bg-slate-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-slate-700 transition"
          >
            <a href="/results">View Results</a>
          </button>
        </div>
      )}

    </div>
  );
};

export default Quiz;
