"use client"

import React from "react"
import Link from "next/link"
import { ScrollAnimated } from "@/components/scroll-animated"
import { BackgroundLines } from "@/components/ui/background-lines"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Star, 
  Users, 
  TrendingUp,
  TrendingDown,
  Shield,
  Zap,
  Heart,
  ArrowRight,
  Sparkles,
  Brain,
  Trophy,
  DollarSign,
  BarChart3,
  Target,
  BookOpen,
  Award
} from "lucide-react"

export default function Home() {

  return (
    <BackgroundLines className="min-h-screen text-slate-50">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-slate-100">Stockers</h1>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="/beginner">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-slate-100">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Beginner
                </Button>
              </Link>
              <Link href="/intermediate">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-slate-100">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Intermediate
                </Button>
              </Link>
              <Link href="/news">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-slate-100">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  News
                </Button>
              </Link>
              
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-slate-100">
                Sign In(In Progress)
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started(In Progress)
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
        <div className="container mx-auto px-6 text-center relative">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-6 bg-slate-800 text-slate-200 border-slate-700">
              <TrendingUp className="mr-2 h-3 w-3" />
              Master Stock Trading
            </Badge>
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Learn Stock Trading
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Master the art of stock trading with our comprehensive learning platform.
              From basics to advanced strategies, become a confident trader.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/beginner">
                <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-105">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Start as Beginner
                </Button>
              </Link>
              <Link href="/intermediate">
                <Button size="lg" className="text-lg px-8 py-6 bg-yellow-600 hover:bg-yellow-700 text-white transition-all duration-300 hover:scale-105">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Go Intermediate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <ScrollAnimated direction="up">
            <div className="text-center mb-20">
              <h3 className="text-4xl font-bold mb-6 text-slate-100">Choose Your Learning Path</h3>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Whether you're just starting or ready to advance, we have the perfect learning path for you
              </p>
            </div>
          </ScrollAnimated>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 group animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <CardHeader className="pb-4">
                <div className="h-14 w-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors duration-300">
                  <BookOpen className="h-7 w-7 text-green-400" />
                </div>
                <CardTitle className="text-slate-100 text-xl">Beginner Path</CardTitle>
                <CardDescription className="text-slate-400 text-base leading-relaxed">
                  Start with flashcards, videos, and quizzes to master the fundamentals of stock trading
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-green-500/30 text-green-400">Beginner</Badge>
                  <Link href="/beginner">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Start Learning
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <CardHeader className="pb-4">
                <div className="h-14 w-14 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors duration-300">
                  <TrendingUp className="h-7 w-7 text-yellow-400" />
                </div>
                <CardTitle className="text-slate-100 text-xl">Intermediate Path</CardTitle>
                <CardDescription className="text-slate-400 text-base leading-relaxed">
                  Advanced flashcards, quizzes, news analysis, and trading simulation for experienced learners
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-yellow-500/30 text-yellow-400">Intermediate</Badge>
                  <Link href="/intermediate">
                    <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                      Start Learning
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 group animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <CardHeader className="pb-4">
                <div className="h-14 w-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <TrendingUp className="h-7 w-7 text-blue-400" />
                </div>
                <CardTitle className="text-slate-100 text-xl">Market News</CardTitle>
                <CardDescription className="text-slate-400 text-base leading-relaxed">
                  Stay updated with real-time financial news and market insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400">Live Updates</Badge>
                  <Link href="/news">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      View News
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <ScrollAnimated direction="up">
              <div className="text-center group">
                <div className="text-5xl font-bold text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">10K+</div>
                <div className="text-slate-400 text-lg">Students</div>
              </div>
            </ScrollAnimated>
            <ScrollAnimated direction="up" className="delay-100">
              <div className="text-center group">
                <div className="text-5xl font-bold text-green-400 mb-3 group-hover:scale-110 transition-transform duration-300">95%</div>
                <div className="text-slate-400 text-lg">Success Rate</div>
              </div>
            </ScrollAnimated>
            <ScrollAnimated direction="up" className="delay-200">
              <div className="text-center group">
                <div className="text-5xl font-bold text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-slate-400 text-lg">Lessons</div>
              </div>
            </ScrollAnimated>
            <ScrollAnimated direction="up" className="delay-300">
              <div className="text-center group">
                <div className="text-5xl font-bold text-orange-400 mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-slate-400 text-lg">Support</div>
              </div>
            </ScrollAnimated>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Stockers. The smater way to stocks.
          </p>
          <div className="flex space-x-6 mt-6 md:mt-0">
          </div>
        </div>
      </footer>
    </BackgroundLines>
  )
}
