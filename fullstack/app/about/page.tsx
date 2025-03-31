'use client';

import React from 'react'
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import './about.css';
import Image from 'next/image';
import Link from 'next/link';
import Ruhan from '../assets/ruhan.png';
import Akila from '../assets/akila.jpg';
import Tharana from '../assets/tharana.jpg';
import Chiran from '../assets/chiran.jpg';
import Pasidu from '../assets/pasindu.jpg';
import Sudesh from '../assets/sudesh.jpg';
import NetworkAnimation from '../components/networkanimation/networkanimation';
import { FaLinkedin } from "react-icons/fa";

function about() {
  return (
    <main>
        <Navbar />
        <NetworkAnimation />

        <div className="intro">
          <h3>DESIGNERS</h3>
        </div>

        <section className="head">
          <div className="container1">
            
            <div className="card">
              <div className="imgbx"><Image src={Ruhan} alt="ColossusAI Logo" width={1000} height={300} priority/></div>
                <div className="content">
                  <h2>Ruhan</h2>
                  <p>Back-end Coordinator<br />Back-end Developer</p>
                  <div className='personal-linkedin'>
                    <a href="https://www.linkedin.com/in/ruhan-nandalal-683387320/" className='a'><FaLinkedin className='icon'/>LinkedIn</a>
                  </div>
                </div>
            </div>

            <div className="card">
              <div className="imgbx"><Image src={Tharana} alt="ColossusAI Logo" width={1000} height={300} priority/></div>
                <div className="content">
                  <h2>Tharana</h2>
                  <p>Project Manager<br />Back-end Developer</p>
                  <div className='personal-linkedin'>
                    <a href="https://www.linkedin.com/in/tharana-bopearachchi/" className='a'><FaLinkedin className='icon'/>LinkedIn</a>
                  </div>
                </div>
            </div>

            <div className="card">
              <div className="imgbx"><Image src={Chiran} alt="ColossusAI Logo" width={1000} height={300} priority/></div>
                <div className="content">
                  <h2>Chiran</h2>
                  <p>Back-end Developer<br />UI Designer</p>
                  <div className='personal-linkedin'>
                    <a href="https://www.linkedin.com/in/chiran-senarath-088524235/" className='a'><FaLinkedin className='icon'/>LinkedIn</a>
                  </div>
                </div>
            </div>

            <div className="card">
              <div className="imgbx"><Image src={Sudesh} alt="ColossusAI Logo" width={1000} height={300} priority/></div>
                <div className="content">
                  <h2>Sudesh</h2>
                  <p>Frontend-end Coordinator<br />Front-end Developer</p>
                  <div className='personal-linkedin'>
                    <a href="https://www.linkedin.com/in/sudesharoshaseneviratne/" className='a'><FaLinkedin className='icon'/>LinkedIn</a>
                  </div>
                </div>
            </div>
            
            <div className="card">
              <div className="imgbx"><Image src={Akila} alt="ColossusAI Logo" width={1000} height={300} priority/></div>
                <div className="content">
                  <h2>Akila</h2>
                  <p>Front-end Developer<br />UI Designer</p>
                  <div className='personal-linkedin'>
                    <a href="https://www.linkedin.com/in/akila-senanayake-23aab42a7/" className='a'><FaLinkedin className='icon'/>LinkedIn</a>
                  </div>
                </div>
            </div>

            <div className="card">
              <div className="imgbx"><Image src={Pasidu} alt="ColossusAI Logo" width={1000} height={300} priority/></div>
                <div className="content">
                  <h2>Pasidu</h2>
                  <p>Front-end Developer<br />UI Designer</p>
                  <div className='personal-linkedin'>
                    <a href="https://www.linkedin.com/in/pasindu-gamage-14442015a/" className='a'><FaLinkedin className='icon'/>LinkedIn</a>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <Footer />
    </main>
  )
}

export default about