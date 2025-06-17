import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Shield, Code } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">Education</h3>
                  <p className="text-slate-400">Cybersecurity Graduate</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">Security Focus</h3>
                  <p className="text-slate-400">Privacy & Protection</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">Development</h3>
                  <p className="text-slate-400">Secure Applications</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-slate-300 leading-relaxed">
                  As a Cybersecurity graduate (June 21, 2025) from Bahir Dar University, I specialize in designing
                  secure applications with a focus on privacy. My flagship project is a real-time messaging app with
                  multimedia sharing, leveraging a custom Noise Protocol Framework for end-to-end encryption and forward
                  secrecy.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
