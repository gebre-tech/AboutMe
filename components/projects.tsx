import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, MessageSquare, ShoppingBag } from "lucide-react"

const projects = [
  {
    title: "Real-Time Messaging App",
    description:
      "A secure mobile app built with React Native and Django, supporting multimedia sharing with a custom Noise Protocol Framework for end-to-end encryption and forward secrecy, using WebSocket and Cloudinary.",
    icon: MessageSquare,
    technologies: ["React Native", "Django", "WebSocket", "Noise Protocol", "Render","Cloudinary"],
    github: "https://github.com/gebre-tech/almost_here",
    features: ["End-to-end encryption", "Forward secrecy", "Multimedia sharing", "Real-time messaging"],
  },
  {
    title: "Clothing & Shoe Store Website",
    description:
      "A local e-commerce website with an admin dashboard for managing products, users, and operations. Features include adding/removing products, setting prices, and tracking activity, integrated with a local payment method.",
    icon: ShoppingBag,
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/Gebire3/EthioDen",
    features: ["Admin dashboard", "Product management", "User management", "Local payment integration"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-xl text-purple-300">{project.title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-slate-300 leading-relaxed">{project.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Features:</h4>
                  <ul className="text-sm text-slate-400 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-purple-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
