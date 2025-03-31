import type { Metadata } from "next";

export default function Home() {
  return (
    <main>
      <nav>
        <button className="btn btn-secondary">Features</button>
      </nav>
      <div>home</div>
    </main>
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to AI Chatbot</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Start Chatting</CardTitle>
            <CardDescription>Interact with our AI-powered chatbot</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Ask questions, get insights, and explore your data with our advanced AI assistant.</p>
          </CardContent>
          <CardFooter>
            <Link href="/chatbot/interface">
              <Button>Go to Chatbot</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upload Documents</CardTitle>
            <CardDescription>Enhance the chatbot&apos;s knowledge</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Upload your documents to create a custom knowledge base for the chatbot.</p>
          </CardContent>
          <CardFooter>
            <Link href="/chatbot/interface">
              <Button variant="outline">Upload Files</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

