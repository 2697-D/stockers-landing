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
  Newspaper, 
  TrendingUp,
  Clock,
  ExternalLink,
  RefreshCw,
  Globe,
  Eye,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

interface NewsArticle {
  title: string
  url: string
  source: string
  description?: string
}

interface NewsData {
  summary: string
  articles: NewsArticle[]
}

export default function NewsPage() {
  const [newsData, setNewsData] = useState<NewsData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 6

  useEffect(() => {
    fetchNews()
  }, [])

  useEffect(() => {
    if (newsData?.articles) {
      setFilteredArticles(newsData.articles)
    }
  }, [newsData])

  const fetchNews = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      const response = await fetch('/api/summarize-news')
      if (!response.ok) {
        throw new Error('Failed to fetch news')
      }
      
      const data = await response.json()
      setNewsData(data)
    } catch (err) {
      console.error('Error fetching news:', err)
      setError('Failed to load news. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  // Pagination logic
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  const startIndex = (currentPage - 1) * articlesPerPage
  const endIndex = startIndex + articlesPerPage
  const currentArticles = filteredArticles.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (isLoading) {
    return (
      <BackgroundLines className="min-h-screen text-slate-50">
        <div className="container mx-auto px-6 py-8">
            <div className="h-8 w-64 bg-slate-700 rounded mb-4"></div>
            <div className="h-4 w-48 bg-slate-700 rounded mb-8"></div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-32 bg-slate-700 rounded"></div>
              ))}
            </div>
          </div>
      </BackgroundLines>
    )
  }

  if (error) {
    return (
      <BackgroundLines className="min-h-screen text-slate-50">
        <div className="container mx-auto px-6 py-8">
          <Card className="bg-red-500/10 border-red-500/20">
            <CardContent className="p-6 text-center">
              <div className="text-red-400 mb-4">
                <Newspaper className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-red-300 mb-2">Error Loading News</h3>
              <p className="text-red-400 mb-4">{error}</p>
              <Button onClick={fetchNews} className="bg-red-600 hover:bg-red-700">
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
            </CardContent>
          </Card>
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
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Newspaper className="h-4 w-4 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-slate-100">Market News</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={fetchNews}>
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <ScrollAnimated direction="up">
            <div className="text-center mb-8">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Newspaper className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Today's Market News
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Stay updated with the latest financial news and market insights
              </p>
            </div>
          </ScrollAnimated>

          {/* News Summary */}
          {newsData?.summary && (
            <ScrollAnimated direction="up" className="delay-100">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-300 to-red-300 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <Card className="relative bg-slate-800/50 border-slate-700 mb-8 group-hover:bg-slate-800/70 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-blue-400" />
                      <CardTitle className="text-slate-100">AI Generated Market Summary</CardTitle>
                      <Badge className="bg-blue-100/20 text-blue-100">Live</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 leading-relaxed">{newsData.summary}</p>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimated>
          )}


          {/* News Articles */}
          <div className="grid gap-6">
            {currentArticles.map((article, index) => (
              <ScrollAnimated key={index} direction="up" className={`delay-${index * 100}`}>
                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02] group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-blue-300 transition-colors">
                          {article.title}
                        </h3>
                        {article.description && (
                          <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                            {article.description}
                          </p>
                        )}
                        <div className="flex items-center space-x-4 text-sm text-slate-400">
                          <span className="flex items-center">
                            <Globe className="mr-1 h-3 w-3" />
                            {article.source}
                          </span>
                          <span className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            Just now
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Read Full Article
                      </a>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-slate-600 text-slate-400">
                          <Eye className="mr-1 h-3 w-3" />
                          View
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimated>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <ScrollAnimated direction="up" className="delay-300">
              <div className="flex items-center justify-center space-x-2 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                
                <div className="flex items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => goToPage(page)}
                      className={currentPage === page ? "bg-blue-600" : "border-slate-600 text-slate-300 hover:bg-slate-700"}
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="text-center mt-4">
                <p className="text-sm text-slate-400">
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredArticles.length)} of {filteredArticles.length} articles
                </p>
              </div>
            </ScrollAnimated>
          )}

          {filteredArticles.length === 0 && !isLoading && (
            <ScrollAnimated direction="up">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8 text-center">
                  <Newspaper className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-300 mb-2">No Articles Found</h3>
                  <p className="text-slate-400">Try adjusting your search criteria.</p>
                </CardContent>
              </Card>
            </ScrollAnimated>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-slate-400 text-sm">
              © 2025 Stockers. The smarter way to stocks.
            </p>
          </div>
        </div>
      </footer>
    </BackgroundLines>
  )
}
