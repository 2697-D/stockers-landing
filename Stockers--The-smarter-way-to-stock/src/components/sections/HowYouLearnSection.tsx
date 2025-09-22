import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, TrendingUp, Award, Users, X } from 'lucide-react';
import { useState } from 'react';

const HowYouLearnSection = () => {
  const [isQuizVisible, setQuizVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const learningPaths = [
    {
      title: 'Beginner Path',
      description: 'Perfect for those new to stock market investing',
      icon: BookOpen,
      level: 'Beginner',
      modules: [
        'Stock Market Fundamentals',
        'Understanding Financial Statements',
        'Risk Management Basics',
        'Portfolio Diversification',
        'Investment Psychology',
        'Market Analysis Introduction'
      ],
      color: 'from-blue-500/20 to-primary/20',
      iconColor: 'text-blue-500',
      buttonText: 'Start Learning'
    },
    {
      title: 'Intermediate Path',
      description: 'For investors ready to advance their skills',
      icon: TrendingUp,
      level: 'Intermediate',
      modules: [
        'Technical Analysis Mastery',
        'Options Trading Strategies',
        'Sector Analysis & Rotation',
        'Advanced Portfolio Management',
        'Derivatives & Hedging',
        'Market Timing Techniques'
      ],
      color: 'from-primary/20 to-accent/20',
      iconColor: 'text-primary',
      buttonText: 'Continue Journey'
    }
  ];
  const quizQuestions = [
    {
      question: "What does 'bull market' signify?",
      options: ["A market in decline", "A market on the rise", "A stagnant market", "A volatile market"],
      correctAnswer: 1
    },
    {
      question: "What is a 'dividend'?",
      options: ["A loan from a company", "A share of a company's profits paid to shareholders", "A type of stock", "A market index"],
      correctAnswer: 1
    },
    {
      question: "What does 'diversification' in a portfolio mean?",
      options: ["Investing in a single stock", "Investing in various assets to reduce risk", "Selling all stocks", "Buying only bonds"],
      correctAnswer: 1
    },
    {
        question: "What does P/E ratio stand for?",
        options: ["Price-to-Earnings Ratio", "Profit-to-Expense Ratio", "Price-to-Equity Ratio", "Profit-to-Earnings Ratio"],
        correctAnswer: 0
    },
    {
      question: "Which of the following is a stock market index?",
      options: ["NASDAQ", "Forex", "S&P 500", "Bitcoin"],
      correctAnswer: 2
    }
  ];

  const handleOpenQuiz = () => setQuizVisible(true);
  const handleCloseQuiz = () => {
    setQuizVisible(false);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  const handleSubmit = () => {
    let finalScore = 0;
    answers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        finalScore++;
      }
    });
    setScore(finalScore);
    setShowResult(true);
  };

  const QuizModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="glass-morphic p-8 rounded-2xl w-full max-w-lg relative border border-primary/20"
      >
        <button onClick={handleCloseQuiz} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X size={24} />
        </button>
        {!showResult ? (
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">{quizQuestions[currentQuestion].question}</h3>
            <div className="space-y-3">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    answers[currentQuestion] === index
                      ? 'bg-primary/20 border-primary'
                      : 'bg-background/30 border-border/20 hover:bg-primary/10'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <Button onClick={handlePrevious} disabled={currentQuestion === 0} variant="outline">Previous</Button>
              {currentQuestion < quizQuestions.length - 1 ? (
                <Button onClick={handleNext}>Next</Button>
              ) : (
                <Button onClick={handleSubmit}>Submit</Button>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 gradient-text">Quiz Result</h3>
            <p className="text-xl text-muted-foreground mb-6">You scored {score} out of {quizQuestions.length}</p>
            <div className="bg-primary/10 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2 text-foreground">
                {score >= 4 ? "Congratulations! We recommend the Intermediate Path." : "Great start! We recommend the Beginner Path."}
              </h4>
              <p className="text-muted-foreground">
                {score >= 4
                  ? "You have a solid foundation. The intermediate path will challenge you and expand your knowledge."
                  : "Build a strong foundation with our beginner path. You'll be an expert in no time!"}
              </p>
            </div>
            <Button onClick={handleCloseQuiz} className="mt-8" size="lg">Close</Button>
          </div>
        )}
      </motion.div>
    </div>
  );

  return (
    <section id="how-you-learn" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">How Will You Learn?</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8"
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your learning path and embark on a journey to financial literacy. 
            Our structured approach adapts to your experience level.
          </p>
        </motion.div>

        {/* Learning Path Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {learningPaths.map((path) => (
            <motion.div
              key={path.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <Card className="glass-morphic hover-lift h-full relative overflow-hidden border-0">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-50`} />
                
                {/* Content */}
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 rounded-lg bg-background/20 flex items-center justify-center ${path.iconColor}`}
                    >
                      <path.icon size={24} />
                    </motion.div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {path.level}
                    </span>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {path.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {path.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-6">
                  {/* Modules List */}
                  <div>
                    <h4 className="font-semibold text-foreground/90 mb-3">Course Modules:</h4>
                    <ul className="space-y-2">
                      {path.modules.map((module, moduleIndex) => (
                        <motion.li
                          key={module}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: 0.1 * moduleIndex,
                            duration: 0.4 
                          }}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {module}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border/20 pt-4">
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      <span>{Math.floor(Math.random() * 5000) + 1000}+ learners</span>
                    </div>
                    <div className="flex items-center">
                      <Award size={16} className="mr-1" />
                      <span>Certificate</span>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <Button 
                    className="w-full bg-primary/90 hover:bg-primary text-primary-foreground hover-lift group-hover:shadow-lg group-hover:shadow-primary/25"
                    size="lg"
                    onClick={() => window.location.href = '/login?direct=true'}
                  >
                    {path.buttonText}
                  </Button>
                </CardContent>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA in a card with mirror effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center items-center mt-16"
        >
          <div
            className="w-full max-w-2xl rounded-3xl bg-white/60 dark:bg-white/10 border border-white/30 shadow-2xl glass-morphic backdrop-blur-lg p-10 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_8px_rgba(80,200,255,0.25)]"
            style={{ boxShadow: '0 8px 40px 8px rgba(80,200,255,0.15), 0 1.5px 0 0 rgba(255,255,255,0.25) inset' }}
          >
            <p className="text-lg md:text-2xl text-muted-foreground mb-6 text-center font-medium">
              Not sure which path to choose? <span className="text-primary font-semibold">Take our quick assessment.</span>
            </p>
            <Button
              className="w-full max-w-xs mx-auto bg-primary text-primary-foreground text-lg py-5 px-8 rounded-xl shadow-lg hover:bg-primary/90 hover:shadow-primary/40 focus:ring-4 focus:ring-primary/30 transition-all duration-200"
              size="lg"
              onClick={handleOpenQuiz}
            >
              Find My Level
            </Button>
          </div>
        </motion.div>
      </div>
      {isQuizVisible && <QuizModal />}
    </section>
  );
};

export default HowYouLearnSection;