"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { submitPilotApplication, type PilotFormData } from "@/lib/actions"

export function PilotApplicationForm() {
  const [formData, setFormData] = useState<PilotFormData>({
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    location: "",
    studentCount: "",
    description: "",
    infrastructure: "",
  })

  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setResult(null)

    startTransition(async () => {
      const response = await submitPilotApplication(formData)
      setResult(response)

      if (response.success) {
        setFormData({
          organizationName: "",
          contactName: "",
          email: "",
          phone: "",
          location: "",
          studentCount: "",
          description: "",
          infrastructure: "",
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
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Apply for Pilot Program</CardTitle>
      </CardHeader>
      <CardContent>
        {result && (
          <Alert className={`mb-6 ${result.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
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
              <label htmlFor="organizationName" className="block text-sm font-medium mb-2">
                Organization Name *
              </label>
              <Input
                id="organizationName"
                name="organizationName"
                type="text"
                required
                value={formData.organizationName}
                onChange={handleChange}
                placeholder="School, NGO, Community Center, etc."
                disabled={isPending}
              />
            </div>
            <div>
              <label htmlFor="contactName" className="block text-sm font-medium mb-2">
                Contact Person *
              </label>
              <Input
                id="contactName"
                name="contactName"
                type="text"
                required
                value={formData.contactName}
                onChange={handleChange}
                placeholder="Your full name"
                disabled={isPending}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number *
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+229 XX XX XX XX"
                disabled={isPending}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-2">
                Location *
              </label>
              <Input
                id="location"
                name="location"
                type="text"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="City, Region, Country"
                disabled={isPending}
              />
            </div>
            <div>
              <label htmlFor="studentCount" className="block text-sm font-medium mb-2">
                Number of Students *
              </label>
              <Input
                id="studentCount"
                name="studentCount"
                type="number"
                required
                min="20"
                value={formData.studentCount}
                onChange={handleChange}
                placeholder="Minimum 20 students"
                disabled={isPending}
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-2">
              Program Description *
            </label>
            <Textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your educational goals, target students, current challenges, and how our solar-powered AI tutoring system would benefit your community..."
              rows={4}
              disabled={isPending}
            />
          </div>

          <div>
            <label htmlFor="infrastructure" className="block text-sm font-medium mb-2">
              Current Infrastructure *
            </label>
            <Textarea
              id="infrastructure"
              name="infrastructure"
              required
              value={formData.infrastructure}
              onChange={handleChange}
              placeholder="Describe your current facilities, power situation, internet connectivity, available space for equipment, and any existing educational technology..."
              rows={4}
              disabled={isPending}
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting Application...
              </>
            ) : (
              "Submit Pilot Application"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
