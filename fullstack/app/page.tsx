import React from 'react';
import Image from 'next/image';
import Banner from './assets/colossusAI gradient text.png';
import CanvasCursor from './components/canvacursor/page';
import Navbar from './navbar/page';
import Footer from './footer/page';


function Page() {
  return (
    <main>
      <Navbar />
      <section className="hero relative bg-black text-white">
        <canvas id="network-animation" className="network-bg absolute inset-0"></canvas>
        <div className="container relative z-10 text-center py-20">
          <div className="flex justify-center my-24">
            <Image
              src={Banner}
              alt="ColossusAI Logo"
              width={1000}
              height={300}
              priority
            />
          </div>
          <div className="hero-content mt-9">
            <h1 className="text-4xl font-bold mb-4">The Future of AI is Here</h1>
            <p className="mb-6 text-white">
              <b>Experience the power of advanced artificial intelligence with Colossus.AI. Transform your business with
              cutting-edge AI solutions.</b>
            </p>
          </div>
        </div>
      </section>
      <CanvasCursor />
      <Footer />
    </main>
  );
}

export default Page;