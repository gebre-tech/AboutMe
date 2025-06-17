"use client";

import { useState, useEffect } from "react";
import { Shield, Lock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-6">
          <div className="space-y-2">
            <p className="text-purple-300 text-lg font-medium">Hello, I'm</p>
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Gebremeskel Shimels
            </h1>
            <p className="text-xl text-slate-300">Cybersecurity Professional</p>
            <p className="text-lg text-slate-400">Addis Ababa, Ethiopia</p>
          </div>

          <p className="text-lg text-slate-300 max-w-2xl">
            I'm ready to secure your data from hackers. Protect your website,
            server, service, & application against the increasing sophistication
            of hacker threats.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              onClick={() => scrollToSection("#projects")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection("#about")}
              variant="outline"
              className="border-purple-300 text-purple-300 hover:bg-purple-900/20 px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Learn More
            </Button>
          </div>

          <div className="flex justify-center lg:justify-start space-x-6 pt-4">
            <div className="flex items-center space-x-2 text-slate-400">
              <Shield className="w-5 h-5 text-purple-400" />
              <span>Security</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <Lock className="w-5 h-5 text-purple-400" />
              <span>Encryption</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <Eye className="w-5 h-5 text-purple-400" />
              <span>Monitoring</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <img
                  src="./pp.jpg?height=300&width=300"
                  alt="Gebremeskel Shimels"
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center animate-pulse">
              <Shield className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
