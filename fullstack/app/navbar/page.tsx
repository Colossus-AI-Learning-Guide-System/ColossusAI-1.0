import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/SDGP_logo.png';

const navbar = () => {
  return (
    <div>
        <header>
        <nav className="container flex justify-between items-center">
          <div className="logo flex items-center">
            <Image src={Logo} alt="Colossus.AI Logo" width={40} height={40} />
            <span className="ml-2 text-2xl font-bold">
              <Link href="/" className="brand-name text-white">Colossus.AI</Link>
            </span>
          </div>

          <ul className="nav-links flex  space-x-10">
            {/* <li>
              <Link href="#features" className=" hover:text-blue-500">
                Features
              </Link>
            </li> */}
            <li>
              <Link href="/feedback" className="hover:text-blue-500">
                Feedback
              </Link>
            </li>
            <li>
              <Link href="/rateus" className="hover:text-blue-500">
                Rate us
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/contactus" className="hover:text-blue-500">
                Contact Us
              </Link>
            </li>
            <li className="flex">
              <div className='block bg-gray-500 px-4 py-2 rounded-full'>
              <Link href="/login" className="hover:text-blue-500">
                Login
              </Link>
              </div>
              <div className='block bg-black  px-4 py-2 rounded-full'>
              <Link href="/Signup" className="hover:text-blue-500">
                Signup
              </Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default navbar