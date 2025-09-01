"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import { Sun, Battery, Activity, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

function useAnimatedCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return count
}

export function Hero() {
  const lampsCount = useAnimatedCounter(250, 2500)
  const testersCount = useAnimatedCounter(20, 2000)
  const goalCount = useAnimatedCounter(1000, 3000)

  return (
    <section
      id="main-content"
      className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      <div className="particles-bg">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/20 to-transparent animate-gradient-shift"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge
                variant="secondary"
                className="mb-6 text-sm font-medium glass-effect text-white border-white/20 hover:bg-white/20 transition-all duration-300 hover-glow animate-shimmer"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Sustainable Education Technology
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-balance leading-tight gradient-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Lighting the Path to Learning
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto lg:mx-0 text-pretty leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Providing solar lamps and AI-powered STEM tutoring to rural students in sub-Saharan Africa, ensuring
              reliable light and personalized learning support
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-4 bg-white text-primary-600 hover:bg-white/90 hover-lift transition-all duration-300 shadow-lg hover:shadow-xl animate-glow"
              >
                <Link href="/pilot">
                  <Zap className="w-5 h-5 mr-2" />
                  Join Our Pilot Program
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 glass-effect text-white hover:bg-white/10 hover-lift transition-all duration-300 bg-transparent"
              >
                <Link href="#solution">Learn More</Link>
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.div
                className="text-center lg:text-left group glass-card rounded-xl p-4 hover-lift"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Sun className="h-6 w-6 mr-2 text-accent-400 animate-float" />
                  <div className="text-3xl lg:text-4xl font-bold group-hover:scale-110 transition-transform duration-300 gradient-text">
                    {lampsCount}+
                  </div>
                </div>
                <div className="text-white/80 font-medium">Solar Lamps Distributed</div>
              </motion.div>

              <motion.div
                className="text-center lg:text-left group glass-card rounded-xl p-4 hover-lift"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Battery className="h-6 w-6 mr-2 text-accent-400 animate-float" style={{ animationDelay: "1s" }} />
                  <div className="text-3xl lg:text-4xl font-bold group-hover:scale-110 transition-transform duration-300 gradient-text">
                    {testersCount}+
                  </div>
                </div>
                <div className="text-white/80 font-medium">AI Tutor Beta Testers</div>
              </motion.div>

              <motion.div
                className="text-center lg:text-left group glass-card rounded-xl p-4 hover-lift"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Activity className="h-6 w-6 mr-2 text-accent-400 animate-float" style={{ animationDelay: "2s" }} />
                  <div className="text-3xl lg:text-4xl font-bold group-hover:scale-110 transition-transform duration-300 gradient-text">
                    {goalCount.toLocaleString()}
                  </div>
                </div>
                <div className="text-white/80 font-medium">Students Goal</div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl glass-card hover-lift">
              <Image
                src="/african-students-studying-with-solar-lamps-and-ai-.png"
                alt="African students studying with solar lamps and AI tutoring devices"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute inset-0 animate-shimmer opacity-30"></div>
            </div>

            <motion.div
              className="absolute -top-4 -right-4 bg-accent-500 text-white p-3 rounded-full shadow-lg glass-effect hover-glow"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Sun className="h-6 w-6" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-primary-500 text-white p-3 rounded-full shadow-lg glass-effect hover-glow"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Battery className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
