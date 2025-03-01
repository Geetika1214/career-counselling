import React, { useState, useEffect } from "react";

const Quiz = () => {
  const [view, setView] = useState("welcome"); // "welcome", "questions", "end"
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    // Fetch questions from backend
    fetch("YOUR_BACKEND_API_URL")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error("Error fetching questions:", err));
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setView("end"); // Move to end view
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-500 to-slate-600 text-white">

      {/* Background view */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 opacity-20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500 opacity-30 blur-2xl rounded-full"></div>
        </div>



      {view === "welcome" && (
        <div className="text-center w-3/4 max-w-xl">
          <h1 className="text-4xl font-bold">Welcome to the Quiz</h1>
          <p className="mt-3">Made by CodeCrafters</p>
          <button
            onClick={() => setView("questions")}
            className="mt-6 bg-slate-900 text-white-900 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-indigo-400"
          >
            Start Quiz
          </button>
        </div>
      )}

      {view === "questions" && questions.length > 0 && (
        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-3/4 max-w-xl text-center">
          <h2 className="text-xl font-bold">{questions[currentQuestionIndex]?.question}</h2>
          <div className="mt-4">
            {questions[currentQuestionIndex]?.options?.map((option, index) => (
              <button key={index} className="block w-full p-2 my-2 border rounded-lg bg-gray-100 hover:bg-gray-200">
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            className="mt-4 bg-slate-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-500"
          >
            Next
          </button>
        </div>
      )}

      {view === "end" && (
        <div className="text-center">
          <h1 className="text-4xl font-bold">Quiz Completed!</h1>
          <button
            onClick={() => console.log("Go to results")}
            className="mt-6 bg-aquablue-400 text-gray-900 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-yellow-300"
          >
            Check Results
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
