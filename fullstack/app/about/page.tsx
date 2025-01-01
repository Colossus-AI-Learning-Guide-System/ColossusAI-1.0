import React from 'react'
import Navbar from '../navbar/page';
import Footer from '../footer/page';

function about() {
  return (
    <div>
        <Navbar />
        <h1 className="text-3xl font-bold text-center my-96">About</h1>
        <Footer />
    </div>
  )
}

export default about