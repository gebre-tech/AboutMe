import { Card, CardContent } from "@/components/ui/card"
import { Shield, Code, Network, Eye } from "lucide-react"

const skillCategories = [
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: [
      "Threat Analysis",
      "Network Security",
      "Awareness Creation",
      "Ethical Hacking",
      "Vulnerability Assessment",
    ],
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["C++", "Python/Django", "JavaScript", "PHP", "HTML/CSS"],
  },
  {
    title: "Mobile Development",
    icon: Network,
    skills: ["React Native", "Expo", "WebSocket", "API Integration", "Cross-platform Development"],
  },
  {
    title: "Security Tools",
    icon: Eye,
    skills: ["Wireshark", "Nmap", "Kali Linux", "Ubuntu", "Parrot OS"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-300">{category.title}</h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 max-w-2xl mx-auto">
            Continuously learning and staying updated with the latest cybersecurity threats, tools, and best practices
            to provide comprehensive security solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
