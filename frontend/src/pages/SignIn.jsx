import React from "react";

const Signin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-slate-400 to-slate-700 px-4">
      <div className=" bg-opacity-5 backdrop-blur-lg p-8 rounded-xl shadow-2xl flex w-full max-w-4xl">
        {/* Left Side Illustration */}
        <div className="hidden md:flex w-1/2 flex-col items-center justify-center p-6">
          <img
            src="https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.jpg?s=612x612&w=0&k=20&c=hZ14F6Fa4edYWwg0BduAj0is8gdcORsBBHpQcQbAPKc="
            alt="Signin Illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6">
          <h2 className="text-3xl font-extrabold text-black text-center mb-6">
            Welcome Back!
          </h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border-none rounded-lg bg-slate-400 bg-opacity-30 text-white placeholder-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border-black-200 rounded-lg bg-slate-400 bg-opacity-30 text-white placeholder-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-600 transition transform hover:scale-105">
              Sign In 🚀
            </button>
          </form>

          <p className="text-center text-sm text-white mt-4">
            New User?{" "}
            <a href="/signup" className="text-slate-800 font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
