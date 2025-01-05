'use client';

import RateUsForm from './rate-us-form'
import React from 'react'
import Navbar from '../navbar/page'
import Footer from '../footer/page';
import NetworkAnimation from '../components/networkanimation/networkanimation';

export default function RateUsPage() {
  return (
    <div>
      <Navbar />
      <NetworkAnimation />
      <div className="container my-36 px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Rate Our Work</h1>
        <RateUsForm />
      </div>
      <Footer />
    </div>
    
  )
}

