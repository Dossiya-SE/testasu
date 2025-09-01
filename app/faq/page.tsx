import type { Metadata } from "next"
import { FAQ } from "@/components/faq"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description:
    "Find answers to common questions about Solar STEM AI's solar-powered tutoring system, implementation process, costs, and impact.",
}

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Frequently Asked Questions
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-balance">Everything You Need to Know</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Get answers to the most common questions about our solar-powered AI STEM tutoring initiative, from
            implementation to impact measurement.
          </p>
        </div>
      </section>

      {/* FAQ Component */}
      <FAQ />

      {/* Still Have Questions */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground">
              We're here to help! Reach out to us through any of these channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-primary text-primary-foreground rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">General Inquiries</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Questions about our mission, programs, or partnerships
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact">Send Message</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-secondary text-secondary-foreground rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Urgent Matters</h3>
                <p className="text-sm text-muted-foreground mb-4">For time-sensitive questions or technical support</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="tel:+2290194272424">Call Us</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-accent text-accent-foreground rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Direct Email</h3>
                <p className="text-sm text-muted-foreground mb-4">Reach out directly to our founder and team</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="mailto:gefetwo@gmail.com">Email Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
