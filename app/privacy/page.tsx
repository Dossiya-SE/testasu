import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Solar STEM AI Initiative's privacy policy and data protection practices.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Privacy Policy
          </Badge>
          <h1 className="text-4xl font-display font-bold mb-6">Your Privacy Matters</h1>
          <p className="text-xl text-muted-foreground">Last updated: January 2025</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>We collect information you provide directly to us, such as when you:</p>
              <ul>
                <li>Fill out our contact form or pilot program application</li>
                <li>Subscribe to our newsletter or updates</li>
                <li>Participate in our educational programs</li>
                <li>Contact us for support</li>
              </ul>
              <p>
                This may include your name, email address, phone number, organization details, and educational
                information.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process pilot program applications and manage educational programs</li>
                <li>Send you updates about our initiatives and impact</li>
                <li>Improve our services and develop new educational solutions</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
              <ul>
                <li>With your explicit consent</li>
                <li>
                  To trusted partners who assist in operating our programs (under strict confidentiality agreements)
                </li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with educational research (with anonymized data only)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul>
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Secure data storage with reputable cloud providers</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request data portability where applicable</li>
              </ul>
              <p>To exercise these rights, please contact us at gefetwo@gmail.com.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
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
