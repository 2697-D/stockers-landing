"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimated } from "@/components/scroll-animated"
import { BackgroundLines } from "@/components/ui/background-lines"
import { 
  ArrowLeft, 
  BookOpen, 
  Play,
  CheckCircle,
  Brain,
  Video,
  FileText,
  Trophy,
  Sparkles
} from "lucide-react"
import { modules } from "@/data/modules"

export default function BeginnerPage() {
  const [mounted, setMounted] = useState(false)
  const [currentFlashcard, setCurrentFlashcard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const beginnerModules = modules.beginner || []

  if (!mounted) {
    return (
      <BackgroundLines className="min-h-screen text-slate-50 flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-8 w-64 bg-slate-700 rounded mb-4 mx-auto"></div>
          <div className="h-4 w-48 bg-slate-700 rounded mx-auto"></div>
        </div>
      </BackgroundLines>
    )
  }

  return (
    <BackgroundLines className="min-h-screen text-slate-50">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-slate-100">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-slate-100">Beginner Learning</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-500/20 text-green-400">Beginner</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <ScrollAnimated direction="up">
            <div className="text-center mb-12">
              <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Beginner Stock Trading
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                Start your trading journey with our beginner-friendly learning modules. 
                Master the basics with flashcards, videos, and interactive quizzes.
              </p>
            </div>
          </ScrollAnimated>

          {/* Learning Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ScrollAnimated direction="up" className="delay-100">
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-green-400" />
                  </div>
                  <CardTitle className="text-xl text-slate-100">Flashcards</CardTitle>
                  <CardDescription className="text-slate-400">
                    Learn key concepts with interactive flashcards
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Interactive Learning</span>
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Quick Review</span>
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimated>

            <ScrollAnimated direction="up" className="delay-200">
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                    <Video className="h-8 w-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-slate-100">Video Lessons</CardTitle>
                  <CardDescription className="text-slate-400">
                    Watch step-by-step video tutorials
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Visual Learning</span>
                      <CheckCircle className="h-4 w-4 text-blue-400" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Expert Guidance</span>
                      <CheckCircle className="h-4 w-4 text-blue-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimated>

            <ScrollAnimated direction="up" className="delay-300">
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="h-16 w-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-purple-400" />
                  </div>
                  <CardTitle className="text-xl text-slate-100">Interactive Quiz</CardTitle>
                  <CardDescription className="text-slate-400">
                    Test your knowledge with fun quizzes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Knowledge Testing</span>
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Progress Tracking</span>
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimated>
          </div>

          {/* Beginner Modules */}
          <ScrollAnimated direction="up" className="delay-400">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-100 mb-4">Beginner Modules</h3>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Start with these fundamental concepts to build your trading foundation
              </p>
            </div>
          </ScrollAnimated>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beginnerModules.map((module, index) => (
              <ScrollAnimated key={module.id} direction="up" className={`delay-${index * 100 + 500}`}>
                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-green-500/20 text-green-400">
                        Module {module.id}
                      </Badge>
                      <div className="flex space-x-2">
                        <FileText className="h-4 w-4 text-green-400" />
                        <Video className="h-4 w-4 text-blue-400" />
                        <Trophy className="h-4 w-4 text-purple-400" />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-slate-100 mb-2">
                      {module.title}
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="space-y-4 flex-1">
                      <div>
                        <h4 className="text-sm font-medium text-slate-300 mb-2">Key Concepts:</h4>
                        <div className="flex flex-wrap gap-1">
                          {module.concepts.slice(0, 3).map((concept, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-slate-600 text-slate-400">
                              {concept}
                            </Badge>
                          ))}
                          {module.concepts.length > 3 && (
                            <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                              +{module.concepts.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      

                      <Link href={`/modules/beginner/${module.id}`}>
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          Start Learning
                          <Play className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimated>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-slate-400 text-sm">
              © 2025 Stockers. Master the basics of stock trading.
            </p>
          </div>
        </div>
      </footer>
    </BackgroundLines>
  )
}
