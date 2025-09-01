"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState, useRef } from "react"

function useInView(threshold = 0.1) {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView] as const
}

function AnimatedProgressBar({ value, delay = 0 }: { value: number; delay?: number }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return (
    <div className="w-full bg-muted rounded-full h-2">
      <div
        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

export function ImpactMetrics() {
  const [ref, inView] = useInView(0.2)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Measuring Our Impact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Early results from our solar lamp distribution and AI tutor prototype testing in rural Benin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <CardHeader className="pb-2">
              <CardTitle className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                250+
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Solar Lamps Distributed</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group animation-delay-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-3xl font-bold text-secondary group-hover:scale-110 transition-transform duration-300">
                20+
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">AI Tutor Beta Testers</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group animation-delay-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">
                1
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Country (Benin)</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group animation-delay-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                1,000
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Students Goal</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Early Educational Outcomes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Extended Study Hours</span>
                <span className="text-sm font-semibold">+3 hrs/day</span>
              </div>
              <AnimatedProgressBar value={inView ? 85 : 0} delay={200} />

              <div className="flex justify-between items-center">
                <span className="text-sm">Student Engagement</span>
                <span className="text-sm font-semibold">High</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-secondary h-2 rounded-full transition-all duration-1000 ease-out delay-400"
                  style={{ width: inView ? "90%" : "0%" }}
                />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Teacher Satisfaction</span>
                <span className="text-sm font-semibold">Positive</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out delay-600"
                  style={{ width: inView ? "88%" : "0%" }}
                />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">AI Tutor Interest</span>
                <span className="text-sm font-semibold">Strong Demand</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out delay-800"
                  style={{ width: inView ? "95%" : "0%" }}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Solar Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center group cursor-default">
                <div className="text-2xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <p className="text-sm text-muted-foreground">Solar Powered Lamps</p>
              </div>

              <div className="text-center group cursor-default">
                <div className="text-2xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">
                  8+ hrs
                </div>
                <p className="text-sm text-muted-foreground">Daily Light Duration</p>
              </div>

              <div className="text-center group cursor-default">
                <div className="text-2xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                  95%
                </div>
                <p className="text-sm text-muted-foreground">Student Satisfaction</p>
              </div>

              <div className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors duration-300">
                <h4 className="font-semibold mb-2">Energy Source Comparison</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Kerosene Lamps</span>
                    <span className="text-destructive">Harmful fumes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Our Solar Lamps</span>
                    <span className="text-primary">Clean & Safe</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
