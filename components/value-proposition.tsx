"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sun, Brain, Globe, BookOpen, Zap, GraduationCap, BarChart3, Leaf } from "lucide-react"
import { motion } from "framer-motion"

const valueProps = [
  {
    icon: Sun,
    title: "100% Renewable Energy",
    description: "Every lesson is powered by solar energy, demonstrating sustainable technology in action",
    color: "text-accent-500",
  },
  {
    icon: Brain,
    title: "Adaptive AI Tutoring",
    description: "Personalized learning paths that adapt to each student's pace and learning style",
    color: "text-primary-500",
  },
  {
    icon: Globe,
    title: "Scalable Access",
    description: "Reaching remote and underserved communities with minimal infrastructure requirements",
    color: "text-blue-500",
  },
  {
    icon: BookOpen,
    title: "Real-World Learning",
    description: "Students learn STEM concepts while experiencing sustainable technology firsthand",
    color: "text-green-500",
  },
  {
    icon: Zap,
    title: "Smart Energy Management",
    description: "Systems optimize energy usage for continuous operation even during cloudy days",
    color: "text-yellow-500",
  },
  {
    icon: GraduationCap,
    title: "Comprehensive Curriculum",
    description: "Math, physics, chemistry, biology, and environmental science with interactive simulations",
    color: "text-purple-500",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Real-time analytics for students, teachers, and parents",
    color: "text-indigo-500",
  },
]

export function ValueProposition() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Leaf className="h-4 w-4 mr-2" />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300`}>
                      <prop.icon className={`h-6 w-6 ${prop.color}`} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{prop.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
