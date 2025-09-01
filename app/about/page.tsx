import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, Users, Globe, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us - Our Mission to Transform Education",
  description:
    "Learn about Dossiya Dakou and the Solar STEM AI Initiative's mission to provide solar-powered AI tutoring to rural students in sub-Saharan Africa.",
}

const milestones = [
  {
    year: "2023",
    title: "Initiative Founded",
    description: "Dossiya Dakou launches Solar STEM AI Initiative while pursuing MSE at Arizona State University",
    icon: Lightbulb,
  },
  {
    year: "2024",
    title: "First Deployment",
    description: "250+ solar lamps distributed to rural communities in Benin, immediate impact on study hours",
    icon: Users,
  },
  {
    year: "2024",
    title: "AI Prototype Launch",
    description: "20+ students begin beta testing AI-powered STEM tutoring system with positive feedback",
    icon: GraduationCap,
  },
  {
    year: "2025",
    title: "Expansion Goals",
    description: "Target 1,000+ students across multiple countries in sub-Saharan Africa",
    icon: Globe,
  },
]

const values = [
  {
    title: "Sustainability First",
    description:
      "Every solution we create is powered by renewable energy, demonstrating environmental responsibility while solving educational challenges.",
    icon: "🌱",
  },
  {
    title: "Equity in Education",
    description:
      "We believe every student, regardless of location or economic status, deserves access to quality STEM education and learning opportunities.",
    icon: "⚖️",
  },
  {
    title: "Innovation for Impact",
    description:
      "We leverage cutting-edge AI and solar technology not for its own sake, but to create measurable improvements in educational outcomes.",
    icon: "🚀",
  },
  {
    title: "Community Partnership",
    description:
      "We work hand-in-hand with local educators, leaders, and families to ensure our solutions meet real community needs and are culturally appropriate.",
    icon: "🤝",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              About Our Mission
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-balance">
              Lighting the Path to Learning
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Born from personal experience with energy poverty in rural Benin, Solar STEM AI Initiative combines
              renewable energy with artificial intelligence to transform education in underserved communities.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Founder Story
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">From Rural Benin to Global Impact</h2>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/founder-portrait.png" alt="Dossiya Dakou" />
                      <AvatarFallback>DD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">Dossiya Dakou</h3>
                      <p className="text-muted-foreground">Founder & CEO</p>
                      <p className="text-sm text-muted-foreground">
                        Currently pursuing Master of Science in Engineering (MSE) In Sustainable Engineering
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-lg italic border-l-4 border-primary pl-4 mb-4">
                    "Growing up in rural Benin, I experienced firsthand how lack of reliable electricity limited
                    students' ability to study after dark. Now, as a graduate student in Sustainable Engineering, I'm
                    combining solar technology with AI to ensure no student has to choose between light and learning."
                  </blockquote>
                </CardContent>
              </Card>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  As a Mastercard Foundation Scholar at Arizona State University, Dossiya witnessed the stark contrast
                  between educational opportunities in urban and rural settings. This experience ignited a passion for
                  creating sustainable solutions that could bridge the educational divide.
                </p>
                <p>
                  The Solar STEM AI Initiative began as a response to a simple yet profound realization: millions of
                  students across sub-Saharan Africa were being held back not by lack of curiosity or intelligence, but
                  by lack of basic infrastructure like reliable lighting and access to quality STEM education.
                </p>
                <p>
                  Today, with 250+ solar lamps already distributed and 20+ students testing our AI tutoring prototype,
                  we're proving that innovative technology can create lasting change when it's designed with community
                  needs at its heart.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/founder-working-with-students-benin.png"
                  alt="Dossiya Dakou working with students in rural Benin"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  <div>
                    <div className="font-semibold">Mastercard Foundation Scholar</div>
                    <div className="text-sm opacity-90">Arizona State University</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Journey
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">Milestones & Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to reality, tracking our progress in transforming education across rural Africa
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative">
                  <Card className="ml-0 md:ml-20 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground rounded-full p-3 flex-shrink-0">
                          <milestone.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">{milestone.year}</Badge>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="absolute left-6 top-6 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary hidden md:flex">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">What Drives Us Forward</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make and every solution we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">Join Us in Transforming Education</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Whether you're an educator, organization, or individual who believes in the power of sustainable education,
            there's a place for you in our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/pilot-program">Apply for Pilot Program</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
