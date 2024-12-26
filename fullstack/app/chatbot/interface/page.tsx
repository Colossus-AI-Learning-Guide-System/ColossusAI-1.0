'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileAttachment } from '@/components/file-attachment'
import KnowledgeGraph from '@/components/knowledge-graph'
import { Send } from 'lucide-react'

const mockGPTOutput = () => {
  return [
    {
      title: "Public Access Modifier",
      content: "The public modifier offers the widest scope of access in Java. When a class member is declared as public, it can be accessed from any other class, regardless of package."
    },
    {
      title: "Protected Access Modifier",
      content: "Protected members are accessible within the same package and by subclass instances, even if those subclasses reside in different packages. Useful in inheritance scenarios."
    },
    {
      title: "Default (Package-Private) Access Modifier",
      content: "When no access modifier is specified, Java applies the default access level. Members with default access are only visible to classes within the same package."
    },
    {
      title: "Private Access Modifier",
      content: "Private is the most restrictive access modifier in Java. Members declared as private are only accessible within the declaring class itself, enforcing the highest level of encapsulation."
    }
  ]
}

export default function ChatInterface() {
  const [input, setInput] = useState('')
  const [attachments, setAttachments] = useState<File[]>([])
  const [graphData, setGraphData] = useState(mockGPTOutput())

  const handleAttachment = (files: File[]) => {
    setAttachments(prevAttachments => [...prevAttachments, ...files])
  }

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim() || attachments.length > 0) {
      // Handle message sending here
      setInput('')
      setAttachments([])
      // Simulate updating graph data when a new message is sent
      setGraphData(mockGPTOutput())
    }
  }

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-theme(spacing.16))] gap-4">
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
            <CardTitle>Modern Chatbot</CardTitle>
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
                placeholder="Type your message..."
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
  )
}

