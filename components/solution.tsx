"use client"
import { Badge } from "@/components/ui/badge"
import { Check, Sun, Brain } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const differentiators = [
  "100% Renewable Energy — Every lesson is powered by solar energy, demonstrating sustainable technology in action",
  "Adaptive AI Tutoring — Personalized learning paths that adapt to each student's pace and learning style",
  "Scalable Access — Reaching remote and underserved communities with minimal infrastructure requirements",
  "Real-World Learning — Students learn STEM concepts while experiencing sustainable technology firsthand",
  "Smart Energy Management — Systems optimize energy usage for continuous operation even during cloudy days",
  "Comprehensive Curriculum — Math, physics, chemistry, biology, and environmental science with interactive simulations",
  "Progress Tracking — Real-time analytics for students, teachers, and parents",
]

export function Solution() {
  return (
    <section id="solution" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4 bg-primary">
            Our Solution
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-balance">
            AI-Powered STEM Education, Sustainably Delivered
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We combine cutting-edge artificial intelligence with renewable energy to create scalable, personalized STEM
            education that teaches sustainability by example.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/solar-powered-ai-tutoring-system-in-african-class.png"
                alt="Solar-powered AI tutoring system in African classroom"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg animate-pulse">
              <Sun className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-3 rounded-full shadow-lg animate-bounce">
              <Brain className="h-6 w-6" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold">How We're Different</h3>

            <div className="space-y-4">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 group"
                >
                  <div className="bg-primary text-primary-foreground rounded-full p-2 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
