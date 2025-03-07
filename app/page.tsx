import {
  CalendarDays,
  CreditCard,
  MapPin,
  Star,
  Ticket,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeroSection from "@/components/hero-section";
import FeatureCard from "@/components/feature-card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />

        {/* Features Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Experience Theatre Like Never Before
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Our new digital ticketing system brings convenience and innovation
              to your theatre experience.
            </p>
          </div>

          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-8">
            <FeatureCard
              icon={<Ticket className="h-6 w-6" />}
              title="Online Booking"
              description="Browse performances and book tickets online with special discounts"
            />
            <FeatureCard
              icon={<CreditCard className="h-6 w-6" />}
              title="Secure Payments"
              description="Safe and secure credit card transactions through VISACheck"
            />
            <FeatureCard
              icon={<MapPin className="h-6 w-6" />}
              title="Seat Selection"
              description="Choose your perfect seats from our interactive seating plan"
            />
            <FeatureCard
              icon={<CalendarDays className="h-6 w-6" />}
              title="Theatre Packages"
              description="Book 4 plays, get 1 ticket free with our special packages"
            />
            <FeatureCard
              icon={<Star className="h-6 w-6" />}
              title="Reviews & Ratings"
              description="Share your experience and read reviews from other theatre-goers"
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Group Bookings"
              description="Special discounts for social clubs and group bookings"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Greenwich Community Theatre
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Nestled in southeast London, Greenwich Community Theatre (GCT)
                  is a historic venue that blends Victorian architecture with a
                  commitment to delivering high-quality, accessible performances
                  since 2000.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Our cozy auditorium and versatile stage hosts musicals,
                  dramas, comedies, and children's theatre six days a week, with
                  special matinees and performances.
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Performance Schedule</CardTitle>
                  <CardDescription>
                    Join us for our upcoming shows
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Romeo and Juliet</span>
                      <span className="text-muted-foreground">
                        Mon-Sat, 7:30 PM
                      </span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">The Tempest</span>
                      <span className="text-muted-foreground">
                        Tue-Sun, 7:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">
                        A Midsummer Night's Dream
                      </span>
                      <span className="text-muted-foreground">
                        Wed-Mon, 8:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">
                        Children's Special: Peter Pan
                      </span>
                      <span className="text-muted-foreground">
                        Sat, 2:00 PM
                      </span>
                    </div>
                  </div>
                  <Button className="w-full mt-6">View All Performances</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Ready to Experience the New GCT?
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Register now to access our new digital ticketing system and enjoy
              special discounts.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row mt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Register Now
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
