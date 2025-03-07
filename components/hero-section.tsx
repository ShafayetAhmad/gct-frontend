import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10" />
      <div
        className="h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://help.familytickets.com/hc/article_attachments/360023993533/5c41b8ec751b3.jpeg')",
          backgroundPosition: "center 30%",
        }}
      />

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Greenwich Community Theatre
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Experience the magic of theatre with our new digital ticketing
                system
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Link href="/register">Register Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-background/20 text-white border-white hover:bg-background/30"
              >
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
