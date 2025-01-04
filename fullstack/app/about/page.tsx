import React from 'react'
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import Image from 'next/image';
import Ruhan from '../assets/ruhan.jpg';

function about() {
  return (
    <div>
        <Navbar />
        <div>
          <div>
            <Image src={Ruhan} alt="Ruhan" width={500} height={500} priority/>
            Ruhan
          </div>
          <div>Akila</div>
          <div>Tharana</div>
          <div>Chiran</div>
          <div>Pasidu</div>
          <div>Sudesh</div>
        </div>
        <h1 className="text-3xl font-bold text-center my-96">About</h1>
        <Footer />
    </div>
  )
}

export default about