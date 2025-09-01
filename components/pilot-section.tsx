import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function PilotSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Pilot Programs
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Join Our Growing Community</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Starting in rural Benin with 250+ solar lamps distributed and AI tutor prototype testing underway. Ready to
            expand across sub-Saharan Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Avatar>
                  <AvatarImage src="/teacher-benin.jpg" />
                  <AvatarFallback>MT</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">Marie Tognon</h4>
                  <p className="text-sm text-muted-foreground">Primary School Teacher, Rural Benin</p>
                </div>
              </div>
              <blockquote className="text-sm italic mb-4">
                "My students can now study after sunset. I see them more prepared for class and excited about learning.
                The solar lamps have made a real difference."
              </blockquote>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  Benin
                </Badge>
                <Badge variant="outline" className="text-xs">
                  50+ Students
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Avatar>
                  <AvatarImage src="/student-benin.jpg" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">Adjoa Sossou</h4>
                  <p className="text-sm text-muted-foreground">Student, Age 14</p>
                </div>
              </div>
              <blockquote className="text-sm italic mb-4">
                "Before the solar lamp, I could only study until dark. Now I can do my homework and read more books. I
                want to study engineering like the founder!"
              </blockquote>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  Benin
                </Badge>
                <Badge variant="outline" className="text-xs">
                  AI Beta Tester
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Avatar>
                  <AvatarImage src="/parent-benin.jpg" />
                  <AvatarFallback>KA</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">Koffi Agbodjan</h4>
                  <p className="text-sm text-muted-foreground">Parent & Community Leader</p>
                </div>
              </div>
              <blockquote className="text-sm italic mb-4">
                "This project brings hope to our village. Our children now have the same opportunities to learn as
                students in the city. The future looks brighter."
              </blockquote>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  Benin
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Community Leader
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Education in Your Community?</h3>
          <p className="text-lg mb-6 text-primary-foreground/90">
            Join our expansion across sub-Saharan Africa and bring solar-powered learning to your students
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h4 className="font-semibold mb-2">What We Provide</h4>
              <ul className="text-sm text-primary-foreground/80 space-y-1">
                <li>• Complete solar setup</li>
                <li>• AI tutoring devices</li>
                <li>• Teacher training</li>
                <li>• Ongoing support</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">What You Need</h4>
              <ul className="text-sm text-primary-foreground/80 space-y-1">
                <li>• 20+ students</li>
                <li>• Dedicated space</li>
                <li>• Local coordinator</li>
                <li>• Community support</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Program Duration</h4>
              <ul className="text-sm text-primary-foreground/80 space-y-1">
                <li>• 6-month pilot</li>
                <li>• Monthly evaluations</li>
                <li>• Progress tracking</li>
                <li>• Impact assessment</li>
              </ul>
            </div>
          </div>

          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Apply for Pilot Program
          </Button>
        </div>
      </div>
    </section>
  )
}
