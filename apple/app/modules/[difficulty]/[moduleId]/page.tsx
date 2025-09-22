"use client"

import React, { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ScrollAnimated } from "@/components/scroll-animated"
import { BackgroundLines } from "@/components/ui/background-lines"
import { 
  ArrowLeft, 
  ArrowRight,
  BookOpen, 
  Gamepad2, 
  FileText, 
  Trophy,
  Play,
  CheckCircle,
  RotateCcw,
  Brain,
  XCircle,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { modules } from "@/data/modules"

type Difficulty = 'beginner' | 'intermediate' 
type ModuleSection = 'overview' | 'gamified' | 'flashcards' | 'quiz' | 'complete'

export default function ModulePage() {
  const params = useParams()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [currentSection, setCurrentSection] = useState<ModuleSection>('overview')
  const [currentFlashcard, setCurrentFlashcard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<number[]>([])
  const [showQuizResults, setShowQuizResults] = useState(false)
  const [quizScore, setQuizScore] = useState(0)

  const difficulty = params?.difficulty as Difficulty
  const moduleId = parseInt(params?.moduleId as string)

  useEffect(() => {
    setMounted(true)
  }, [])

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

  const module = modules[difficulty]?.find(m => m.id === moduleId)
  
  if (!module) {
    return (
      <BackgroundLines className="min-h-screen text-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-100 mb-4">Module Not Found</h1>
          <Link href="/modules">
            <Button>Back to Modules</Button>
          </Link>
        </div>
      </BackgroundLines>
    )
  }

  const difficultyColors = {
    beginner: "green",
    intermediate: "yellow", 
  }

  const progress = {
    overview: 0,
    gamified: 25,
    flashcards: 50,
    quiz: 75,
    complete: 100
  }

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...quizAnswers]
    newAnswers[questionIndex] = answerIndex
    setQuizAnswers(newAnswers)
  }

  const calculateQuizScore = () => {
    let score = 0
    module.quiz.forEach((question, index) => {
      if (quizAnswers[index] === question.correct) {
        score++
      }
    })
    setQuizScore(score)
    setShowQuizResults(true)
  }

  const resetModule = () => {
    setCurrentSection('overview')
    setCurrentFlashcard(0)
    setShowAnswer(false)
    setQuizAnswers([])
    setShowQuizResults(false)
    setQuizScore(0)
  }

  const nextSection = () => {
    const sections: ModuleSection[] = ['overview', 'gamified', 'flashcards', 'quiz', 'complete']
    const currentIndex = sections.indexOf(currentSection)
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1])
    }
  }

  const prevSection = () => {
    const sections: ModuleSection[] = ['overview', 'gamified', 'flashcards', 'quiz', 'complete']
    const currentIndex = sections.indexOf(currentSection)
    if (currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1])
    }
  }

  return (
    <BackgroundLines className="min-h-screen text-slate-50">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/modules">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-slate-100">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Modules
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-slate-100">
                {module.title}
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className={`bg-${difficultyColors[difficulty]}-500/20 text-${difficultyColors[difficulty]}-400`}>
                {difficulty}
              </Badge>
              <Button variant="ghost" size="sm" onClick={resetModule}>
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="border-b border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">Module Progress</span>
            <span className="text-sm text-slate-400">{progress[currentSection]}%</span>
          </div>
          <Progress value={progress[currentSection]} className="h-2" />
          <div className="flex justify-between mt-2 text-xs text-slate-500">
            <span>Overview</span>
            <span>Interactive</span>
            <span>Flashcards</span>
            <span>Quiz</span>
            <span>Complete</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 py-8">
        {currentSection === 'overview' && (
          <ScrollAnimated direction="up">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-slate-100 mb-4">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-slate-400">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-200 mb-4">Key Concepts You'll Learn:</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {module.concepts.map((concept, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                            <span className="text-slate-300">{concept}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-center pt-6">
                      <Button 
                        size="lg" 
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={nextSection}
                      >
                        Start Learning
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimated>
        )}

        {currentSection === 'gamified' && (
          <ScrollAnimated direction="up">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-slate-100 mb-2">
                    {module.gamifiedContent.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    {module.gamifiedContent.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <div className="mx-auto mb-8 h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Gamepad2 className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-4">
                      Interactive {module.gamifiedContent.type.replace('_', ' ').toUpperCase()}
                    </h3>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                      This interactive section will help you understand {module.title.toLowerCase()} through hands-on experience. 
                      The gamified content makes learning engaging and memorable.
                    </p>
                    <div className="bg-slate-700/50 rounded-lg p-6 mb-8">
                      <p className="text-slate-300 italic">
                        "Interactive learning helps you retain information better than passive reading. 
                        This section simulates real-world scenarios to reinforce key concepts."
                      </p>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <Button variant="outline" onClick={prevSection}>
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Previous
                      </Button>
                      <Button 
                        className="bg-green-600 hover:bg-green-700 text-white"
                        onClick={nextSection}
                      >
                        Continue to Flashcards
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimated>
        )}

        {currentSection === 'flashcards' && (
          <ScrollAnimated direction="up">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-slate-100 mb-2">
                    Flashcards
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    {currentFlashcard + 1} of {module.flashcards.length} cards
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Progress */}
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">Progress</span>
                      <span className="text-sm text-slate-400">
                        {Math.round(((currentFlashcard + 1) / module.flashcards.length) * 100)}%
                      </span>
                    </div>
                    <Progress value={((currentFlashcard + 1) / module.flashcards.length) * 100} className="h-2" />

                    {/* Flashcard */}
                    <div className="min-h-[300px] flex items-center justify-center">
                      <Card 
                        className={`w-full max-w-2xl cursor-pointer transition-all duration-500 hover:scale-105 ${
                          showAnswer ? 'bg-slate-700/50' : 'bg-slate-800/50'
                        }`}
                        onClick={() => setShowAnswer(!showAnswer)}
                      >
                        <CardContent className="p-8 text-center">
                          <div className="mb-4">
                            <Badge variant="outline" className="mb-4">
                              {showAnswer ? 'Answer' : 'Question'}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold text-slate-200 mb-4">
                            {showAnswer ? module.flashcards[currentFlashcard].back : module.flashcards[currentFlashcard].front}
                          </h3>
                          <p className="text-slate-400">
                            {showAnswer ? 'Click to see question' : 'Click to reveal answer'}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between items-center">
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          if (currentFlashcard > 0) {
                            setCurrentFlashcard(currentFlashcard - 1)
                            setShowAnswer(false)
                          }
                        }}
                        disabled={currentFlashcard === 0}
                      >
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Previous
                      </Button>
                      
                      <div className="flex space-x-2">
                        {module.flashcards.map((_, index) => (
                          <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              index === currentFlashcard 
                                ? 'bg-blue-500' 
                                : index < currentFlashcard 
                                  ? 'bg-green-500' 
                                  : 'bg-slate-600'
                            }`}
                            onClick={() => {
                              setCurrentFlashcard(index)
                              setShowAnswer(false)
                            }}
                          />
                        ))}
                      </div>

                      <Button 
                        variant="outline"
                        onClick={() => {
                          if (currentFlashcard < module.flashcards.length - 1) {
                            setCurrentFlashcard(currentFlashcard + 1)
                            setShowAnswer(false)
                          }
                        }}
                        disabled={currentFlashcard === module.flashcards.length - 1}
                      >
                        Next
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center space-x-4 pt-4">
                      <Button variant="outline" onClick={prevSection}>
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Back to Interactive
                      </Button>
                      <Button 
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                        onClick={nextSection}
                      >
                        Take Quiz
                        <Trophy className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimated>
        )}

        {currentSection === 'quiz' && (
          <ScrollAnimated direction="up">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-slate-100 mb-2">
                    Module Quiz
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Test your understanding with {module.quiz.length} questions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!showQuizResults ? (
                    <div className="space-y-6">
                      {module.quiz.map((question, questionIndex) => (
                        <Card key={questionIndex} className="bg-slate-700/50 border-slate-600">
                          <CardContent className="p-6">
                            <h3 className="text-lg font-semibold text-slate-200 mb-4">
                              {questionIndex + 1}. {question.question}
                            </h3>
                            <div className="space-y-3">
                              {question.options.map((option, optionIndex) => (
                                <button
                                  key={optionIndex}
                                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                                    quizAnswers[questionIndex] === optionIndex
                                      ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                                      : 'border-slate-600 bg-slate-800/50 text-slate-300 hover:border-slate-500'
                                  }`}
                                  onClick={() => handleQuizAnswer(questionIndex, optionIndex)}
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}

                      <div className="flex justify-center space-x-4 pt-6">
                        <Button variant="outline" onClick={prevSection}>
                          <ChevronLeft className="mr-2 h-4 w-4" />
                          Back to Flashcards
                        </Button>
                        <Button 
                          className="bg-green-600 hover:bg-green-700 text-white"
                          onClick={calculateQuizScore}
                          disabled={quizAnswers.length !== module.quiz.length}
                        >
                          Submit Quiz
                          <Brain className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* Results Header */}
                      <div className="text-center">
                        <div className={`mx-auto mb-4 h-16 w-16 rounded-full flex items-center justify-center ${
                          quizScore >= module.quiz.length * 0.8 
                            ? 'bg-green-500/20' 
                            : quizScore >= module.quiz.length * 0.6 
                              ? 'bg-yellow-500/20' 
                              : 'bg-red-500/20'
                        }`}>
                          <Trophy className={`h-8 w-8 ${
                            quizScore >= module.quiz.length * 0.8 
                              ? 'text-green-400' 
                              : quizScore >= module.quiz.length * 0.6 
                                ? 'text-yellow-400' 
                                : 'text-red-400'
                          }`} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-100 mb-2">
                          Quiz Complete!
                        </h3>
                        <p className="text-slate-400 mb-4">
                          You scored {quizScore} out of {module.quiz.length} questions
                        </p>
                        <Badge className={`${
                          quizScore >= module.quiz.length * 0.8 
                            ? 'bg-green-500/20 text-green-400' 
                            : quizScore >= module.quiz.length * 0.6 
                              ? 'bg-yellow-500/20 text-yellow-400' 
                              : 'bg-red-500/20 text-red-400'
                        }`}>
                          {quizScore >= module.quiz.length * 0.8 
                            ? 'Excellent!' 
                            : quizScore >= module.quiz.length * 0.6 
                              ? 'Good Job!' 
                              : 'Keep Learning!'}
                        </Badge>
                      </div>

                      {/* Question Review */}
                      <div className="space-y-4">
                        {module.quiz.map((question, questionIndex) => (
                          <Card key={questionIndex} className="bg-slate-700/50 border-slate-600">
                            <CardContent className="p-6">
                              <div className="flex items-start space-x-3 mb-4">
                                {quizAnswers[questionIndex] === question.correct ? (
                                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                                ) : (
                                  <XCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                                )}
                                <div className="flex-1">
                                  <h4 className="font-semibold text-slate-200 mb-2">
                                    {question.question}
                                  </h4>
                                  <div className="space-y-2">
                                    {question.options.map((option, optionIndex) => (
                                      <div
                                        key={optionIndex}
                                        className={`p-3 rounded-lg ${
                                          optionIndex === question.correct
                                            ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                                            : optionIndex === quizAnswers[questionIndex] && optionIndex !== question.correct
                                              ? 'bg-red-500/20 border border-red-500/30 text-red-300'
                                              : 'bg-slate-800/50 text-slate-400'
                                        }`}
                                      >
                                        {option}
                                        {optionIndex === question.correct && (
                                          <Badge className="ml-2 bg-green-500/20 text-green-400">Correct</Badge>
                                        )}
                                        {optionIndex === quizAnswers[questionIndex] && optionIndex !== question.correct && (
                                          <Badge className="ml-2 bg-red-500/20 text-red-400">Your Answer</Badge>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                  <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                    <p className="text-sm text-blue-300">
                                      <strong>Explanation:</strong> {question.explanation}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex justify-center space-x-4 pt-6">
                        <Button 
                          className="bg-green-600 hover:bg-green-700 text-white"
                          onClick={nextSection}
                        >
                          Complete Module
                          <Trophy className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </ScrollAnimated>
        )}

        {currentSection === 'complete' && (
          <ScrollAnimated direction="up">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                    <Trophy className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-slate-100 mb-2">
                    Module Complete!
                  </CardTitle>
                  <CardDescription className="text-lg text-slate-400">
                    Congratulations on completing "{module.title}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-slate-300 mb-6">
                        You've successfully completed all sections of this module. 
                        You now have a solid understanding of the key concepts covered.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                        <Gamepad2 className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                        <h4 className="font-medium text-slate-200">Interactive Content</h4>
                        <p className="text-sm text-slate-400 mt-1">Completed</p>
                      </div>
                      <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                        <FileText className="h-8 w-8 text-green-400 mx-auto mb-2" />
                        <h4 className="font-medium text-slate-200">Flashcards</h4>
                        <p className="text-sm text-slate-400 mt-1">{module.flashcards.length} cards reviewed</p>
                      </div>
                      <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                        <Trophy className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                        <h4 className="font-medium text-slate-200">Quiz Score</h4>
                        <p className="text-sm text-slate-400 mt-1">{quizScore}/{module.quiz.length}</p>
                      </div>
                    </div>

                    <div className="bg-slate-700/50 rounded-lg p-6">
                      <h4 className="font-semibold text-slate-200 mb-3">What's Next?</h4>
                      <p className="text-slate-300 mb-4">
                        Continue your learning journey by exploring more modules or taking the comprehensive quiz 
                        to test your overall knowledge.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {module.concepts.map((concept, index) => (
                          <Badge key={index} variant="outline" className="border-green-500/30 text-green-400">
                            ✓ {concept}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center space-x-4 pt-6">
                      <Link href="/modules">
                        <Button variant="outline">
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back to Modules
                        </Button>
                      </Link>
                      <Link href="/quiz">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          Take Full Quiz
                          <Brain className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimated>
        )}
      </main>
      </BackgroundLines>
  )
}
