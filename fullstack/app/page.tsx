import React from 'react';
import Image from 'next/image';
import Banner from './assets/colossusAI gradient text.png';
import CanvasCursor from './components/canvacursor/page';
import Navbar from './navbar/page';
import Footer from './footer/page';
import NetworkAnimation from './components/networkanimation/networkanimation';


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
            <div className='typing-text-container'>
              <h1 className="text-4xl font-bold mb-4">The Future of AI is Here</h1>
            </div>
            <p className="mb-6 text-white">
              <b>Experience the power of advanced artificial intelligence with Colossus.AI. Transform your business with
              cutting-edge AI solutions.</b>
            </p>
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