import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Meet the Founder</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From rural Benin to Arizona State University - a journey driven by the belief that light enables learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/founder-photo.jpg" />
                    <AvatarFallback>DD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">Dossiya Dakou</h3>
                    <p className="text-muted-foreground">Mastercard Foundation Scholar, Arizona State University</p>
                  </div>
                </div>

                <blockquote className="text-lg italic mb-4">
                  "Growing up in rural Benin, I experienced firsthand how lack of reliable electricity limited students'
                  ability to study after dark. Now, as a graduate student in Sustainable Engineering, I'm combining
                  solar technology with AI to ensure no student has to choose between light and learning."
                </blockquote>

                <p className="text-muted-foreground">
                  Currently pursuing Master of Science in Engineering (MSE) In Sustainable Engineering at Arizona State
                  University, with a B.Sc. in Renewable Energy & Energy Systems. Passionate about bridging the gap
                  between energy access and educational outcomes in sub-Saharan Africa.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full p-3 flex-shrink-0">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Light Enables Learning</h4>
                <p className="text-muted-foreground">
                  Reliable lighting is the foundation of education. Our solar lamps give rural students the power to
                  study when they need to, extending learning beyond daylight hours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-secondary text-secondary-foreground rounded-full p-3 flex-shrink-0">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Offline-First Innovation</h4>
                <p className="text-muted-foreground">
                  Our solar-powered AI STEM tutor works without internet connectivity, ensuring students in remote areas
                  can access quality education regardless of infrastructure limitations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-accent text-accent-foreground rounded-full p-3 flex-shrink-0">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Measure What Matters</h4>
                <p className="text-muted-foreground">
                  Success is measured by improved STEM test scores and increased study hours. We track real educational
                  outcomes, not just technology adoption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
