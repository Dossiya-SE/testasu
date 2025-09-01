"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Sun, Lightbulb, TrendingDown } from "lucide-react"
import { motion } from "framer-motion"

const challenges = [
  {
    icon: Zap,
    title: "Energy Poverty",
    description:
      "Over 600 million people in sub-Saharan Africa lack access to electricity, with frequent blackouts disrupting students' ability to study after dark.",
    color: "text-red-500",
  },
  {
    icon: Sun,
    title: "Limited Study Hours",
    description:
      "Rural students can only study during daylight hours, severely limiting their learning time and academic performance compared to urban peers.",
    color: "text-orange-500",
  },
  {
    icon: Lightbulb,
    title: "STEM Education Gap",
    description:
      "Rural schools lack qualified STEM teachers and resources, leaving students without access to quality science, technology, engineering, and math education.",
    color: "text-yellow-500",
  },
]

export function Problem() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="destructive" className="mb-4">
            The Challenge We're Solving
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-balance">
            Breaking Down Barriers to Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Rural students face multiple interconnected challenges that limit their educational opportunities and future
            potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6 text-center">
                  <div className="bg-destructive/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <challenge.icon className={`h-8 w-8 ${challenge.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {challenge.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Card className="bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-destructive/20 rounded-full p-3">
                  <TrendingDown className="h-8 w-8 text-destructive" />
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">The Compounding Effect</h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Without reliable lighting, students can't extend their study hours. Without quality STEM education, they
                can't develop the skills needed to solve tomorrow's challenges. Our solution addresses both barriers
                simultaneously.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
