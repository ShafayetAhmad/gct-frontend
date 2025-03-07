import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  location: string
}

export default function TestimonialCard({ quote, author, location }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <Quote className="h-6 w-6 text-primary/40 mb-2" />
        <p className="italic mb-4">{quote}</p>
        <div className="text-sm">
          <span className="font-medium">{author}</span>
          {location && <span className="text-muted-foreground"> • {location}</span>}
        </div>
      </CardContent>
    </Card>
  )
}

