import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ValueProposition } from "@/components/value-proposition"
import { About } from "@/components/about"
import { Team } from "@/components/team"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { HowItWorks } from "@/components/how-it-works"
import { ImpactMetrics } from "@/components/impact-metrics"
import { PilotSection } from "@/components/pilot-section"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen relative">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-particle-float"></div>
          <div
            className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent/40 rounded-full animate-particle-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-3/4 w-3 h-3 bg-primary/20 rounded-full animate-particle-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative z-10">
          <Hero />
          <ValueProposition />
          <About />
          <Team />
          <Problem />
          <Solution />
          <HowItWorks />
          <ImpactMetrics />
          <PilotSection />
          <FAQ />
          <ContactForm />
          <Footer />
        </div>
      </main>
    </>
  )
}
