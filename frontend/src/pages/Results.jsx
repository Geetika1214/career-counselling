import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };

  // Determine the career suggestion based on the score
  const getCareerSuggestion = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 80) return "Software Development";
    if (percentage >= 50) return "UI/UX Design";
    return "Basic Programming Concepts";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Quiz Completed!</h2>
        <p className="text-lg text-gray-700 mt-2">
          Your Score: <span className="font-bold">{score}</span> / {totalQuestions}
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Recommended Career Path: <span className="font-bold">{getCareerSuggestion()}</span>
        </p>

        <div className="mt-6 space-y-3">
          <button
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
            onClick={() => navigate("/quiz")}
          >
            Retake Quiz
          </button>
          <button
            className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition"
            onClick={() => navigate("/roadmap")}
          >
            View Career Roadmap
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
