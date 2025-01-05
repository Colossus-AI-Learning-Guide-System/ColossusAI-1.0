'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Youtube, Instagram, Linkedin, Twitter, Github, Mail } from "lucide-react";
import Link from "next/link";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import NetworkAnimation from '../components/networkanimation/networkanimation';
import './contactus.css';

// Define the DiscordWidget component
type DiscordWidgetProps = {
  id: string;
  theme?: "light" | "dark";
  width?: number | string;
  height?: number | string;
};

const DiscordWidget: React.FC<DiscordWidgetProps> = ({
  id,
  theme = "dark",
  width = 350,
  height = 500,
}) => {
  return (
    <iframe
      src={`https://discord.com/widget?id=${id}&theme=${theme}`}
      width={width}
      height={height}
      allowTransparency={true}
      frameBorder="0"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    ></iframe>
  );
};

// Social links data
const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/colossusai" },
  { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@ColossusAI" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/colossusailk" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/colossusai/" },
  { name: "Twitter", icon: Twitter, url: "https://x.com/colossusailk" },
  { name: "GitHub", icon: Github, url: "https://github.com/Colossus-AI-Learning-Guide-System" },
];

// Define the page component
const ContactPage: React.FC = () => {
  return (
    <div className="mt-40 ml-auto mr-auto">
      <Navbar />
      <NetworkAnimation />
      <div className="mx-auto my-10 px-4 z-10">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto my-10">
          {socialLinks.map((link) => (
            <Link href={link.url} key={link.name} target="_blank" rel="noopener noreferrer">
              <Card className="hover:bg-secondary transition-colors duration-200 h-32">
                <CardContent className="flex flex-col items-center justify-center h-full p-4">
                  <link.icon className="w-8 h-8 mb-2" />
                  <span className="text-lg font-semibold text-center">{link.name}</span>
                </CardContent>
              </Card>
            </Link>
          ))}

          <div className="mb-10">
                <h1 className="text-2xl font-bold text-center mb-4">Join Our Discord</h1>
                <div className="flex justify-center ml-auto mr-auto">
                  <DiscordWidget id="1296419198632722543"/>
                </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
