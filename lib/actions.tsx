"use server"

import { Resend } from "resend"
import { z } from "zod"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  location: z.string().optional(),
  students: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

const pilotFormSchema = z.object({
  organizationName: z.string().min(2, "Organization name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  location: z.string().min(2, "Location is required"),
  studentCount: z.string().min(1, "Number of students is required"),
  description: z.string().min(50, "Please provide a detailed description (minimum 50 characters)"),
  infrastructure: z.string().min(10, "Please describe your current infrastructure"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type PilotFormData = z.infer<typeof pilotFormSchema>

export async function submitContactForm(data: ContactFormData) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return { success: false, error: "Email service is not configured. Please contact support." }
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const validatedData = contactFormSchema.parse(data)

    const { error } = await resend.emails.send({
      from: "Solar STEM AI <noreply@solarstemai.org>",
      to: ["gefetwo@gmail.com"],
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16A34A;">New Contact Form Submission</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            ${validatedData.organization ? `<p><strong>Organization:</strong> ${validatedData.organization}</p>` : ""}
            ${validatedData.location ? `<p><strong>Location:</strong> ${validatedData.location}</p>` : ""}
            ${validatedData.students ? `<p><strong>Number of Students:</strong> ${validatedData.students}</p>` : ""}
          </div>

          <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${validatedData.message}</p>
          </div>

          <div style="margin-top: 20px; padding: 15px; background: #f0f9ff; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #0369a1;">
              This message was sent from the Solar STEM AI contact form.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Email sending error:", error)
      return { success: false, error: "Failed to send email. Please try again." }
    }

    return { success: true, message: "Thank you for your message! We'll get back to you within 24 hours." }
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message }
    }

    return { success: false, error: "Something went wrong. Please try again." }
  }
}

export async function submitPilotApplication(data: PilotFormData) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return { success: false, error: "Email service is not configured. Please contact support." }
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const validatedData = pilotFormSchema.parse(data)

    const { error } = await resend.emails.send({
      from: "Solar STEM AI <noreply@solarstemai.org>",
      to: ["gefetwo@gmail.com", "partnerships@solarstemai.org"],
      subject: `New Pilot Program Application - ${validatedData.organizationName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16A34A;">New Pilot Program Application</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Organization Details</h3>
            <p><strong>Organization:</strong> ${validatedData.organizationName}</p>
            <p><strong>Contact Person:</strong> ${validatedData.contactName}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Phone:</strong> ${validatedData.phone}</p>
            <p><strong>Location:</strong> ${validatedData.location}</p>
            <p><strong>Number of Students:</strong> ${validatedData.studentCount}</p>
          </div>

          <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Program Description</h3>
            <p style="white-space: pre-wrap;">${validatedData.description}</p>
          </div>

          <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Current Infrastructure</h3>
            <p style="white-space: pre-wrap;">${validatedData.infrastructure}</p>
          </div>

          <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #92400e;">
              <strong>Priority Application:</strong> This is a pilot program application and requires immediate attention.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Pilot application email error:", error)
      return { success: false, error: "Failed to submit application. Please try again." }
    }

    return {
      success: true,
      message: "Thank you for your pilot program application! We'll review it and get back to you within 48 hours.",
    }
  } catch (error) {
    console.error("Pilot application error:", error)

    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message }
    }

    return { success: false, error: "Something went wrong. Please try again." }
  }
}
