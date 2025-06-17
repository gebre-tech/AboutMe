import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-purple-300 mb-4">Ready to Secure Your Digital Assets?</h3>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                  Interested in cybersecurity collaboration or have a project that needs security expertise? Let's
                  discuss how we can protect your digital infrastructure together.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-purple-300">Email</h4>
                  <a
                    href="mailto:gebremeskelshimels@gmail.com"
                    className="text-slate-400 hover:text-purple-300 transition-colors"
                  >
                    gebremeskelshimels@gmail.com
                  </a>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-purple-300">Location</h4>
                  <span className="text-slate-400">Addis Ababa, Ethiopia</span>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-purple-300">Open Source</h4>
                  <span className="text-slate-400">Available for collaboration</span>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                  <a href="mailto:gebremeskelshimels@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </a>
                </Button>

                <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                  <a href="https://linkedin.com/in/gebremeskel-shimels-1b0309354" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>

                <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                  <a href="https://github.com/gebre-tech" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
