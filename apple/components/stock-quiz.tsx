"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  CheckCircle, 
  XCircle, 
  Brain, 
  Trophy,
  TrendingUp,
  TrendingDown,
  DollarSign
} from "lucide-react"

const quizQuestions = {
  beginner: [
    {
      id: 1,
      question: "What does 'bull market' mean?",
      options: [
        "A market where prices are falling",
        "A market where prices are rising",
        "A market for cattle trading",
        "A market that's closed"
      ],
      correct: 1,
      explanation: "A bull market refers to a market condition where prices are rising or expected to rise."
    },
    {
      id: 2,
      question: "What is a 'stop-loss' order?",
      options: [
        "An order to buy at the highest price",
        "An order to sell when a stock reaches a certain price",
        "An order to hold stocks forever",
        "An order to buy more stocks"
      ],
      correct: 1,
      explanation: "A stop-loss order is designed to limit an investor's loss on a security position by selling when the price reaches a predetermined level."
    },
    {
      id: 3,
      question: "What does P/E ratio stand for?",
      options: [
        "Price to Earnings ratio",
        "Profit to Expense ratio",
        "Purchase to Exit ratio",
        "Portfolio to Equity ratio"
      ],
      correct: 0,
      explanation: "P/E ratio (Price-to-Earnings) compares a company's stock price to its earnings per share."
    },
    {
      id: 4,
      question: "What is diversification in investing?",
      options: [
        "Putting all money in one stock",
        "Spreading investments across different assets",
        "Only investing in tech stocks",
        "Trading every day"
      ],
      correct: 1,
      explanation: "Diversification is a risk management strategy that mixes a wide variety of investments within a portfolio."
    },
    {
      id: 5,
      question: "What does 'blue chip' stock mean?",
      options: [
        "A stock that's blue in color",
        "A large, well-established, financially sound company",
        "A stock that's new to the market",
        "A stock that's about to go bankrupt"
      ],
      correct: 1,
      explanation: "Blue chip stocks are shares in large, well-established companies with a history of stable earnings and reliable dividends."
    }
  ],
  intermediate: [
    {
      id: 1,
      question: "What is the impact cost in trading?",
      options: [
        "The cost of market impact on trade execution",
        "The brokerage fees charged",
        "The tax on capital gains",
        "The cost of holding positions overnight"
      ],
      correct: 0,
      explanation: "Impact cost measures the market impact of a trade, representing the cost of executing a large order in terms of price movement."
    },
    {
      id: 2,
      question: "What does 'margin' mean in futures trading?",
      options: [
        "The profit made on a trade",
        "The initial deposit required to open a position",
        "The total value of the contract",
        "The brokerage charges"
      ],
      correct: 1,
      explanation: "Margin is the initial deposit required to open a futures position, acting as a security deposit to cover potential losses."
    },
    {
      id: 3,
      question: "What is 'clearing and settlement'?",
      options: [
        "The process of buying stocks",
        "The process of confirming and completing trades",
        "The process of selling stocks",
        "The process of calculating taxes"
      ],
      correct: 1,
      explanation: "Clearing and settlement is the process of confirming, matching, and completing trades between buyers and sellers."
    },
    {
      id: 4,
      question: "What is 'asset allocation'?",
      options: [
        "Buying only one type of asset",
        "Distributing investments across different asset classes",
        "Selling all assets at once",
        "Holding only cash"
      ],
      correct: 1,
      explanation: "Asset allocation is the process of dividing investments among different asset categories like stocks, bonds, and cash."
    },
    {
      id: 5,
      question: "What does 'variance' measure in portfolio risk?",
      options: [
        "The average return of a portfolio",
        "The spread of returns around the mean",
        "The total value of the portfolio",
        "The number of stocks in the portfolio"
      ],
      correct: 1,
      explanation: "Variance measures the spread of returns around the mean, indicating the volatility or risk of an investment."
    }
  ],
  advanced: [
    {
      id: 1,
      question: "What is the 'covariance matrix' used for in portfolio optimization?",
      options: [
        "Calculating total portfolio value",
        "Measuring relationships between asset returns",
        "Determining brokerage costs",
        "Calculating tax implications"
      ],
      correct: 1,
      explanation: "The covariance matrix measures the relationships between different asset returns, crucial for portfolio diversification and risk management."
    },
    {
      id: 2,
      question: "What is 'OFS allotment' in the context of share capital?",
      options: [
        "Offering For Sale - a method of share allotment",
        "Online Fund System",
        "Official Financial Statement",
        "Outstanding Financial Securities"
      ],
      correct: 0,
      explanation: "OFS (Offer for Sale) is a method where existing shareholders sell their shares to the public through the stock exchange."
    },
    {
      id: 3,
      question: "What are the '5 types of share capital'?",
      options: [
        "Authorized, Issued, Subscribed, Called-up, Paid-up",
        "Common, Preferred, Convertible, Redeemable, Cumulative",
        "Equity, Debt, Hybrid, Derivative, Commodity",
        "Primary, Secondary, Tertiary, Quaternary, Quinary"
      ],
      correct: 0,
      explanation: "The 5 types of share capital are: Authorized (maximum allowed), Issued (offered to public), Subscribed (applied for), Called-up (demanded), and Paid-up (actually received)."
    },
    {
      id: 4,
      question: "What is 'call option' in derivatives trading?",
      options: [
        "An option to sell at a predetermined price",
        "An option to buy at a predetermined price",
        "A mandatory obligation to buy",
        "A type of futures contract"
      ],
      correct: 1,
      explanation: "A call option gives the holder the right (but not obligation) to buy an underlying asset at a predetermined price within a specific time period."
    },
    {
      id: 5,
      question: "What is 'REIT' in the context of asset allocation?",
      options: [
        "Real Estate Investment Trust",
        "Rapid Equity Investment Tool",
        "Risk Evaluation and Investment Technique",
        "Return Enhancement Investment Trust"
      ],
      correct: 0,
      explanation: "REIT (Real Estate Investment Trust) is a company that owns, operates, or finances income-producing real estate, allowing investors to access real estate markets."
    }
  ]
}

