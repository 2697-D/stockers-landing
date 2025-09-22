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
  FileText,
  Trophy,
  Sparkles,
  TrendingUp,
  Newspaper,
  BarChart3,
  Target
} from "lucide-react"
import { modules } from "@/data/modules"

export default function IntermediatePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const intermediateModules = modules.intermediate || []

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
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-slate-100">Intermediate Trading</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-yellow-500/20 text-yellow-400">Intermediate</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <ScrollAnimated direction="up">
            <div className="text-center mb-12">
              <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Intermediate Trading
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                Take your trading to the next level with advanced strategies, 
                real-time news analysis, and hands-on simulation practice.
              </p>
            </div>
          </ScrollAnimated>

          {/* Learning Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <ScrollAnimated direction="up" className="delay-100">
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="h-16 w-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-yellow-400" />
                  </div>
                  <CardTitle className="text-lg text-slate-100">Flashcards</CardTitle>
                  <CardDescription className="text-slate-400 text-sm">
                    Advanced concepts and strategies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Advanced Topics</span>
                      <CheckCircle className="h-4 w-4 text-yellow-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimated>

            <ScrollAnimated direction="up" className="delay-200">
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="h-16 w-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-purple-400" />
                  </div>
                  <CardTitle className="text-lg text-slate-100">Advanced Quiz</CardTitle>
                  <CardDescription className="text-slate-400 text-sm">
                    Test complex trading scenarios
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Scenario Testing</span>
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimated>

            <ScrollAnimated direction="up" className="delay-300">
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                    <Newspaper className="h-8 w-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-lg text-slate-100">Market News</CardTitle>
                  <CardDescription className="text-slate-400 text-sm">
                    Real-time market analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Live Updates</span>
                      <CheckCircle className="h-4 w-4 text-blue-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimated>

            <ScrollAnimated direction="up" className="delay-400">
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-green-400" />
                  </div>
                  <CardTitle className="text-lg text-slate-100">Trading Simulator</CardTitle>
                  <CardDescription className="text-slate-400 text-sm">
                    Practice with virtual money
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Risk-Free Practice</span>
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimated>
          </div>

          {/* Quick Access Buttons */}
          <ScrollAnimated direction="up" className="delay-500">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Newspaper className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100">Market News</h3>
                      <p className="text-slate-400">Stay updated with real-time market news and analysis</p>
                    </div>
                  </div>
                  <Link href="/news">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Newspaper className="mr-2 h-4 w-4" />
                      View Market News
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100">Trading Simulator</h3>
                      <p className="text-slate-400">Practice trading strategies with virtual money</p>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Launch Simulator (Coming Soon)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimated>

          {/* Intermediate Modules */}
          <ScrollAnimated direction="up" className="delay-600">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-100 mb-4">Intermediate Modules</h3>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Master advanced trading concepts and strategies
              </p>
            </div>
          </ScrollAnimated>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {intermediateModules.map((module, index) => (
              <ScrollAnimated key={module.id} direction="up" className={`delay-${index * 100 + 700}`}>
                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-yellow-500/20 text-yellow-400">
                        Module {module.id}
                      </Badge>
                      <div className="flex space-x-2">
                        <FileText className="h-4 w-4 text-yellow-400" />
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
                      

                      <Link href={`/modules/intermediate/${module.id}`}>
                        <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                          Start Learning
                          <Play className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimated>
            ))}
            
            {/* Trading Simulator Card */}
            <ScrollAnimated direction="up" className="delay-400">
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-500/20 text-green-400">
                      Trading
                    </Badge>
                    <div className="flex space-x-2">
                      <BarChart3 className="h-4 w-4 text-green-400" />
                      <Target className="h-4 w-4 text-blue-400" />
                      <TrendingUp className="h-4 w-4 text-purple-400" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-slate-100 mb-2">
                    Trading Simulator
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Practice trading with virtual money and real market data from Alpha Vantage
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="text-sm font-medium text-slate-300 mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                          Real-time Data
                        </Badge>
                        <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                          Portfolio Tracking
                        </Badge>
                        <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                          Virtual Trading
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Real Market Data</span>
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Portfolio Management</span>
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Transaction History</span>
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Link href="/trading-simulator">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Start Trading
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimated>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-slate-400 text-sm">
              © 2025 Stockers. Master advanced trading strategies.
            </p>
          </div>
        </div>
      </footer>
    </BackgroundLines>
  )
}
