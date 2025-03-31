'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Banner from './assets/colossusAI gradient text.png';
import CanvasCursor from './components/canvacursor/page';
import Navbar from './navbar/page';
import Footer from './footer/page';
import NetworkAnimation from './components/networkanimation/networkanimation';
import { TypeWriter } from './components/ui/type-writer';
import Getstarted from './signup/page';


function Page() {
  return (
    <main>
      <Navbar />
      <NetworkAnimation />
      <section className="hero relative bg-black text-white">
        <canvas id="network-animation" className="network-bg absolute inset-0"></canvas>
        <div className="container relative z-10 text-center py-20">
          <div className="flex justify-center my-0">
            <Image src={Banner} alt="ColossusAI Logo" width={1000} height={300} priority/>
          </div>
          <div className="hero-content mt-9">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold">
                <TypeWriter text="The Future of AI is Here" className="text-primary" speed={80}/>
              </h1>
            </div>
            <h5 className="mb-6 text-white my-28">
              <b>Experience the power of advanced Artificial Intelligence with <br />Colossus.AI, revolutionizing education through
              intelligent, adaptive, and <br />personalized learning experiences that empower users <br />to achieve their full potential.</b>
            </h5>
          </div>
        </div>
      </section>
      <CanvasCursor />
      <Footer />
    </main>
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to AI Chatbot</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Start Chatting</CardTitle>
            <CardDescription>Interact with our AI-powered chatbot</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Ask questions, get insights, and explore your data with our advanced AI assistant.</p>
          </CardContent>
          <CardFooter>
            <Link href="/chatbot/interface">
              <Button>Go to Chatbot</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upload Documents</CardTitle>
            <CardDescription>Enhance the chatbot&apos;s knowledge</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Upload your documents to create a custom knowledge base for the chatbot.</p>
          </CardContent>
          <CardFooter>
            <Link href="/chatbot/interface">
              <Button variant="outline">Upload Files</Button>
            </Link>
          </CardFooter>
        </Card>
"use client";

import Image from "next/image"
import { useState } from "react";
import Link from "next/link";
import { MoreVertical, User, Settings, Palette, CreditCard, LogOut } from "lucide-react";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-end items-start h-screen p-6">
      {/* Settings Panel */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
        >
          <MoreVertical className="h-5 w-5" />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-gray-100 rounded-lg shadow-lg z-10">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/account" className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  <span>Account</span>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/settings" className="flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </li>
              {/* <li className="px-4 py-2 flex hover:bg-gray-200">
                <Palette className="mr-2 h-4 w-4" />
                <span>Customization</span>
              </li>
              <li className="px-4 py-2 flex hover:bg-gray-200">
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Upgrade Plan</span>
              </li> */}
              <li className="px-4 py-2 flex hover:bg-gray-200 text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log Out</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;