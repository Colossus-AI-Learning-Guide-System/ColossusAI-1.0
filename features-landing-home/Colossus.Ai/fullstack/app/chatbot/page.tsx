'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileAttachment } from '@/components/file-attachment';
import KnowledgeGraph from '@/components/knowledge-graph';
import { Send } from 'lucide-react';
import { AppSidebar } from "@/components/app-sidebar"
import 'reactflow/dist/style.css'

export default function ChatInterface() {
  const [input, setInput] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);
  const [graphData, setGraphData] = useState<any[]>([]);

  const handleAttachment = (files: File[]) => {
    if (files.every(file => file instanceof File)) {
      setAttachments(prevAttachments => [...prevAttachments, ...files]);
    } else {
      console.error("Invalid file object detected.");
    }
  };

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() && attachments.length === 0) return;

    const formData = new FormData();
    attachments.forEach(file => {
      if (file instanceof File) {
        formData.append("files", file);
      }
    });
    formData.append("query", input);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        body: formData,
      });

      console.log('Response status:', response.status); // Debugging response
      if (!response.ok) {
        console.error("Error response from API:", response.status, response.statusText);
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Response data:', data); // Debugging response

      if (!Array.isArray(data.response)) {
        throw new Error("Unexpected response format.");
      }

      const graphData = data.response.map(item => ({
        title: item.title || "Untitled",
        content: item.content || "No content",
      }));

      setGraphData(graphData);
      setInput('');
      setAttachments([]);
    } catch (error) {
      console.error("Error handling query:", error);
      alert("Failed to process your request. Please try again.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-theme(spacing.16))] gap-4">
      <div>
        <AppSidebar />
      </div>
      <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>File Attachments</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <FileAttachment onAttach={handleAttachment} attachments={attachments} />
          </CardContent>
        </Card>
      </div>

      <div className="w-full lg:w-2/3">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>Colossus.AI</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow overflow-hidden relative">
            <div className="absolute inset-0">
              <KnowledgeGraph data={graphData} />
            </div>
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your query..."
                className="flex-grow"
              />
              <Button type="submit">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
