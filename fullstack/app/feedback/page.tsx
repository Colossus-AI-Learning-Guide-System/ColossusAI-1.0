'use client';

import React from 'react'
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import NetworkAnimation from '../components/networkanimation/networkanimation';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const Feedback = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    isFirstTime: "",
    isUserFriendly: "",
    reason: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Validate form
      if (
        !formData.name ||
        !formData.email ||
        !formData.isFirstTime ||
        !formData.isUserFriendly
      ) {
        toast.error("Please fill in all required fields");
        return;
      }

      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit feedback");
      }

      toast.success("Feedback submitted successfully!");
      // Reset form
      setFormData({
        name: "",
        email: "",
        isFirstTime: "",
        isUserFriendly: "",
        reason: "",
      });
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to submit feedback. Please try again."
      );
    }
  };

  return (
    <div>
      <Navbar />
      <NetworkAnimation />
      <div className="min-h-screen bg-[url('/feedback-bg.jpg')] bg-cover bg-center p-8 mt-32">
      <div className="max-w-2xl mx-auto bg-black/40 backdrop-blur-sm p-8 rounded-lg text-white">
        <h1 className="text-4xl font-bold mb-8">Leave us your feedback...</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 focus:outline-none focus:border-white/60"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block mb-2">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your E-mail"
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 focus:outline-none focus:border-white/60"
            />
          </div>

          {/* First Time Visit Radio */}
          <div>
            <label className="block mb-2">
              Was this is your first time visting?
            </label>
            <div className="space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="isFirstTime"
                  value="yes"
                  checked={formData.isFirstTime === "yes"}
                  onChange={() => handleRadioChange("isFirstTime", "yes")}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="isFirstTime"
                  value="no"
                  checked={formData.isFirstTime === "no"}
                  onChange={() => handleRadioChange("isFirstTime", "no")}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          {/* User Friendly Radio */}
          <div>
            <label className="block mb-2">
              Was the website innovative and user-friendly?
            </label>
            <div className="space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="isUserFriendly"
                  value="yes"
                  checked={formData.isUserFriendly === "yes"}
                  onChange={() => handleRadioChange("isUserFriendly", "yes")}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="isUserFriendly"
                  value="no"
                  checked={formData.isUserFriendly === "no"}
                  onChange={() => handleRadioChange("isUserFriendly", "no")}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          {/* Reason Textarea */}
          <div>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Provide your feedback here..."
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 focus:outline-none focus:border-white/60 h-32"
            />
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="py-3 px-6 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Submit
            </button>
            {/* <button
              type="button"
              onClick={() => router.back()}
              className="w-1/2 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Cancel
            </button> */}
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </div>
    
  );
};

export default Feedback;