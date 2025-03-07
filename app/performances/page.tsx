import type { Metadata } from "next";
import { Calendar, Filter, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PerformanceCard from "@/components/performance-card";
import FeaturedPerformance from "@/components/featured-performance";

export const metadata: Metadata = {
  title: "Performances | Greenwich Community Theatre",
  description:
    "Browse current and upcoming performances at Greenwich Community Theatre",
};

export default function PerformancesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10" />
          <div
            className="h-[400px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://www.theatrestrust.org.uk/assets/000/001/422/Greenwich_Festival_Theatre_-_Gravity_Design_detail.jpg?1561121308')",
              backgroundPosition: "center 30%",
            }}
          />

          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                    Our Performances
                  </h1>
                  <p className="mx-auto max-w-[700px] text-white md:text-xl">
                    Discover the magic of live theatre at Greenwich Community
                    Theatre
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Performance */}
        <section className="container py-12">
          <h2 className="text-2xl font-bold mb-6">Featured Performance</h2>
          <FeaturedPerformance
            title="Hamlet"
            subtitle="William Shakespeare's Classic Tragedy"
            description="The young prince of Denmark must decide whether to avenge his father's death. Directed by Eleanor Wright and starring James Thompson as Hamlet."
            dates="June 15 - July 10, 2023"
            times="Evening performances at 7:30 PM | Saturday matinees at 2:00 PM"
            imageSrc="/placeholder.svg?height=600&width=1200"
            tags={["Drama", "Classic", "Tragedy"]}
          />
        </section>

        {/* Search and Filter */}
        <section className="bg-muted/50 py-8">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1 space-y-2">
                <label htmlFor="search" className="text-sm font-medium">
                  Search Performances
                </label>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Search by title, actor, or director..."
                    className="pl-8"
                  />
                </div>
              </div>
              <div className="w-full md:w-[180px] space-y-2">
                <label htmlFor="category" className="text-sm font-medium">
                  Category
                </label>
                <Select defaultValue="all">
                  <SelectTrigger id="category">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="drama">Drama</SelectItem>
                    <SelectItem value="comedy">Comedy</SelectItem>
                    <SelectItem value="musical">Musical</SelectItem>
                    <SelectItem value="children">Children's Theatre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-[180px] space-y-2">
                <label htmlFor="date" className="text-sm font-medium">
                  Date Range
                </label>
                <Select defaultValue="upcoming">
                  <SelectTrigger id="date">
                    <SelectValue placeholder="Upcoming" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="this-week">This Week</SelectItem>
                    <SelectItem value="this-month">This Month</SelectItem>
                    <SelectItem value="next-month">Next Month</SelectItem>
                    <SelectItem value="all">All Dates</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" size="icon" className="flex-shrink-0">
                <Filter className="h-4 w-4" />
                <span className="sr-only">More filters</span>
              </Button>
              <Button className="flex-shrink-0">Apply Filters</Button>
            </div>
          </div>
        </section>

        {/* Performances List */}
        <section className="container py-12 md:py-24">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="all">All Shows</TabsTrigger>
              <TabsTrigger value="current">Now Playing</TabsTrigger>
              <TabsTrigger value="upcoming">Coming Soon</TabsTrigger>
              <TabsTrigger value="special">Special Events</TabsTrigger>
              <TabsTrigger value="children">Children's Theatre</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <PerformanceCard
                  title="Romeo and Juliet"
                  category="Drama"
                  dates="May 1 - May 30, 2023"
                  imageSrc="/placeholder.svg?height=400&width=600"
                  status="now-playing"
                />
                <PerformanceCard
                  title="A Midsummer Night's Dream"
                  category="Comedy"
                  dates="May 15 - June 15, 2023"
                  imageSrc="/placeholder.svg?height=400&width=600"
                  status="now-playing"
                />
                <PerformanceCard
                  title="The Tempest"
                  category="Drama"
                  dates="June 1 - June 30, 2023"
                  imageSrc="/placeholder.svg?height=400&width=600"
                  status="coming-soon"
                />
                <PerformanceCard
                  title="Hamlet"
                  category="Drama"
                  dates="June 15 - July 10, 2023"
                  imageSrc="/placeholder.svg?height=400&width=600"
                  status="coming-soon"
                  featured={true}
                />
                <PerformanceCard
                  title="Much Ado About Nothing"
                  category="Comedy"
                  dates="July 1 - July 31, 2023"
                  imageSrc="/placeholder.svg?height=400&width=600"
                  status="coming-soon"
                />
                <PerformanceCard
                  title="Peter Pan"
                  category="Children's Theatre"
                  dates="Saturday Matinees, May - July"
                  imageSrc="/placeholder.svg?height=400&width=600"
                  status="now-playing"
                />
                <PerformanceCard
                  title="Macbeth"
                  category="Drama"
                  dates="August 1 - August 31, 2023"
                  imageSrc="/placeholder.svg?height=400&width=600"
                  status="coming-soon"
                />
                <PerformanceCard
                  title="The Comedy of Errors"
                  category="Comedy"
                  dates="August 15 - September 15, 2023"
                  imageSrc="/placeholder.svg?height=400&width=600"
                  status="coming-soon"
                />
                <PerformanceCard
                  title="An Evening with Shakespeare"
                  category="Special Event"
                  dates="July 15, 2023"
                  imageSrc="/placeholder.svg?height=400&width=600"
                  status="special-event"
                />
              </div>

              <div className="flex justify-center mt-8">
                <Button variant="outline">Load More Performances</Button>
              </div>
            </TabsContent>

            <TabsContent value="current" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <PerformanceCard
                  title="Romeo and Juliet"
                  category="Drama"
                  dates="May 1 - May 30, 2023"
                  imageSrc="/placeholder.svg?height=400&width=600"
                  status="now-playing"
                />
                <PerformanceCard
                  title="A Midsummer Night's Dream"
                  category="Comedy"
                  dates="May 15 - June 15, 2023"
                  imageSrc="/placeholder.svg?height=400&width=600"
                  status="now-playing"
                />
                <PerformanceCard
                  title="Peter Pan"
                  category="Children's Theatre"
                  dates="Saturday Matinees, May - July"
                  imageSrc="/placeholder.svg?height=400&width=600"
                  status="now-playing"
                />
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <PerformanceCard
                  title="The Tempest"
                  category="Drama"
                  dates="June 1 - June 30, 2023"
                  imageSrc="/placeholder.svg?height=400&width=600"
                  status="coming-soon"
                />
                <PerformanceCard
                  title="Hamlet"
                  category="Drama"
                  dates="June 15 - July 10, 2023"
                  imageSrc="/placeholder.svg?height=400&width=600"
                  status="coming-soon"
                  featured={true}
                />
                <PerformanceCard
                  title="Much Ado About Nothing"
                  category="Comedy"
                  dates="July 1 - July 31, 2023"
                  imageSrc="/placeholder.svg?height=400&width=600"
                  status="coming-soon"
                />
                <PerformanceCard
                  title="Macbeth"
                  category="Drama"
                  dates="August 1 - August 31, 2023"
                  imageSrc="/placeholder.svg?height=400&width=600"
                  status="coming-soon"
                />
                <PerformanceCard
                  title="The Comedy of Errors"
                  category="Comedy"
                  dates="August 15 - September 15, 2023"
                  imageSrc="/placeholder.svg?height=400&width=600"
                  status="coming-soon"
                />
              </div>
            </TabsContent>

            <TabsContent value="special" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <PerformanceCard
                  title="An Evening with Shakespeare"
                  category="Special Event"
                  dates="July 15, 2023"
                  imageSrc="/placeholder.svg?height=400&width=600"
                  status="special-event"
                />
              </div>
            </TabsContent>

            <TabsContent value="children" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <PerformanceCard
                  title="Peter Pan"
                  category="Children's Theatre"
                  dates="Saturday Matinees, May - July"
                  imageSrc="/placeholder.svg?height=400&width=600"
                  status="now-playing"
                />
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Pricing Information */}
        <section className="bg-muted/50 py-12 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                Ticket Information
              </h2>
              <p className="text-muted-foreground">
                Our ticket prices vary depending on the performance and seating
                location. Special discounts are available for children, OAPs,
                and group bookings.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold">Band A</h3>
                  <p className="text-primary text-2xl font-bold mt-2">£45</p>
                  <p className="text-muted-foreground text-sm">
                    Premium Seating
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                      <svg
                        className="h-3 w-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>Best views of the stage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                      <svg
                        className="h-3 w-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>Center and front sections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                      <svg
                        className="h-3 w-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>Complimentary program</span>
                  </li>
                </ul>
                <Button className="w-full">Book Band A</Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold">Band B</h3>
                  <p className="text-primary text-2xl font-bold mt-2">£35</p>
                  <p className="text-muted-foreground text-sm">
                    Standard Seating
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                      <svg
                        className="h-3 w-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>Good views of the stage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                      <svg
                        className="h-3 w-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>Side sections and mid-rear</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                      <svg
                        className="h-3 w-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>Great value for money</span>
                  </li>
                </ul>
                <Button className="w-full">Book Band B</Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold">Band C</h3>
                  <p className="text-primary text-2xl font-bold mt-2">£25</p>
                  <p className="text-muted-foreground text-sm">
                    Economy Seating
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                      <svg
                        className="h-3 w-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>Rear and side sections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                      <svg
                        className="h-3 w-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>Budget-friendly option</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                      <svg
                        className="h-3 w-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>Perfect for large groups</span>
                  </li>
                </ul>
                <Button className="w-full">Book Band C</Button>
              </div>
            </div>

            <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold mb-4">Special Discounts</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="p-4 border rounded-md">
                  <h4 className="font-bold">Children</h4>
                  <p className="text-muted-foreground">
                    25% off standard prices for under 16s
                  </p>
                </div>
                <div className="p-4 border rounded-md">
                  <h4 className="font-bold">OAPs</h4>
                  <p className="text-muted-foreground">
                    25% off standard prices
                  </p>
                </div>
                <div className="p-4 border rounded-md">
                  <h4 className="font-bold">Group Bookings</h4>
                  <p className="text-muted-foreground">
                    5% discount, plus additional 5% for 20+ tickets
                  </p>
                </div>
                <div className="p-4 border rounded-md">
                  <h4 className="font-bold">Last Hour Bookings</h4>
                  <p className="text-muted-foreground">
                    10% discount for in-person bookings in the last hour
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Theatre Packages */}
        <section className="container py-12 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Theatre Packages
            </h2>
            <p className="text-muted-foreground">
              Enhance your theatre experience with our special packages and
              offers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Season Pass</h3>
                  <p className="text-muted-foreground mb-4">
                    Book 4 plays and get 1 ticket free. The perfect way to
                    experience our diverse range of performances throughout the
                    season.
                  </p>
                  <Button>Learn More</Button>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Weekday Special</h3>
                  <p className="text-muted-foreground mb-4">
                    Enjoy a 10% discount on all performances scheduled Monday
                    through Thursday. Perfect for a midweek cultural escape.
                  </p>
                  <Button>Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
