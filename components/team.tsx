"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function Team() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate innovators combining technology and sustainability to transform education in rural communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Dossiya Dakou */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-emerald-200">
            <CardContent className="p-8 text-center">
              <div className="relative mb-6">
                <Avatar className="w-32 h-32 mx-auto ring-4 ring-emerald-200 group-hover:ring-emerald-300 transition-all duration-300">
                  <AvatarImage src="/founder-portrait.png" alt="Dossiya Dakou" />
                  <AvatarFallback className="text-2xl bg-emerald-100 text-emerald-700">DD</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white">Co-Founder</Badge>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dossiya Dakou</h3>
              <p className="text-emerald-600 font-semibold mb-4">Co-Founder & Lead Engineer</p>

              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>• MSE in Sustainable Engineering, ASU</p>
                <p>• Mastercard Foundation Scholar</p>
                <p>• 250+ Solar Lamps Distributed</p>
              </div>

              <p className="text-gray-700 italic">
                "Growing up in rural Benin, I experienced firsthand how lack of reliable electricity limited students'
                ability to study after dark."
              </p>
            </CardContent>
          </Card>

          {/* M'pia Yahgo */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-emerald-200">
            <CardContent className="p-8 text-center">
              <div className="relative mb-6">
                <Avatar className="w-32 h-32 mx-auto ring-4 ring-emerald-200 group-hover:ring-emerald-300 transition-all duration-300">
                  <AvatarImage src="/professional-portrait-of-m-pia-yahgo.png" alt="M'pia Yahgo" />
                  <AvatarFallback className="text-2xl bg-emerald-100 text-emerald-700">MY</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white">Co-Founder</Badge>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">M'pia Yahgo</h3>
              <p className="text-emerald-600 font-semibold mb-4">Co-Founder & Operations Lead</p>

              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>• Community Engagement Specialist</p>
                <p>• Educational Program Development</p>
                <p>• Rural Implementation Strategy</p>
              </div>

              <p className="text-gray-700 italic">
                "Together, we're ensuring that every student in rural Africa has access to quality STEM education,
                regardless of their location."
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-full px-8 py-4 border border-emerald-200">
            <div className="flex -space-x-2">
              <Avatar className="w-10 h-10 border-2 border-white">
                <AvatarFallback className="bg-emerald-100 text-emerald-700 text-sm">DD</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-white">
                <AvatarFallback className="bg-emerald-100 text-emerald-700 text-sm">MY</AvatarFallback>
              </Avatar>
            </div>
            <span className="text-gray-700 font-medium">Co-Founders since 2024</span>
          </div>
        </div>
      </div>
    </section>
  )
}
