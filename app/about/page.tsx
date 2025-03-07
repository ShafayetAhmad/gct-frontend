import type { Metadata } from "next";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TeamMember from "@/components/team-member";
import TestimonialCard from "@/components/testimonial-card";

export const metadata: Metadata = {
  title: "About Us | Greenwich Community Theatre",
  description:
    "Learn about the history, mission, and team behind Greenwich Community Theatre",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10" />
          <div
            className="h-[400px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://help.familytickets.com/hc/article_attachments/360023993533/5c41b8ec751b3.jpeg?height=1080&width=1920')",
              backgroundPosition: "center 30%",
            }}
          />

          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                    About Our Theatre
                  </h1>
                  <p className="mx-auto max-w-[700px] text-white md:text-xl">
                    Bringing arts and culture to southeast London since 2000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container py-12 md:py-24">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="history">Our History</TabsTrigger>
              <TabsTrigger value="mission">Mission & Values</TabsTrigger>
              <TabsTrigger value="facilities">Our Facilities</TabsTrigger>
              <TabsTrigger value="team">Our Team</TabsTrigger>
            </TabsList>

            {/* History Tab */}
            <TabsContent value="history" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">
                    Our Rich History
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    The Greenwich Community Theatre (GCT) was established in
                    2000, transforming a historic Victorian building into a
                    vibrant cultural hub for the local community. What began as
                    a small initiative by a group of passionate theatre
                    enthusiasts has grown into one of southeast London's most
                    beloved cultural institutions.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Over the past two decades, GCT has hosted thousands of
                    performances, from classic Shakespearean plays to
                    contemporary dramas, musicals, and children's theatre. Our
                    commitment to artistic excellence and community engagement
                    has remained unwavering throughout our journey.
                  </p>
                  <p className="text-muted-foreground">
                    Today, as we embrace digital transformation with our new
                    ticketing system, we continue to honor our heritage while
                    looking toward the future of theatre in the digital age.
                  </p>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://www.allthingsgreenwich.co.uk/images/greenwichtheatre-105-(600px).jpg?height=800&width=600')",
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">2000</h3>
                    <p className="text-muted-foreground">
                      Greenwich Community Theatre founded in the historic
                      Victorian building
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">2010</h3>
                    <p className="text-muted-foreground">
                      Major renovation expanding the auditorium and modernizing
                      facilities
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">2023</h3>
                    <p className="text-muted-foreground">
                      Digital transformation initiative launched to enhance
                      customer experience
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Mission Tab */}
            <TabsContent value="mission" className="space-y-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  Our Mission & Values
                </h2>
                <p className="text-muted-foreground mb-8">
                  At Greenwich Community Theatre, we believe in the
                  transformative power of the performing arts to inspire,
                  educate, and bring communities together.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Artistic Excellence
                    </h3>
                    <p className="text-muted-foreground">
                      We are committed to producing and hosting high-quality
                      performances that challenge, entertain, and inspire our
                      audiences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Community Engagement
                    </h3>
                    <p className="text-muted-foreground">
                      We strive to be an inclusive cultural hub that reflects
                      and serves the diverse communities of Greenwich and
                      beyond.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                    <p className="text-muted-foreground">
                      We believe that theatre should be accessible to all,
                      regardless of background or circumstance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Education</h3>
                    <p className="text-muted-foreground">
                      We are dedicated to nurturing the next generation of
                      theatre artists and audiences through our educational
                      programs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Innovation</h3>
                    <p className="text-muted-foreground">
                      While honoring theatrical traditions, we embrace
                      innovation in both our artistic programming and
                      operational practices.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                    <p className="text-muted-foreground">
                      We are committed to environmentally sustainable practices
                      and the long-term viability of our theatre.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Facilities Tab */}
            <TabsContent value="facilities" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">
                    Our Facilities
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    The Greenwich Community Theatre is housed in a beautifully
                    preserved Victorian building that combines historic charm
                    with modern amenities. Our facilities are designed to
                    provide an exceptional experience for both performers and
                    audiences.
                  </p>
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
                      <span>
                        300-seat main auditorium with excellent acoustics
                      </span>
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
                      <span>
                        Versatile stage with state-of-the-art lighting and sound
                        systems
                      </span>
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
                      <span>
                        Comfortable seating arranged in three pricing bands (A,
                        B, and C)
                      </span>
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
                      <span>
                        Spacious lobby with ticket office and refreshment areas
                      </span>
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
                      <span>
                        Rehearsal spaces and workshops for production
                        preparation
                      </span>
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
                      <span>
                        Fully accessible facilities for patrons with
                        disabilities
                      </span>
                    </li>
                  </ul>
                  <Button>Book a Tour</Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url('url('https://picsum.photos/id/15/400?height=400&width=400')",
                      }}
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url('https://picsum.photos/id/12/400?height=400&width=400')",
                      }}
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url('https://picsum.photos/id/12/400?height=400&width=400')",
                      }}
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url('https://picsum.photos/id/13/400?height=400&width=400')",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-muted p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-bold mb-4">Seating Plan</h3>
                <div className="relative w-full max-w-2xl mx-auto h-[300px] bg-white rounded-lg p-4">
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gray-200 flex items-center justify-center text-sm font-medium">
                    Stage
                  </div>

                  <div className="absolute top-12 left-0 right-0 bottom-16 flex flex-col">
                    <div className="flex-1 flex">
                      <div className="w-1/3 bg-red-100 flex items-center justify-center text-xs">
                        Band C
                      </div>
                      <div className="w-1/3 bg-amber-100 flex items-center justify-center text-xs">
                        Band B
                      </div>
                      <div className="w-1/3 bg-red-100 flex items-center justify-center text-xs">
                        Band C
                      </div>
                    </div>
                    <div className="flex-1 flex">
                      <div className="w-1/3 bg-amber-100 flex items-center justify-center text-xs">
                        Band B
                      </div>
                      <div className="w-1/3 bg-green-100 flex items-center justify-center text-xs">
                        Band A
                      </div>
                      <div className="w-1/3 bg-amber-100 flex items-center justify-center text-xs">
                        Band B
                      </div>
                    </div>
                    <div className="flex-1 flex">
                      <div className="w-1/3 bg-green-100 flex items-center justify-center text-xs">
                        Band A
                      </div>
                      <div className="w-1/3 bg-green-100 flex items-center justify-center text-xs">
                        Band A
                      </div>
                      <div className="w-1/3 bg-green-100 flex items-center justify-center text-xs">
                        Band A
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-8 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-100"></div>
                    <span className="text-sm">Band A - Premium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-amber-100"></div>
                    <span className="text-sm">Band B - Standard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-100"></div>
                    <span className="text-sm">Band C - Economy</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Team Tab */}
            <TabsContent value="team" className="space-y-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  Meet Our Team
                </h2>
                <p className="text-muted-foreground mb-8">
                  The Greenwich Community Theatre is run by a dedicated team of
                  theatre professionals committed to bringing exceptional
                  performances to our community.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <TeamMember
                  name="Eleanor Wright"
                  role="Artistic Director"
                  bio="Eleanor has over 20 years of experience in theatre direction and has been with GCT since its founding in 2000."
                  imageSrc="https://avatar.iran.liara.run/public/33?height=400&width=400"
                />
                <TeamMember
                  name="James Thompson"
                  role="Managing Director"
                  bio="James oversees the business operations of the theatre, bringing his expertise from a successful career in arts management."
                  imageSrc="https://avatar.iran.liara.run/public/45?height=400&width=400"
                />
                <TeamMember
                  name="Sophia Chen"
                  role="Technical Director"
                  bio="Sophia manages our state-of-the-art lighting and sound systems, ensuring every performance looks and sounds perfect."
                  imageSrc="https://avatar.iran.liara.run/public/31?height=400&width=400"
                />
                <TeamMember
                  name="Michael Okonjo"
                  role="Education Coordinator"
                  bio="Michael leads our educational programs, working with schools and community groups to bring theatre to new audiences."
                  imageSrc="https://avatar.iran.liara.run/public/36?height=400&width=400"
                />
                <TeamMember
                  name="Olivia Patel"
                  role="Marketing Manager"
                  bio="Olivia handles our marketing and communications, spreading the word about our performances and initiatives."
                  imageSrc="https://avatar.iran.liara.run/public/43?height=400&width=400"
                />
                <TeamMember
                  name="Robert Garcia"
                  role="Box Office Manager"
                  bio="Robert leads our box office team, ensuring a smooth and pleasant ticket-buying experience for all our patrons."
                  imageSrc="https://avatar.iran.liara.run/public/48?height=400&width=400"
                />
              </div>

              <div className="mt-12 bg-muted/50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  What Our Patrons Say
                </h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <TestimonialCard
                    quote="The Greenwich Community Theatre has been my favorite cultural venue for years. The performances are always top-notch and the atmosphere is so welcoming."
                    author="Sarah J."
                    location="Greenwich"
                  />
                  <TestimonialCard
                    quote="I've brought my children to the Saturday matinees for the past three years. The children's productions are engaging, educational, and so much fun!"
                    author="David M."
                    location="Blackheath"
                  />
                  <TestimonialCard
                    quote="As a local business owner, I appreciate how the theatre brings visitors to our area. Their commitment to the community is evident in everything they do."
                    author="Lisa T."
                    location="Greenwich"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Contact Section */}
        <section className="bg-muted/50 py-12 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                Visit Us
              </h2>
              <p className="text-muted-foreground">
                We'd love to welcome you to Greenwich Community Theatre. Here's
                how to find us and get in touch.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        123 Theatre Street, Greenwich, London, SE10 8EE
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">
                        Box Office: 020 1234 5678
                      </p>
                      <p className="text-muted-foreground">
                        Admin: 020 1234 5679
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">
                        tickets@greenwichtheatre.example.com
                      </p>
                      <p className="text-muted-foreground">
                        info@greenwichtheatre.example.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Opening Hours</p>
                      <p className="text-muted-foreground">
                        Box Office: Monday to Saturday, 10am - 8pm
                      </p>
                      <p className="text-muted-foreground">
                        Admin: Monday to Friday, 9am - 5pm
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full">Contact Us</Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden h-[400px] bg-gray-200">
                {/* This would be a map in a real implementation */}
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Interactive Map Would Be Here
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
