'use client'

import { useState } from 'react'
import { useChat } from 'ai/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileAttachment } from '@/components/file-attachment'
import { ChatMessage } from '@/components/chat-message'
import { Send } from 'lucide-react'

export default function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const [attachments, setAttachments] = useState<File[]>([])

  const handleAttachment = (files: File[]) => {
    setAttachments(prevAttachments => [...prevAttachments, ...files])
  }

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim() || attachments.length > 0) {
      handleSubmit(e, {
        options: {
          attachments: attachments
        }
      })
      setAttachments([])
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
          <CardContent className="flex-grow overflow-hidden">
            <ScrollArea className="h-full pr-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={handleInputChange}
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

