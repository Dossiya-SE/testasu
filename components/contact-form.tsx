"use client"

import type React from "react"
import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { submitContactForm, type ContactFormData } from "@/lib/actions"

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    organization: "",
    location: "",
    students: "",
    message: "",
  })

  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setResult(null)

    startTransition(async () => {
      const response = await submitContactForm(formData)
      setResult(response)

      if (response.success) {
        setFormData({
          name: "",
          email: "",
          organization: "",
          location: "",
          students: "",
          message: "",
        })
      }
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Ready to Transform Education?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Contact us to learn more about bringing solar-powered AI STEM education to your community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {result && (
                  <Alert
                    className={`mb-6 ${result.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
                  >
                    {result.success ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-600" />
                    )}
                    <AlertDescription className={result.success ? "text-green-800" : "text-red-800"}>
                      {result.success ? result.message : result.error}
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        disabled={isPending}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        disabled={isPending}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium mb-2">
                        Organization
                      </label>
                      <Input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="School, NGO, Government, etc."
                        disabled={isPending}
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium mb-2">
                        Location
                      </label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, Country"
                        disabled={isPending}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="students" className="block text-sm font-medium mb-2">
                      Number of Students
                    </label>
                    <Input
                      id="students"
                      name="students"
                      type="number"
                      value={formData.students}
                      onChange={handleChange}
                      placeholder="Approximate number of students"
                      disabled={isPending}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your community, educational needs, and how we can help..."
                      rows={5}
                      disabled={isPending}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full p-3 flex-shrink-0">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <p className="text-muted-foreground">gefetwo@gmail.com</p>
                    <p className="text-muted-foreground">partnerships@solarstemai.org</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-secondary-foreground rounded-full p-3 flex-shrink-0">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <p className="text-muted-foreground">+229 0194272424</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM WAT</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full p-3 flex-shrink-0">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Visit Us</h3>
                    <p className="text-muted-foreground">Benin Abomey-Calavi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted rounded-lg p-6">
              <h3 className="font-semibold mb-3">Response Time</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We typically respond to inquiries within 24 hours. For urgent matters or pilot program applications,
                please call us directly.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Pilot Applications</Badge>
                <Badge variant="outline">Partnership Inquiries</Badge>
                <Badge variant="outline">Technical Support</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
