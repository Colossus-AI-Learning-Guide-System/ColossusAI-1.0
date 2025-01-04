"use client";
import React, { FormEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { LuEye, LuEyeClosed } from "react-icons/lu";
import {
  validatePassword,
  validateUsername,
  validateEmail,
} from "@/lib/utils/validation";

const Signup: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Validation states
  const [validationErrors, setValidationErrors] = useState({
    username: [] as string[],
    email: [] as string[],
    password: [] as string[],
  });
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    messages: [] as string[],
  });

  // Add new states for hover
  const [isPasswordHovered, setIsPasswordHovered] = useState(false);
  const [isConfirmPasswordHovered, setIsConfirmPasswordHovered] =
    useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Auto-focus username field on mount
  useEffect(() => {
    const usernameInput = document.querySelector(
      'input[name="username"]'
    ) as HTMLInputElement;
    if (usernameInput) usernameInput.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Real-time validation
    if (name === "username") {
      setValidationErrors((prev) => ({
        ...prev,
        username: validateUsername(value),
      }));
    } else if (name === "email") {
      setValidationErrors((prev) => ({
        ...prev,
        email: validateEmail(value),
      }));
    } else if (name === "password") {
      const strength = validatePassword(value);
      setPasswordStrength(strength);
    }
  };

  const getPasswordStrengthColor = () => {
    const score = passwordStrength.score;
    if (score <= 1) return "bg-red-500";
    if (score <= 3) return "bg-yellow-500";
    return "bg-green-500";
  };

  const isPasswordValid = (password: string) => {
    const validation = validatePassword(password);
    return validation.score === 5; // Perfect score means all criteria are met
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Final validation before submission
    const usernameErrors = validateUsername(formData.username);
    const emailErrors = validateEmail(formData.email);
    const passwordValidation = validatePassword(formData.password);

    const allErrors = {
      username: usernameErrors,
      email: emailErrors,
      password: passwordValidation.messages,
    };

    setValidationErrors(allErrors);

    if (Object.values(allErrors).some((errors) => errors.length > 0)) {
      setError("Please fix all validation errors before submitting");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

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
        throw new Error(data.message || "Something went wrong");
      }

      router.push("/login");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white font-sans">
      <h1 className="text-center text-4xl font-bold">Welcome!</h1>
      <h2 className="text-center text-2xl text-gray-600 mt-2">
        Signup to your account
      </h2>

      {error && (
        <div className="w-full max-w-md mt-4 p-4 text-red-500 bg-red-50 rounded-lg text-center animate-shake">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full max-w-md mt-4"
      >
        <div className="w-full relative">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className={`w-full px-4 py-3 mb-1 border-2 ${
              validationErrors.username.length > 0
                ? "border-red-300"
                : "border-gray-300"
            } rounded-full text-base focus:outline-none focus:border-gray-500`}
            required
          />
          {validationErrors.username.length > 0 && (
            <div className="text-xs text-red-500 ml-4 mb-2">
              {validationErrors.username.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          )}
        </div>

        <div className="w-full relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className={`w-full px-4 py-3 mb-1 border-2 ${
              validationErrors.email.length > 0
                ? "border-red-300"
                : "border-gray-300"
            } rounded-full text-base focus:outline-none focus:border-gray-500`}
            required
          />
          {validationErrors.email.length > 0 && (
            <div className="text-xs text-red-500 ml-4 mb-2">
              {validationErrors.email.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          )}
        </div>

        <div
          className="w-full relative"
          onMouseEnter={() => setIsPasswordHovered(true)}
          onMouseLeave={() => setIsPasswordHovered(false)}
        >
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create Password"
            className="w-full px-4 py-3 mb-1 border-2 border-gray-300 rounded-full text-base focus:outline-none focus:border-gray-500 pr-12"
            required
          />
          {isPasswordHovered && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-gray-600 hover:text-gray-800"
            >
              {showPassword ? <LuEye /> : <LuEyeClosed />}
            </button>
          )}
        </div>

        {/* Password strength indicator */}
        {formData.password && !isPasswordValid(formData.password) && (
          <div className="w-full mb-4">
            <div className="h-1 w-full bg-gray-200 rounded-full">
              <div
                className={`h-full ${getPasswordStrengthColor()} rounded-full transition-all duration-300`}
                style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
              />
            </div>
            <div className="text-xs text-gray-600 mt-1">
              {passwordStrength.messages.map((msg, index) => (
                <div key={index} className="flex items-center">
                  <span className="mr-1">•</span>
                  {msg}
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          className="w-full relative"
          onMouseEnter={() => setIsConfirmPasswordHovered(true)}
          onMouseLeave={() => setIsConfirmPasswordHovered(false)}
        >
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full px-4 py-3 mb-4 border-2 border-gray-300 rounded-full text-base focus:outline-none focus:border-gray-500 pr-12"
            required
          />
          {isConfirmPasswordHovered && (
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-3 text-gray-600 hover:text-gray-800"
            >
              {showConfirmPassword ? <LuEye /> : <LuEyeClosed />}
            </button>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full max-w-[50%] px-4 py-3 bg-gray-800 text-white rounded-full text-base font-medium hover:bg-gray-700 transition-colors disabled:bg-gray-400 relative"
        >
          {loading ? (
            <>
              <span className="opacity-0">Create Account</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </div>
            </>
          ) : (
            "Create Account"
          )}
        </button>

        <p className="mt-4 text-sm text-gray-600">
          Already Registered?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </form>

      <footer className="absolute bottom-5 w-full text-center text-xs text-gray-500 opacity-60">
        Copyright © Colossus.AI Rights Reserved
      </footer>
    </div>
  );
};

export default Signup;
