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
  Brain, 
  BookOpen, 
  Gamepad2, 
  FileText, 
  Trophy,
  Play,
  CheckCircle,
  Lock
} from "lucide-react"
import { modules } from "@/data/modules"

export default function ModulesPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<'beginner' | 'intermediate' | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const difficultyColors = {
    beginner: "green",
    intermediate: "yellow", 
  }

  const difficultyIcons = {
    beginner: "🌱",
    intermediate: "📈",
  }

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

  if (!selectedDifficulty) {
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
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-white" />
                </div>
                <h1 className="text-xl font-semibold text-slate-100">Stockers Learning Modules</h1>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <ScrollAnimated direction="up">
              <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                Choose Your Learning Path
              </h1>
              <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                Master stock trading with our comprehensive learning modules. 
                Each difficulty level contains 10 concept-wise modules with interactive content, 
                flashcards, and quizzes.
              </p>
            </ScrollAnimated>

            {/* Difficulty Selection */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {Object.entries(modules).map(([difficulty, moduleList], index) => (
                <ScrollAnimated key={difficulty} direction="up" className={`delay-${index * 100}`}>
                  <Card 
                    className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedDifficulty(difficulty as keyof typeof modules)}
                  >
                    <CardHeader className="text-center">
                      <div className="text-4xl mb-4">{difficultyIcons[difficulty as keyof typeof difficultyIcons]}</div>
                      <CardTitle className="text-2xl text-slate-100 capitalize">{difficulty}</CardTitle>
                      <CardDescription className="text-slate-400">
                        {moduleList.length} comprehensive modules
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-400">Modules</span>
                          <Badge variant="outline" className={`border-${difficultyColors[difficulty as keyof typeof difficultyColors]}-500/30 text-${difficultyColors[difficulty as keyof typeof difficultyColors]}-400`}>
                            {moduleList.length}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-400">Difficulty</span>
                          <Badge className={`bg-${difficultyColors[difficulty as keyof typeof difficultyColors]}-500/20 text-${difficultyColors[difficulty as keyof typeof difficultyColors]}-400`}>
                            {difficulty === 'beginner' ? 'Easy' : difficulty === 'intermediate' ? 'Medium' : 'Hard'}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-400">Features</span>
                          <div className="flex space-x-1">
                            <Gamepad2 className="h-4 w-4 text-blue-400" />
                            <FileText className="h-4 w-4 text-green-400" />
                            <Trophy className="h-4 w-4 text-purple-400" />
                          </div>
                        </div>
                      </div>
                      <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                        Start Learning
                        <Play className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollAnimated>
              ))}
            </div>
          </div>
        </section>
      </BackgroundLines>
    )
  }

  const selectedModules = modules[selectedDifficulty]

  return (
    <BackgroundLines className="min-h-screen text-slate-50">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-slate-300 hover:text-slate-100"
                onClick={() => setSelectedDifficulty(null)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Selection
              </Button>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-slate-100 capitalize">
                {selectedDifficulty} Modules
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Modules List */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollAnimated direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-100 capitalize">
                {selectedDifficulty} Learning Path
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Master {selectedDifficulty} concepts with interactive modules, flashcards, and quizzes
              </p>
            </div>
          </ScrollAnimated>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedModules.map((module, index) => (
              <ScrollAnimated key={module.id} direction="up" className={`delay-${index * 100}`}>
                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`bg-${difficultyColors[selectedDifficulty]}-500/20 text-${difficultyColors[selectedDifficulty]}-400`}>
                        Module {module.id}
                      </Badge>
                      <div className="flex space-x-2">
                        <Gamepad2 className="h-4 w-4 text-blue-400" />
                        <FileText className="h-4 w-4 text-green-400" />
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
                  <CardContent>
                    <div className="space-y-4">
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
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Interactive Content</span>
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Flashcards</span>
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">End Quiz</span>
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        </div>
                      </div>

                      <Link href={`/modules/${selectedDifficulty}/${module.id}`}>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          Start Module
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
    </BackgroundLines>
  )
}
