import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface FeaturedPerformanceProps {
  title: string
  subtitle: string
  description: string
  dates: string
  times: string
  imageSrc: string
  tags: string[]
}

export default function FeaturedPerformance({
  title,
  subtitle,
  description,
  dates,
  times,
  imageSrc,
  tags,
}: FeaturedPerformanceProps) {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6">
        <div
          className="aspect-[4/3] md:aspect-auto md:h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        />
        <CardContent className="p-6 flex flex-col">
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h3 className="text-2xl font-bold mb-1">{title}</h3>
            <p className="text-primary font-medium mb-4">{subtitle}</p>
            <p className="text-muted-foreground mb-6">{description}</p>
          </div>

          <div className="mt-auto space-y-4">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{dates}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{times}</span>
            </div>

            <div className="flex gap-3 mt-6">
              <Button asChild variant="outline" className="flex-1">
                <Link href={`/performances/${title.toLowerCase().replace(/\s+/g, "-")}`}>Learn More</Link>
              </Button>
              <Button className="flex-1">Book Tickets</Button>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

