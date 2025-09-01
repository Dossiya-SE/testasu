import type React from "react"
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Solar STEM AI - Lighting the Path to Learning",
    template: "%s | Solar STEM AI",
  },
  description:
    "Providing solar lamps and AI-powered STEM tutoring to rural students in sub-Saharan Africa, ensuring reliable light and personalized learning support",
  keywords: [
    "solar energy",
    "STEM education",
    "AI tutoring",
    "rural education",
    "sub-Saharan Africa",
    "sustainable technology",
    "educational technology",
    "renewable energy",
    "artificial intelligence",
    "Benin education",
    "solar lamps",
    "personalized learning",
  ],
  authors: [{ name: "Dossiya Dakou" }],
  creator: "Solar STEM AI Initiative",
  publisher: "Solar STEM AI Initiative",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://solarstemai.org"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "fr-FR": "/fr",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Solar STEM AI - Lighting the Path to Learning",
    description:
      "Providing solar lamps and AI-powered STEM tutoring to rural students in sub-Saharan Africa. 250+ lamps distributed, 20+ AI tutor beta testers, transforming education in rural communities.",
    siteName: "Solar STEM AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Solar STEM AI - Transforming education with solar-powered AI tutoring",
      },
      {
        url: "/og-image-square.png",
        width: 1200,
        height: 1200,
        alt: "Solar STEM AI Initiative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar STEM AI - Lighting the Path to Learning",
    description:
      "Providing solar lamps and AI-powered STEM tutoring to rural students in sub-Saharan Africa. 250+ lamps distributed, 20+ AI tutor beta testers.",
    images: ["/og-image.png"],
    creator: "@solarstemai",
    site: "@solarstemai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://solarstemai.org/#organization",
                  name: "Solar STEM AI Initiative",
                  url: "https://solarstemai.org",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://solarstemai.org/logo.png",
                    width: 512,
                    height: 512,
                  },
                  description:
                    "Providing solar lamps and AI-powered STEM tutoring to rural students in sub-Saharan Africa",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Abomey-Calavi",
                    addressCountry: "Benin",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+229-0194272424",
                    email: "gefetwo@gmail.com",
                    contactType: "customer service",
                    availableLanguage: ["English", "French"],
                  },
                  founder: {
                    "@type": "Person",
                    name: "Dossiya Dakou",
                    jobTitle: "Founder & CEO",
                    alumniOf: "Arizona State University",
                  },
                  sameAs: ["https://linkedin.com/company/solar-stem-ai", "https://twitter.com/solarstemai"],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://solarstemai.org/#website",
                  url: "https://solarstemai.org",
                  name: "Solar STEM AI",
                  description: "Lighting the Path to Learning with Solar-Powered AI Education",
                  publisher: {
                    "@id": "https://solarstemai.org/#organization",
                  },
                  inLanguage: "en-US",
                },
                {
                  "@type": "WebPage",
                  "@id": "https://solarstemai.org/#webpage",
                  url: "https://solarstemai.org",
                  name: "Solar STEM AI - Lighting the Path to Learning",
                  isPartOf: {
                    "@id": "https://solarstemai.org/#website",
                  },
                  about: {
                    "@id": "https://solarstemai.org/#organization",
                  },
                  description:
                    "Providing solar lamps and AI-powered STEM tutoring to rural students in sub-Saharan Africa",
                  inLanguage: "en-US",
                },
                {
                  "@type": "EducationalOrganization",
                  "@id": "https://solarstemai.org/#educational-org",
                  name: "Solar STEM AI Initiative",
                  description:
                    "Educational technology organization focused on providing solar-powered AI tutoring to rural communities",
                  url: "https://solarstemai.org",
                  areaServed: {
                    "@type": "Place",
                    name: "Sub-Saharan Africa",
                  },
                  serviceType: "Educational Technology",
                  educationalCredentialAwarded: "STEM Education Support",
                },
                {
                  "@type": "Product",
                  name: "Solar-Powered AI STEM Tutor",
                  description: "AI-powered educational system powered by renewable solar energy for rural communities",
                  brand: {
                    "@id": "https://solarstemai.org/#organization",
                  },
                  category: "Educational Technology",
                  audience: {
                    "@type": "EducationalAudience",
                    educationalRole: "student",
                    audienceType: "Rural Students",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1">{children}</div>
            </div>
          </Suspense>
          <Toaster />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
