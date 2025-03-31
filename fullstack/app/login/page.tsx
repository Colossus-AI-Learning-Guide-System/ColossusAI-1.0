"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      toast.success("Logged in successfully!");
      router.push("/chatbot");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Invalid credentials"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white font-sans">
      <h2 className="text-3xl text-gray-800 mb-2">Let's get</h2>
      <h1 className="text-4xl font-bold text-center">Started!</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full max-w-xs mt-6"
      >
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full px-4 py-3 mb-4 border-2 border-gray-300 rounded-full text-base bg-gray-50 focus:outline-none focus:border-gray-400"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full px-4 py-3 mb-6 border-2 border-gray-300 rounded-full text-base bg-gray-50 focus:outline-none focus:border-gray-400"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-3 bg-gray-800 text-white rounded-full text-base font-medium hover:bg-gray-700 transition-colors disabled:bg-gray-400"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Logging in...
            </div>
          ) : (
            "Login"
          )}
        </button>

        <div className="mt-4 text-sm text-gray-600">
          Not Registered?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Create an account
          </Link>
        </div>
      </form>

      <footer className="absolute bottom-5 w-full text-center text-xs text-gray-500 opacity-60">
        Copyright © Colossus.AI Rights Reserved
      </footer>
    </div>
  );
};

export default Login;
