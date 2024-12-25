// "use client";

// import React, { useState } from "react";
// import {
//     FiPaperclip, // Attach
//     FiSend, // Send
//     FiSun // Light Mode
// } from "react-icons/fi";

// const ChatbotInterface: React.FC = () => {
//     const [input, setInput] = useState("");

//     return (
//         <div className="flex h-screen mr-auto ml-auto">
//             {/* Main Content */}
//             <div className="flex-1 flex flex-col items-center mr-auto ml-auto justify-center bg-gray-50 p-8">
//                 {/* Central Icon and Title */}
//                 <div className="text-center mb-8">
//                     <div className="w-20 h-20 mx-auto mb-4">
//                         <FiSun size={80} className="text-gray-400" />
//                     </div>
//                     <h1 className="text-2xl font-semibold text-gray-800">Start Your Journey Here!</h1>
//                 </div>

//                 {/* Suggestions */}
//                 <div className="flex flex-wrap justify-center mr-auto ml-auto space-x-4 mb-12">
//                     <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300">
//                         Data structures & algorithms
//                     </button>
//                     <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300">
//                         Java
//                     </button>
//                     <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300">
//                         Working with data
//                     </button>
//                 </div>

//                 {/* Chat Input Box */}
//                 <div className="fixed bottom-8 w-[90%] max-w-3xl flex items-center bg-white shadow-md rounded-lg p-4 border">
//                     {/* File Upload Button */}
//                     <button className="p-2 hover:bg-gray-200 rounded">
//                         <FiPaperclip size={20} />
//                     </button>

//                     {/* Text Input */}
//                     <input
//                         type="text"
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)}
//                         placeholder="Ask anything about your content"
//                         className="flex-1 mx-4 p-2 text-gray-800 border-none focus:outline-none"
//                     />
//                     {/* Send Button */}
//                     <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//                         <FiSend size={20} />
//                     </button>
//                 </div>
//             </div>            
//         </div>
//     );
// };

// export default ChatbotInterface;

"use client";

import React, { useState, useRef } from "react";
import { FiPaperclip, FiSend, FiSun } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const ChatbotInterface: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ type: 'user' | 'bot', content: string }[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "" && files.length === 0) return;

    setMessages(prev => [...prev, { type: 'user', content: input }]);

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: input }),
      });
      const data = await response.json();
      
      setMessages(prev => [...prev, { type: 'bot', content: data.message }]);
    } catch (error) {
      console.error('Failed to get response:', error);
    }

    setInput("");
    setFiles([]);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Center container */}
      <div className="flex-grow flex justify-center items-center p-4">
        <div className="w-full max-w-4xl flex flex-col h-full">
          {/* Chat header */}
          <div className="text-center mb-4">
            <h1 className="text-2xl font-semibold">AI Chatbot</h1>
          </div>

          {/* Chat messages area */}
          <Card className="flex-grow overflow-hidden mb-4">
            <CardContent className="h-full overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                  <FiSun size={48} className="mb-4" />
                  <p className="text-lg font-medium">Start Your Journey Here!</p>
                  <p className="mt-2">Ask anything about your content</p>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <Card className={`max-w-[80%] ${message.type === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                      <CardContent className="p-3">
                        <p>{message.content}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Input area */}
          <form onSubmit={handleSubmit} className="flex items-end space-x-2">
            <div className="flex-grow">
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about your content"
                className="w-full"
              />
              {files.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Attached files:</p>
                  <ul className="list-disc list-inside">
                    {files.map((file, index) => (
                      <li key={index} className="text-sm">{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex space-x-2">
              <Button type="button" variant="outline" size="icon" onClick={handleAttachClick}>
                <FiPaperclip className="h-4 w-4" />
              </Button>
              <Button type="submit">
                <FiSend className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </form>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            multiple
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatbotInterface;

