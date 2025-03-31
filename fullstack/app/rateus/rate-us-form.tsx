'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Rating {
  stars: number;
  feedback: string;
  date: string;
}

export default function RateUsForm() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [savedRatings, setSavedRatings] = useState<Rating[]>([])

  useEffect(() => {
    const storedRatings = localStorage.getItem('ratings')
    if (storedRatings) {
      setSavedRatings(JSON.parse(storedRatings))
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (rating === 0) return;

    const newRating: Rating = {
      stars: rating,
      feedback,
      date: new Date().toLocaleString()
    }

    const updatedRatings = [newRating, ...savedRatings]
    setSavedRatings(updatedRatings)
    localStorage.setItem('ratings', JSON.stringify(updatedRatings))
    setRating(0)
    setFeedback('')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Your Rating</label>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1
              return (
                <Star
                  key={index}
                  className={`w-8 h-8 cursor-pointer transition-colors ${
                    ratingValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  onClick={() => setRating(ratingValue)}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                  fill={ratingValue <= (hover || rating) ? 'currentColor' : 'none'}
                />
              )
            })}
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="feedback" className="block text-sm font-medium mb-2">Your Feedback</label>
          <Textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Tell us about your experience..."
            className="min-h-[100px]"
          />
        </div>
        <Button type="submit" className="w-full" disabled={rating === 0}>
          Submit Rating
        </Button>
      </form>

      <div>
        <h2 className="text-2xl font-bold mb-4">Saved Ratings</h2>
        {savedRatings.length === 0 ? (
          <p>No ratings yet. Be the first to rate!</p>
        ) : (
          savedRatings.map((savedRating, index) => (
            <Card key={index} className="mb-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < savedRating.stars ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill={i < savedRating.stars ? 'currentColor' : 'none'}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">{savedRating.date}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{savedRating.feedback}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}

