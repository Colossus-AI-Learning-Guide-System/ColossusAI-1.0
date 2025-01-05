'use client';

import React from 'react';
import Image from 'next/image';
import Banner from './assets/colossusAI gradient text.png';
import CanvasCursor from './components/canvacursor/page';
import Navbar from './navbar/page';
import Footer from './footer/page';
import NetworkAnimation from './components/networkanimation/networkanimation';
import { TypeWriter } from './components/ui/type-writer';


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
            <h5 className="mb-6 text-white">
              <b>Experience the power of advanced Artificial Intelligence with Colossus.AI, revolutionizing education through <br />
              intelligent, adaptive, and personalized learning experiences that empower users to achieve their full potential.</b>
            </h5>
          </div>
        </div>
        <div className="flex justify-center"><button className="btn btn-primary">Get Started</button></div>
      </section>
      <CanvasCursor />
      <Footer />
    </main>
  );
}

export default Page;