export function StockQuiz() {
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'advanced' | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || !difficulty) return

    const isCorrect = selectedAnswer === quizQuestions[difficulty][currentQuestion].correct
    if (isCorrect) {
      setScore(score + 1)
    }

    setShowResult(true)
  }

  const handleNextQuestion = () => {
    if (!difficulty) return
    
    if (currentQuestion < quizQuestions[difficulty].length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setQuizCompleted(false)
    setDifficulty(null)
  }

  const handleDifficultySelect = (selectedDifficulty: 'beginner' | 'intermediate' | 'advanced') => {
    setDifficulty(selectedDifficulty)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setQuizCompleted(false)
  }

  const progress = difficulty ? ((currentQuestion + (showResult ? 1 : 0)) / quizQuestions[difficulty].length) * 100 : 0

  if (!mounted) {
    return (
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-8 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-700 rounded mb-4"></div>
            <div className="h-4 bg-slate-700 rounded mb-2"></div>
            <div className="h-4 bg-slate-700 rounded w-3/4 mx-auto"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!difficulty) {
    return (
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-slate-100">Choose Your Difficulty</CardTitle>
          <CardDescription className="text-slate-400">
            Select a difficulty level based on your stock trading knowledge
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <button
              onClick={() => handleDifficultySelect('beginner')}
              className="p-6 text-left rounded-lg border border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Beginner</h3>
                  <p className="text-slate-400 text-sm">
                    Basic concepts like bull/bear markets, P/E ratios, and diversification
                  </p>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Easy</Badge>
              </div>
            </button>

            <button
              onClick={() => handleDifficultySelect('intermediate')}
              className="p-6 text-left rounded-lg border border-yellow-500/30 bg-yellow-500/10 hover:bg-yellow-500/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">Intermediate</h3>
                  <p className="text-slate-400 text-sm">
                    Trading concepts like impact cost, margin, clearing & settlement
                  </p>
                </div>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Medium</Badge>
              </div>
            </button>

            <button
              onClick={() => handleDifficultySelect('advanced')}
              className="p-6 text-left rounded-lg border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-red-400 mb-2">Advanced</h3>
                  <p className="text-slate-400 text-sm">
                    Complex topics like covariance matrix, derivatives, and portfolio optimization
                  </p>
                </div>
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Hard</Badge>
              </div>
            </button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (quizCompleted) {
    const percentage = difficulty ? Math.round((score / quizQuestions[difficulty].length) * 100) : 0
    return (
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <Trophy className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-slate-100">Quiz Complete!</CardTitle>
          <CardDescription className="text-slate-400">
            You scored {score} out of {difficulty ? quizQuestions[difficulty].length : 0} questions
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="text-4xl font-bold text-slate-100">
            {percentage}%
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="space-y-2">
            {percentage >= 80 && (
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                <Trophy className="mr-2 h-4 w-4" />
                Excellent! You're ready to trade!
              </Badge>
            )}
            {percentage >= 60 && percentage < 80 && (
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                <Brain className="mr-2 h-4 w-4" />
                Good job! Keep learning!
              </Badge>
            )}
            {percentage < 60 && (
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                <TrendingUp className="mr-2 h-4 w-4" />
                Study more and try again!
              </Badge>
            )}
          </div>
          <Button 
            onClick={handleRestartQuiz}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Take Quiz Again
          </Button>
        </CardContent>
      </Card>
    )
  }

  const question = difficulty ? quizQuestions[difficulty][currentQuestion] : null

  if (!question) return null

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline" className="border-blue-500/30 text-blue-400">
            Question {currentQuestion + 1} of {difficulty ? quizQuestions[difficulty].length : 0}
          </Badge>
          <div className="text-sm text-slate-400">
            Score: {score}/{currentQuestion}
          </div>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <CardTitle className="text-xl text-slate-100 mb-2">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={`w-full p-4 text-left rounded-lg border transition-all duration-200 ${
                selectedAnswer === index
                  ? showResult
                    ? index === question.correct
                      ? "border-green-500 bg-green-500/10 text-green-400"
                      : "border-red-500 bg-red-500/10 text-red-400"
                    : "border-blue-500 bg-blue-500/10 text-blue-400"
                  : showResult && index === question.correct
                  ? "border-green-500 bg-green-500/10 text-green-400"
                  : "border-slate-600 bg-slate-700/50 text-slate-300 hover:border-slate-500 hover:bg-slate-700"
              }`}
            >
              <div className="flex items-center">
                {showResult && selectedAnswer === index && (
                  index === question.correct ? (
                    <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                  ) : (
                    <XCircle className="mr-3 h-5 w-5 text-red-400" />
                  )
                )}
                {showResult && index === question.correct && selectedAnswer !== index && (
                  <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                )}
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>

        {showResult && (
          <div className="mt-6 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
            <div className="flex items-start">
              <Brain className="mr-3 h-5 w-5 text-blue-400 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-slate-200 mb-1">Explanation:</p>
                <p className="text-sm text-slate-400">{question.explanation}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end">
          {!showResult ? (
            <Button 
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
            >
              Submit Answer
            </Button>
          ) : (
            <Button 
              onClick={handleNextQuestion}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              {difficulty && currentQuestion < quizQuestions[difficulty].length - 1 ? "Next Question" : "Finish Quiz"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
