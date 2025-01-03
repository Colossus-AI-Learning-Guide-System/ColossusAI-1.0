import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white font-sans">
      <h2 className="text-3xl text-gray-800 mb-2">Let's get</h2>
      <h1 className="text-4xl font-bold text-center">Started!</h1>
      <form className="flex flex-col items-center w-full max-w-xs mt-6">
        <input
          type="text"
          placeholder="Email address / Username"
          className="w-full px-4 py-3 mb-4 border-2 border-gray-300 rounded-full text-base bg-gray-50 focus:outline-none focus:border-gray-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 mb-6 border-2 border-gray-300 rounded-full text-base bg-gray-50 focus:outline-none focus:border-gray-400"
        />
        <button
          type="submit"
          className="w-full px-4 py-3 bg-gray-800 text-white rounded-full text-base font-medium hover:bg-gray-700 transition-colors"
        >
          Login
        </button>
        <div className="mt-4 text-sm text-gray-600">
          Not Registered?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Create an account
          </a>
        </div>
        <button
          className="w-full px-4 py-3 mt-4 bg-gray-200 text-gray-800 rounded-full text-base font-medium flex items-center justify-center hover:bg-gray-300 transition-colors"
        >
          <FaGoogle className="mr-2" />
          Continue with Google
        </button>
      </form>
      <footer className="absolute bottom-5 w-full text-center text-xs text-gray-500 opacity-60">
        Copyright © Colossus.AI Rights Reserved
      </footer>
    </div>
  );
};

export default Login;