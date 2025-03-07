import Link from "next/link"
import { Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface PerformanceCardProps {
  title: string
  category: string
  dates: string
  imageSrc: string
  status: "now-playing" | "coming-soon" | "special-event"
  featured?: boolean
}

export default function PerformanceCard({
  title,
  category,
  dates,
  imageSrc,
  status,
  featured = false,
}: PerformanceCardProps) {
  return (
    <Card className={`overflow-hidden ${featured ? "border-primary/50 ring-1 ring-primary/20" : ""}`}>
      <div className="relative">
        <div
          className="aspect-[3/2] bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        />
        {status === "now-playing" && (
          <Badge className="absolute top-2 right-2 bg-green-600 hover:bg-green-700">Now Playing</Badge>
        )}
        {status === "coming-soon" && (
          <Badge className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700">Coming Soon</Badge>
        )}
        {status === "special-event" && (
          <Badge className="absolute top-2 right-2 bg-amber-600 hover:bg-amber-700">Special Event</Badge>
        )}
        {featured && <Badge className="absolute top-2 left-2 bg-primary hover:bg-primary/90">Featured</Badge>}
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <Badge variant="outline" className="mb-2">
          {category}
        </Badge>
        <div className="flex items-center text-muted-foreground text-sm mt-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{dates}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button variant="outline" asChild className="flex-1">
          <Link href={`/performances/${title.toLowerCase().replace(/\s+/g, "-")}`}>Details</Link>
        </Button>
        <Button className="flex-1">Book Now</Button>
      </CardFooter>
    </Card>
  )
}

