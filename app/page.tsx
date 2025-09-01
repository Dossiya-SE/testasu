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
      <main className="min-h-screen">
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
      </main>
    </>
  )
}
