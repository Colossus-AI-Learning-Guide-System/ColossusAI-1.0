'use client';

import React from 'react'
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import NetworkAnimation from '../components/networkanimation/networkanimation';

function features() {
  return (
    <div>
      <Navbar />
      <NetworkAnimation />
      <h1 className="text-3xl font-bold text-center my-96">Features</h1>
      <Footer />
    </div>
  )
}

export default features