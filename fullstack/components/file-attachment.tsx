'use client'

import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Paperclip, X } from 'lucide-react'

interface FileAttachmentProps {
  onAttach: (files: File[]) => void
  attachments: File[]
}

export function FileAttachment({ onAttach, attachments }: FileAttachmentProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onAttach(acceptedFiles)
  }, [onAttach])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const removeAttachment = (index: number) => {
    const newAttachments = [...attachments]
    newAttachments.splice(index, 1)
    onAttach(newAttachments)
  }

  return (
    <div className="flex flex-col h-full">
      <div 
        {...getRootProps()} 
        className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer mb-4 ${
          isDragActive ? 'border-primary' : 'border-gray-300'
        }`}
      >
        <input {...getInputProps()} />
        <Paperclip className="mx-auto h-6 w-6 text-gray-400" />
        <p className="mt-1 text-sm text-gray-600">Drag & drop files here, or click to select files</p>
      </div>
      <ScrollArea className="flex-grow">
        {attachments.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-2">Attached Files:</h4>
            <ul className="space-y-2">
              {attachments.map((file, index) => (
                <li key={index} className="flex items-center justify-between bg-gray-100 rounded p-2">
                  <span className="text-sm truncate">{file.name}</span>
                  <Button variant="ghost" size="sm" onClick={() => removeAttachment(index)}>
                    <X className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </ScrollArea>
    </div>
  )
}

