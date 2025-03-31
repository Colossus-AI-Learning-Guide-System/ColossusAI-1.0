"use client";
import React, { FormEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { toast } from "react-hot-toast";

const Signup = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // States for password visibility and validation
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // Add these new states after the existing states
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(true);

  const validatePassword = (password: string) => {
    const errors = [];
    if (password.length < 8) {
      errors.push("At least 8 characters long");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("One uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("One lowercase letter");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("One number");
    }
    if (!/[!@#$%^&*]/.test(password)) {
      errors.push("One special character (!@#$%^&*)");
    }
    return errors;
  };

  // Real-time password validation
  useEffect(() => {
    if (formData.password) {
      const errors = validatePassword(formData.password);
      setPasswordErrors(errors);
      setIsPasswordValid(errors.length === 0);
    } else {
      setPasswordErrors([]);
      setIsPasswordValid(false);
    }
  }, [formData.password]);

  // Real-time password match validation
  useEffect(() => {
    if (formData.confirmPassword) {
      setPasswordsMatch(formData.password === formData.confirmPassword);
    }
  }, [formData.password, formData.confirmPassword]);

  // Add these validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateUsername = (username: string) => {
    return (
      username.length >= 3 &&
      username.length <= 20 &&
      /^[a-zA-Z0-9_]+$/.test(username)
    );
  };

  // Add these useEffects for real-time validation
  useEffect(() => {
    if (formData.email) {
      setIsEmailValid(validateEmail(formData.email));
    } else {
      setIsEmailValid(true);
    }
  }, [formData.email]);

  useEffect(() => {
    if (formData.username) {
      setIsUsernameValid(validateUsername(formData.username));
    } else {
      setIsUsernameValid(true);
    }
  }, [formData.username]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("All fields are required");
      return;
    }

    if (!isUsernameValid) {
      toast.error("Invalid username format");
      return;
    }

    if (!isEmailValid) {
      toast.error("Invalid email format");
      return;
    }

    if (!isPasswordValid) {
      toast.error("Please fix password requirements");
      return;
    }

    if (!passwordsMatch) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      toast.success("Account created successfully!");
      router.push("/login");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white font-sans">
      <h1 className="text-4xl font-bold">Welcome!</h1>
      <h2 className="text-2xl text-gray-600 mt-2">Create your account</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full max-w-xs mt-6"
      >
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username (3-20 characters, letters, numbers, underscore)"
          className={`w-full px-4 py-3 mb-1 border-2 ${
            formData.username && !isUsernameValid
              ? "border-red-300"
              : "border-gray-300"
          } rounded-full text-base bg-gray-50 focus:outline-none focus:border-gray-400`}
        />
        {formData.username && !isUsernameValid && (
          <div className="w-full mb-4 text-sm text-red-500">
            • Username must be 3-20 characters and contain only letters,
            numbers, and underscores
          </div>
        )}

        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className={`w-full px-4 py-3 mb-1 border-2 ${
            formData.email && !isEmailValid
              ? "border-red-300"
              : "border-gray-300"
          } rounded-full text-base bg-gray-50 focus:outline-none focus:border-gray-400`}
        />
        {formData.email && !isEmailValid && (
          <div className="w-full mb-4 text-sm text-red-500">
            • Please enter a valid email address
          </div>
        )}

        <div className="w-full relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create Password"
            className={`w-full px-4 py-3 mb-1 border-2 ${
              formData.password && !isPasswordValid
                ? "border-red-300"
                : "border-gray-300"
            } rounded-full text-base bg-gray-50 focus:outline-none focus:border-gray-400 pr-12`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3 text-gray-600 hover:text-gray-800"
          >
            {showPassword ? <LuEye /> : <LuEyeClosed />}
          </button>
        </div>

        {/* Password requirements list */}
        {formData.password && !isPasswordValid && (
          <div className="w-full mb-4 text-sm">
            <p className="text-gray-600 mb-1">Password must have:</p>
            <ul className="space-y-1">
              {passwordErrors.map((error, index) => (
                <li key={index} className="text-red-500 flex items-center">
                  <span className="mr-1">•</span>
                  {error}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="w-full relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className={`w-full px-4 py-3 mb-1 border-2 ${
              formData.confirmPassword && !passwordsMatch
                ? "border-red-300"
                : "border-gray-300"
            } rounded-full text-base bg-gray-50 focus:outline-none focus:border-gray-400 pr-12`}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-3 text-gray-600 hover:text-gray-800"
          >
            {showConfirmPassword ? <LuEye /> : <LuEyeClosed />}
          </button>
        </div>

        {/* Password match indicator */}
        {formData.confirmPassword && !passwordsMatch && (
          <div className="w-full mb-4 text-sm text-red-500">
            • Passwords do not match
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-3 bg-gray-800 text-white rounded-full text-base font-medium hover:bg-gray-700 transition-colors disabled:bg-gray-400"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Creating Account...
            </div>
          ) : (
            "Create Account"
          )}
        </button>

        <div className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </form>

      <footer className="absolute bottom-5 w-full text-center text-xs text-gray-500 opacity-60">
        Copyright © Colossus.AI Rights Reserved
      </footer>
    </div>
  );
};

export default Signup;
import React from 'react';

const Signup: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white font-sans">
      <h1 className="text-center text-2xl font-bold">Welcome!</h1>
      <p className="text-center text-gray-600 mt-2">Signup to your account</p>
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
