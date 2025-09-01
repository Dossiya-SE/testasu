"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sun, Brain, BookOpen, BarChart3, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const steps = [
  {
    step: 1,
    title: "Solar Setup",
    description: "Install compact solar panels and battery systems to power the AI tutoring devices sustainably.",
    icon: Sun,
    color: "bg-accent text-accent-foreground",
  },
  {
    step: 2,
    title: "AI Assessment",
    description:
      "Students take initial assessments to determine their current knowledge level and learning preferences.",
    icon: Brain,
    color: "bg-primary text-primary-foreground",
  },
  {
    step: 3,
    title: "Personalized Learning",
    description:
      "AI creates customized lesson plans and interactive exercises tailored to each student's needs and pace.",
    icon: BookOpen,
    color: "bg-secondary text-secondary-foreground",
  },
  {
    step: 4,
    title: "Progress Tracking",
    description: "Continuous monitoring and adjustment of learning paths based on student performance and engagement.",
    icon: BarChart3,
    color: "bg-muted text-muted-foreground",
  },
]

const technologies = [
  "Advanced machine learning algorithms for personalized content delivery",
  "High-efficiency solar panels with smart energy management systems",
  "Cloud-based infrastructure for seamless content updates and progress sync",
  "Offline capabilities for areas with limited internet connectivity",
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            How It Works
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-balance">
            Simple Process, Powerful Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our solar-powered AI tutoring system delivers personalized STEM education through a streamlined, scalable
            process designed for rural communities.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-20">
          {/* Connecting line */}
          <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="ml-0 md:ml-20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`${step.color} rounded-full p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-muted-foreground">Step {step.step}</span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Step number circle for desktop */}
                <div className="absolute left-6 top-6 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary hidden md:flex">
                  {step.step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold mb-6">The Technology Behind the Magic</h3>
                  <div className="space-y-4">
                    {technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 group"
                      >
                        <div className="bg-primary text-primary-foreground rounded-full p-1 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                          <ArrowRight className="h-3 w-3" />
                        </div>
                        <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                          {tech}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/technical-diagram-solar-ai-education-system.png"
                      alt="Technical diagram of solar-powered AI tutoring system showing components and data flow"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
