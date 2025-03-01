import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar";


function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };

  // Determine the career suggestions based on the score
  const getCareerSuggestions = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 80)
      return [
        { title: "Software Development", img: "/images/software-dev.jpg", description: "Learn about algorithms, data structures, and full-stack development." },
        { title: "AI & Machine Learning", img: "/images/ai-ml.jpg", description: "Work on data science, deep learning, and AI models." },
        { title: "Cloud Computing", img: "/images/cloud-computing.jpg", description: "Master cloud technologies like AWS, Azure, and DevOps." }
      ];
    if (percentage >= 50)
      return [
        { title: "UI/UX Design", img: "/images/ui-ux.jpg", description: "Design user-friendly interfaces and enhance user experiences." },
        { title: "Front-End Development", img: "/images/frontend.jpg", description: "Work with React, Tailwind CSS, and build modern web apps." },
        { title: "Product Management", img: "/images/product-mgmt.jpg", description: "Learn product strategy, wireframing, and user research." }
      ];
    return [
      { title: "Basic Programming", img: "https://www.thoughtco.com/thmb/RZ1uGF7pgVHgwFHbnc8rXfD8GRQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-186359066-56b008ca5f9b58b7d01f9fc2.jpg", description: "Start with Python, JavaScript, and coding fundamentals." },
      { title: "Cybersecurity Basics", img: "https://cdn-icons-png.flaticon.com/512/6783/6783360.png", description: "Understand network security and ethical hacking." },
      { title: "Database Management", img: "https://cdn-icons-png.flaticon.com/512/8526/8526306.png", description: "Learn about SQL, MongoDB, and data handling." }
    ];
  };

  const careerOptions = getCareerSuggestions();

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 p-8">
      <Navbar />
      <div className="bg-white shadow-lg rounded-lg flex w-full max-w-5xl p-10 mt-16">

        {/* Left Side - 40% */}
        <div className="w-2/5 bg-slate-700 text-white p-6 flex flex-col justify-center items-center rounded-l-lg">
          <h2 className="text-3xl font-semibold text-center">Your Future Awaits!</h2>
          <p className="text-lg text-gray-300 text-center mt-4">
            "Your career path is shaped by your passion and dedication. Explore and conquer!"
          </p>
          <img src="https://media.licdn.com/dms/image/v2/D4D12AQGwhRDuF4OQwA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1688638198489?e=2147483647&v=beta&t=NuV8d7nO3j5fGZdPfHSjBTSnm0lk_yIx-TuMnI399Co" alt="Career Path" className="w-64 mt-6 rounded-lg shadow-md" />
        </div>

        {/* Right Side - 60% */}
        <div className="w-3/5 p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Your Recommended Career Paths</h2>
          
          {/* Career Cards */}
          <div className="space-y-4">
            {careerOptions.map((career, index) => (
              <div key={index} className="bg-slate-50 shadow-md p-4 rounded-lg flex items-center">
                <img src={career.img} alt={career.title} className="w-20 h-20 rounded-md shadow-md mr-4" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{career.title}</h3>
                  <p className="text-sm text-gray-600">{career.description}</p>
                </div>
                <button 
                  className="bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  // onClick={() => navigate(`/career-details/${career.title.toLowerCase().replace(/\s+/g, "-")}`)}
                  onClick={() => navigate(`/details`)}

                >
                  Details
                </button>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="mt-6 flex justify-between">
            <button 
              className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={() => navigate("/quiz")}
            >
              Retake Quiz
            </button>
            <button 
              className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              onClick={() => navigate("/roadmap")}
            >
              View Career Roadmap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
