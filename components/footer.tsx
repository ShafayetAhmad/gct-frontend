import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Greenwich Community Theatre</h3>
            <p className="text-sm text-muted-foreground">Bringing arts and culture to southeast London since 2000.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Performances
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Ticket Prices
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Group Bookings
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Special Offers
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Information</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              About Us
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              FAQs
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Connect With Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              123 Theatre Street, Greenwich
              <br />
              London, SE10 8EE
            </p>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Greenwich Community Theatre. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

