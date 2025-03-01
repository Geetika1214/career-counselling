import React from "react";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-slate-400 to-slate-700 px-4">
      <div className=" bg-opacity-5 backdrop-blur-lg p-8 rounded-xl shadow-2xl flex w-full max-w-4xl">
      {/* Left Side Illustration */}
        <div className="w-1/2 flex flex-col items-center justify-center p-6 rounded-lg">
          <img
            src="https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.jpg?s=612x612&w=0&k=20&c=hZ14F6Fa4edYWwg0BduAj0is8gdcORsBBHpQcQbAPKc="
            alt="Signup Illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        {/* Right Side Form */}
        <div className="w-1/2 flex flex-col justify-center p-6">
        <h2 className="text-3xl font-extrabold text-black text-center mb-6">
          Sign Up
        </h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full p-3 border-none rounded-lg bg-slate-400 bg-opacity-30 text-white placeholder-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border-none rounded-lg bg-slate-400 bg-opacity-30 text-white placeholder-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border-none rounded-lg bg-slate-400 bg-opacity-30 text-white placeholder-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 focus:ring-black" />
              <span className="text-sm text-black-600">
                Agree to Our terms and conditions
              </span>
            </div>
            <button className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-600">
              Continue
            </button>
          </form>
          <p className="text-center text-sm text-black-600 mt-4">
            Already registered? <a href="/signin" className="text-slate-900 font-bold">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
