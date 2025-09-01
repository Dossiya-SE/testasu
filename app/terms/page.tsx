import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Solar STEM AI Initiative's terms of service and usage guidelines.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Terms of Service
          </Badge>
          <h1 className="text-4xl font-display font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">Last updated: January 2025</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                By accessing and using the Solar STEM AI Initiative website and services, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Use License</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Permission is granted to temporarily access the materials on Solar STEM AI Initiative's website for
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
                title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Educational Services</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Our educational services and pilot programs are provided subject to the following terms:</p>
              <ul>
                <li>Participation in pilot programs requires completion of application and approval process</li>
                <li>Educational content is provided for non-commercial educational use only</li>
                <li>Users must comply with local laws and educational regulations</li>
                <li>We reserve the right to modify or discontinue services with reasonable notice</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Users of our services agree to:</p>
              <ul>
                <li>Provide accurate and complete information when requested</li>
                <li>Use services in accordance with applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
                <li>Not interfere with or disrupt the services or servers</li>
                <li>Report any technical issues or concerns promptly</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                The materials on Solar STEM AI Initiative's website are provided on an 'as is' basis. Solar STEM AI
                Initiative makes no warranties, expressed or implied, and hereby disclaims and negates all other
                warranties including without limitation, implied warranties or conditions of merchantability, fitness
                for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitations</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                In no event shall Solar STEM AI Initiative or its suppliers be liable for any damages (including,
                without limitation, damages for loss of data or profit, or due to business interruption) arising out of
                the use or inability to use the materials on Solar STEM AI Initiative's website, even if Solar STEM AI
                Initiative or an authorized representative has been notified orally or in writing of the possibility of
                such damage.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Questions about the Terms of Service should be sent to us at:</p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Email:</strong> gefetwo@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +229 0194272424
                </p>
                <p>
                  <strong>Address:</strong> Benin Abomey-Calavi
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
