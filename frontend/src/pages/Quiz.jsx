import React, { useState } from "react";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-600 to-slate-700 text-white relative">

      {/* Background Blurred Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500 opacity-30 blur-2xl rounded-full"></div>
      </div>

      {/* View 1: Welcome Screen */}
      {view === "welcome" && (
        <div className="flex w-3/4 max-w-4xl bg-white p-8 rounded-lg shadow-lg">
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
            <img src="https://source.unsplash.com/300x300/?education,quiz" alt="Quiz Start" className="rounded-lg shadow-lg" />
          </div>
        </div>
      )}

      {/* View 2: Quiz Questions */}
      {view === "questions" && (
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-3/4 max-w-xl text-center">
          <h2 className="text-xl font-bold">{dummyQuestions[currentQuestionIndex].question}</h2>
          <div className="mt-4">
            {dummyQuestions[currentQuestionIndex].options.map((option, index) => (
              <button key={index} className="block w-full p-2 my-2 border rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            className="mt-4 bg-slate-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-500 transition"
          >
            {currentQuestionIndex === dummyQuestions.length - 1 ? "Finish Quiz" : "Next"}
          </button>
        </div>
      )}

      {/* View 3: End of Quiz */}
      {view === "end" && (
        <div className="text-center bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-lg">
          <h1 className="text-3xl font-bold text-gray-800">Quiz Completed!</h1>
          <p className="text-gray-600 mt-2">Thank you for participating.</p>
          <button
            onClick={() => console.log("Go to results page")}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-green-700 transition"
          >
            View Results
          </button>
        </div>
      )}

    </div>
  );
};

export default Quiz;
