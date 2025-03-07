import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Greenwich Community Theatre",
  description:
    "Get in touch with Greenwich Community Theatre for inquiries, bookings, and more",
};

export default function ContactPage() {
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
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
              backgroundPosition: "center 30%",
            }}
          />

          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                    Contact Us
                  </h1>
                  <p className="mx-auto max-w-[700px] text-white md:text-xl">
                    We'd love to hear from you. Get in touch with Greenwich
                    Community Theatre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="container py-12 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Have a question about our performances, tickets, or facilities?
                Fill out the form below and our team will get back to you as
                soon as possible.
              </p>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-8">
                You can also reach us directly using the contact information
                below or visit us during our opening hours.
              </p>

              <div className="grid gap-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-muted-foreground">
                        123 Theatre Street
                        <br />
                        Greenwich, London
                        <br />
                        SE10 8EE
                      </p>
                      <Button
                        variant="link"
                        className="p-0 h-auto mt-2 text-primary"
                      >
                        <Link href="https://maps.google.com" target="_blank">
                          View on Map
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">
                        Box Office: 020 1234 5678
                      </p>
                      <p className="text-muted-foreground">
                        Admin: 020 1234 5679
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">
                        Tickets: tickets@greenwichtheatre.example.com
                      </p>
                      <p className="text-muted-foreground">
                        General: info@greenwichtheatre.example.com
                      </p>
                      <p className="text-muted-foreground">
                        Press: press@greenwichtheatre.example.com
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Opening Hours</h3>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
                        <div className="font-medium">Monday - Friday:</div>
                        <div className="text-muted-foreground">
                          10:00 AM - 8:00 PM
                        </div>
                        <div className="font-medium">Saturday:</div>
                        <div className="text-muted-foreground">
                          9:00 AM - 9:00 PM
                        </div>
                        <div className="font-medium">Sunday:</div>
                        <div className="text-muted-foreground">
                          12:00 PM - 6:00 PM
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                Find Us
              </h2>
              <p className="text-muted-foreground">
                Greenwich Community Theatre is conveniently located in the heart
                of Greenwich, easily accessible by public transport.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden h-[500px] bg-gray-200">
              {/* This would be a map in a real implementation */}
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                Interactive Map Would Be Here
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>By Train</CardTitle>
                  <CardDescription>
                    Greenwich Station is a 5-minute walk from the theatre
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Direct trains run from London Bridge (8 minutes) and Cannon
                    Street (10 minutes) stations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>By Bus</CardTitle>
                  <CardDescription>
                    Several bus routes stop near the theatre
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Bus routes 129, 177, 180, 188, 199, 286, and 386 all stop
                    within a short walking distance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>By Car</CardTitle>
                  <CardDescription>
                    Limited parking available nearby
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    There is a public car park on Park Row, a 3-minute walk from
                    the theatre. Evening rates apply after 6:30 PM.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container py-12 md:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Find answers to our most commonly asked questions. If you can't
                find what you're looking for, please contact us.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I book tickets?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    You can book tickets online through our website, by phone at
                    020 1234 5678, or in person at our box office during opening
                    hours. Group bookings can be made by calling our dedicated
                    group booking line.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What are your ticket prices?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Our ticket prices vary depending on the performance and
                    seating location. The auditorium is divided into three
                    pricing bands (A, B, and C), with Band A being premium
                    seating (£45), Band B standard seating (£35), and Band C
                    economy seating (£25). Special discounts are available for
                    children, OAPs, and group bookings.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Are there any discounts available?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes, we offer several discounts:
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-muted-foreground">
                    <li>
                      Children and OAPs receive a 25% reduction on ticket prices
                    </li>
                    <li>
                      Social clubs receive at least 5% discount, increased by a
                      further 5% for bookings of more than 20 tickets
                    </li>
                    <li>
                      Last-hour bookings made in person receive a 10% discount
                    </li>
                    <li>
                      Weekday performances (Monday-Thursday) receive a 10%
                      discount
                    </li>
                    <li>
                      Book 4 plays and get 1 ticket free with our Theatre
                      Package
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What time should I arrive?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    We recommend arriving at least 30 minutes before the
                    performance starts. This gives you time to collect your
                    tickets, find your seats, and perhaps enjoy a pre-show
                    drink. The auditorium usually opens 20 minutes before the
                    performance begins.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Is the theatre accessible?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes, Greenwich Community Theatre is fully accessible for
                    patrons with disabilities. We have wheelchair spaces in all
                    seating bands, accessible toilets, and hearing loop systems.
                    Please inform us of any accessibility requirements when
                    booking so we can ensure you have the best experience
                    possible.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Can I exchange or refund my tickets?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Tickets cannot be refunded but can be exchanged for another
                    performance of the same production (subject to availability)
                    up to 48 hours before the original performance. A small
                    administration fee may apply. Please contact our box office
                    for assistance with exchanges.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Are there refreshments available?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes, our theatre has a bar and café serving a selection of
                    drinks, snacks, and light meals. The bar opens 1 hour before
                    performances and remains open during intervals and after the
                    show. You can pre-order interval drinks before the
                    performance begins.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Can't find the answer to your question?
              </p>
              <Button>Contact Our Team</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
