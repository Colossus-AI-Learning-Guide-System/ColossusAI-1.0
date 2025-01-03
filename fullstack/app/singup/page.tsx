import React from 'react';

const Signup: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white font-sans">
      <h1 className="text-center text-4xl font-bold">Welcome!</h1>
      <h2 className="text-center text-2xl text-gray-600 mt-2">Signup to your account</h2>
      <form className="flex flex-col items-center w-full max-w-md mt-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-3 mb-4 border-2 border-gray-300 rounded-full text-base focus:outline-none focus:border-gray-500"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 mb-4 border-2 border-gray-300 rounded-full text-base focus:outline-none focus:border-gray-500"
        />
        <input
          type="password"
          placeholder="Create Password"
          className="w-full px-4 py-3 mb-4 border-2 border-gray-300 rounded-full text-base focus:outline-none focus:border-gray-500"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-4 py-3 mb-4 border-2 border-gray-300 rounded-full text-base focus:outline-none focus:border-gray-500"
        />
        <button
          type="submit"
          className="w-full max-w-[50%] px-4 py-3 bg-gray-800 text-white rounded-full text-base font-medium hover:bg-gray-700 transition-colors"
        >
          Create Account
        </button>
        <p className="mt-4 text-sm text-gray-600">
          Already Registered?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </form>
      <footer className="absolute bottom-5 w-full text-center text-xs text-gray-500 opacity-60">
        Copyright © Colossus.AI Rights Reserved
      </footer>
    </div>
  );
};

export default Signup;