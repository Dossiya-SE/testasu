import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Everything you need to know about our solar-powered AI STEM tutoring initiative
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">
              How does the solar-powered system work in areas with limited sunlight?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Our systems include high-capacity battery storage that can power the AI tutoring devices for up to 3 days
              without direct sunlight. We also use highly efficient solar panels that can generate power even in cloudy
              conditions. For areas with extremely limited sunlight, we provide hybrid systems that can supplement with
              minimal grid power while still maintaining a 90%+ renewable energy ratio.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">
              What age groups and educational levels does the AI tutor support?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Our AI tutoring system is designed for students aged 8-18, covering elementary through high school STEM
              curricula. The AI adapts content complexity based on individual assessment results, so it can effectively
              serve mixed-age classrooms and students with varying educational backgrounds. We also offer specialized
              modules for adult learners and teacher professional development.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">How much does it cost to implement the program?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              For pilot programs, we provide the complete system at no cost to qualifying communities. This includes
              solar panels, batteries, AI tutoring devices, installation, training, and 6 months of support. After the
              pilot phase, the cost varies based on community size and needs, but we work with local governments, NGOs,
              and international development organizations to secure funding and make the program sustainable long-term.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">
              What happens if the technology breaks down or needs maintenance?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We provide comprehensive training to local coordinators on basic maintenance and troubleshooting. Our
              systems are designed for durability and include remote diagnostic capabilities. For major issues, we have
              regional support teams and can provide replacement components quickly. We also maintain detailed
              maintenance schedules and provide ongoing technical support via satellite communication where internet is
              limited.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">
              How do you ensure the AI tutoring is culturally appropriate and relevant?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Our AI system includes cultural adaptation modules that can be customized for local contexts, languages,
              and educational standards. We work closely with local educators and community leaders during
              implementation to ensure content relevance. The system supports multiple languages and can incorporate
              local examples, case studies, and cultural references while maintaining scientific accuracy and
              educational effectiveness.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">
              Can the system work without internet connectivity?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes! Our system is designed to function completely offline for core tutoring activities. The AI runs
              locally on the devices, and we pre-load comprehensive educational content. Internet connectivity is only
              needed for periodic content updates, progress synchronization, and accessing our support team. When
              connectivity is available, the system automatically syncs data and downloads new content during off-peak
              hours.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">
              How do you measure the environmental impact of the program?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We track multiple environmental metrics including total renewable energy generated, carbon emissions
              avoided compared to traditional educational methods, and the educational impact on environmental
              awareness. Each installation includes monitoring systems that measure energy production, consumption, and
              efficiency. We publish quarterly impact reports and work with third-party organizations to verify our
              environmental claims and continuously improve our sustainability practices.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
