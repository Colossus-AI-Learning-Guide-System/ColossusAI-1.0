import Link from 'next/link'
import { Facebook, Youtube, Instagram, Linkedin, Twitter, DiscIcon as Discord, Github, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <Link href="https://www.facebook.com/colossusai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://www.youtube.com/@ColossusAI" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <Youtube size={24} />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="https://www.instagram.com/colossusailk" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://www.linkedin.com/company/colossusai/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://x.com/colossusailk" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://github.com/Colossus-AI-Learning-Guide-System" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="mailto:contact@example.com" className="text-white hover:text-gray-300">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <div className="text-center">
            <p>Copyrights © Colossus.AI 2025 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

