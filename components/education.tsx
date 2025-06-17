import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Building, Calendar } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
          Education & Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-purple-300 mb-2">Bachelor's Degree in Cybersecurity</h3>
                  <div className="flex items-center space-x-4 text-slate-400 mb-4">
                    <span className="flex items-center space-x-1">
                      <Building className="w-4 h-4" />
                      <span>Bahir Dar University</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Graduated: June 21, 2025</span>
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Focused on cryptography, secure coding, and ethical hacking. Capstone project: Secure real-time
                    messaging app with advanced encryption protocols and forward secrecy implementation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-purple-300 mb-2">Network Security Intern</h3>
                  <div className="flex items-center space-x-4 text-slate-400 mb-4">
                    <span>Bahir Dar University Data Center (Peda Campus)</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Gained hands-on experience in securing network infrastructure and monitoring data center operations.
                    Worked with enterprise security tools and contributed to network vulnerability assessments.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
