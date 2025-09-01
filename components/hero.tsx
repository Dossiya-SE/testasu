"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import { Sun, Battery, Activity } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
      className="relative bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20 lg:py-32 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge
              variant="secondary"
              className="mb-6 text-sm font-medium bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors"
            >
              🌱 Sustainable Education Technology
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-balance leading-tight">
              Lighting the Path to Learning
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto lg:mx-0 text-pretty leading-relaxed">
              Providing solar lamps and AI-powered STEM tutoring to rural students in sub-Saharan Africa, ensuring
              reliable light and personalized learning support
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-4 bg-white text-primary-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/pilot">Join Our Pilot Program</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Link href="#solution">Learn More</Link>
              </Button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center lg:text-left group">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Sun className="h-6 w-6 mr-2 text-accent-400" />
                  <div className="text-3xl lg:text-4xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {lampsCount}+
                  </div>
                </div>
                <div className="text-white/80 font-medium">Solar Lamps Distributed</div>
              </div>

              <div className="text-center lg:text-left group">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Battery className="h-6 w-6 mr-2 text-accent-400" />
                  <div className="text-3xl lg:text-4xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {testersCount}+
                  </div>
                </div>
                <div className="text-white/80 font-medium">AI Tutor Beta Testers</div>
              </div>

              <div className="text-center lg:text-left group">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Activity className="h-6 w-6 mr-2 text-accent-400" />
                  <div className="text-3xl lg:text-4xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {goalCount.toLocaleString()}
                  </div>
                </div>
                <div className="text-white/80 font-medium">Students Goal</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-last">
            <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/african-students-studying-with-solar-lamps-and-ai-.png"
                alt="African students studying with solar lamps and AI tutoring devices"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent-500 text-white p-3 rounded-full shadow-lg animate-bounce">
              <Sun className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary-500 text-white p-3 rounded-full shadow-lg animate-pulse">
              <Battery className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
