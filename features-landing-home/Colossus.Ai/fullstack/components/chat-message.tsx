import { Message } from 'ai'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <Card className={`max-w-[80%] ${isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
        <CardContent className="p-3">
          <div className="flex items-start">
            <Avatar className="mr-2">
              <AvatarImage src={isUser ? "/user-avatar.png" : "/bot-avatar.png"} />
              <AvatarFallback>{isUser ? 'U' : 'B'}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm">{message.content}</p>
              {message.attachments && message.attachments.length > 0 && (
                <div className="mt-2">
                  {message.attachments.map((attachment, index) => (
                    <div key={index} className="text-xs text-gray-500">
                      Attachment: {attachment.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

