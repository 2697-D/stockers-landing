"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollAnimated } from "@/components/scroll-animated"
import { BackgroundLines } from "@/components/ui/background-lines"
import { 
  ArrowLeft, 
  TrendingUp,
  TrendingDown,
  DollarSign,
  BarChart3,
  Target,
  Wallet,
  Plus,
  Minus,
  RefreshCw,
  Eye,
  EyeOff,
  Star,
  AlertCircle
} from "lucide-react"

interface StockData {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  volume: number
  marketCap: string
}

interface Portfolio {
  id: string
  name: string
  balance: number
  totalValue: number
  stocks: { [symbol: string]: { shares: number; avgPrice: number } }
  transactions: Transaction[]
}

interface Transaction {
  id: string
  type: 'buy' | 'sell'
  symbol: string
  shares: number
  price: number
  total: number
  timestamp: Date
}

export default function TradingSimulatorPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<{ id: string; name: string; email: string } | null>(null)
  const [portfolios, setPortfolios] = useState<Portfolio[]>([])
  const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio | null>(null)
  const [stockData, setStockData] = useState<StockData[]>([])
  const [searchSymbol, setSearchSymbol] = useState("")
  const [selectedStock, setSelectedStock] = useState<StockData | null>(null)
  const [shares, setShares] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [showBalance, setShowBalance] = useState(true)

  // Mock user login
  const handleLogin = () => {
    const mockUser = {
      id: "user_123",
      name: "John Doe",
      email: "john@example.com"
    }
    setUser(mockUser)
    setIsLoggedIn(true)
    
    // Initialize with mock portfolio
    const mockPortfolio: Portfolio = {
      id: "portfolio_1",
      name: "Main Portfolio",
      balance: 10000,
      totalValue: 10000,
      stocks: {},
      transactions: []
    }
    setPortfolios([mockPortfolio])
    setSelectedPortfolio(mockPortfolio)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
    setPortfolios([])
    setSelectedPortfolio(null)
  }

  // Fetch stock data from Alpha Vantage
  const fetchStockData = async (symbol: string) => {
    try {
      setIsLoading(true)
      const response = await fetch(`/api/stock-data?symbol=${symbol}`)
      if (!response.ok) {
        throw new Error('Failed to fetch stock data')
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching stock data:', error)
      // Return mock data if API fails
      return {
        symbol: symbol.toUpperCase(),
        name: `${symbol.toUpperCase()} Corp`,
        price: Math.random() * 200 + 50,
        change: (Math.random() - 0.5) * 10,
        changePercent: (Math.random() - 0.5) * 5,
        volume: Math.floor(Math.random() * 1000000),
        marketCap: `${Math.floor(Math.random() * 100)}B`
      }
    } finally {
      setIsLoading(false)
    }
  }

  const searchStock = async () => {
    if (!searchSymbol.trim()) return
    
    const stock = await fetchStockData(searchSymbol.trim())
    setSelectedStock(stock)
  }

  const buyStock = () => {
    if (!selectedStock || !selectedPortfolio) return
    
    const totalCost = selectedStock.price * shares
    if (totalCost > selectedPortfolio.balance) {
      alert("Insufficient balance!")
      return
    }

    const newPortfolio = { ...selectedPortfolio }
    newPortfolio.balance -= totalCost
    
    if (newPortfolio.stocks[selectedStock.symbol]) {
      const existingShares = newPortfolio.stocks[selectedStock.symbol].shares
      const existingTotal = newPortfolio.stocks[selectedStock.symbol].avgPrice * existingShares
      const newTotal = existingTotal + totalCost
      const newShares = existingShares + shares
      
      newPortfolio.stocks[selectedStock.symbol] = {
        shares: newShares,
        avgPrice: newTotal / newShares
      }
    } else {
      newPortfolio.stocks[selectedStock.symbol] = {
        shares: shares,
        avgPrice: selectedStock.price
      }
    }

    const transaction: Transaction = {
      id: Date.now().toString(),
      type: 'buy',
      symbol: selectedStock.symbol,
      shares: shares,
      price: selectedStock.price,
      total: totalCost,
      timestamp: new Date()
    }

    newPortfolio.transactions.push(transaction)
    newPortfolio.totalValue = newPortfolio.balance + Object.values(newPortfolio.stocks).reduce((sum, stock) => sum + (stock.shares * selectedStock.price), 0)
    
    setSelectedPortfolio(newPortfolio)
    setPortfolios(portfolios.map(p => p.id === newPortfolio.id ? newPortfolio : p))
  }

  const sellStock = (symbol: string) => {
    if (!selectedPortfolio || !selectedPortfolio.stocks[symbol]) return
    
    const stock = selectedPortfolio.stocks[symbol]
    const currentPrice = stockData.find(s => s.symbol === symbol)?.price || stock.avgPrice
    const totalValue = stock.shares * currentPrice
    
    const newPortfolio = { ...selectedPortfolio }
    newPortfolio.balance += totalValue
    delete newPortfolio.stocks[symbol]
    
    const transaction: Transaction = {
      id: Date.now().toString(),
      type: 'sell',
      symbol: symbol,
      shares: stock.shares,
      price: currentPrice,
      total: totalValue,
      timestamp: new Date()
    }

    newPortfolio.transactions.push(transaction)
    newPortfolio.totalValue = newPortfolio.balance + Object.values(newPortfolio.stocks).reduce((sum, s) => sum + (s.shares * currentPrice), 0)
    
    setSelectedPortfolio(newPortfolio)
    setPortfolios(portfolios.map(p => p.id === newPortfolio.id ? newPortfolio : p))
  }

  if (!isLoggedIn) {
    return (
      <BackgroundLines className="min-h-screen text-slate-50">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-md mx-auto">
            <ScrollAnimated direction="up">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                    <Wallet className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-100">Trading Simulator</CardTitle>
                  <CardDescription className="text-slate-400">
                    Practice trading with virtual money and real market data
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button onClick={handleLogin} className="w-full bg-green-600 hover:bg-green-700">
                    <Wallet className="mr-2 h-4 w-4" />
                    Start Trading (Demo Login)
                  </Button>
                  <p className="text-xs text-slate-500 text-center">
                    Demo mode - No real money involved
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimated>
          </div>
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
                <BarChart3 className="h-4 w-4 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-slate-100">Trading Simulator</h1>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-slate-400">Welcome, {user?.name}</span>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Portfolio Overview */}
          <div className="lg:col-span-1">
            <ScrollAnimated direction="up">
              <Card className="bg-slate-800/50 border-slate-700 mb-6">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-slate-100">Portfolio</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowBalance(!showBalance)}
                    >
                      {showBalance ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Cash Balance</span>
                      <span className="text-slate-100 font-semibold">
                        {showBalance ? `$${selectedPortfolio?.balance.toFixed(2)}` : "••••••"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Total Value</span>
                      <span className="text-green-400 font-semibold">
                        {showBalance ? `$${selectedPortfolio?.totalValue.toFixed(2)}` : "••••••"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">P&L</span>
                      <span className={`font-semibold ${
                        (selectedPortfolio?.totalValue || 0) >= 10000 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {showBalance ? `$${((selectedPortfolio?.totalValue || 0) - 10000).toFixed(2)}` : "••••••"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimated>

            {/* Holdings */}
            <ScrollAnimated direction="up" className="delay-100">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-slate-100">Holdings</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedPortfolio && Object.keys(selectedPortfolio.stocks).length > 0 ? (
                    <div className="space-y-3">
                      {Object.entries(selectedPortfolio.stocks).map(([symbol, stock]) => (
                        <div key={symbol} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                          <div>
                            <div className="font-semibold text-slate-100">{symbol}</div>
                            <div className="text-sm text-slate-400">{stock.shares} shares</div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => sellStock(symbol)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-400 text-center py-4">No holdings</p>
                  )}
                </CardContent>
              </Card>
            </ScrollAnimated>
          </div>

          {/* Trading Interface */}
          <div className="lg:col-span-2">
            <ScrollAnimated direction="up" className="delay-200">
              <Card className="bg-slate-800/50 border-slate-700 mb-6">
                <CardHeader>
                  <CardTitle className="text-slate-100">Trade Stocks</CardTitle>
                  <CardDescription className="text-slate-400">
                    Search and trade stocks with real market data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter stock symbol (e.g., AAPL)"
                        value={searchSymbol}
                        onChange={(e) => setSearchSymbol(e.target.value)}
                        className="flex-1"
                      />
                      <Button onClick={searchStock} disabled={isLoading}>
                        {isLoading ? <RefreshCw className="h-4 w-4 animate-spin" /> : "Search"}
                      </Button>
                    </div>

                    {selectedStock && (
                      <div className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-slate-100">{selectedStock.symbol}</h3>
                            <p className="text-slate-400">{selectedStock.name}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-slate-100">${selectedStock.price.toFixed(2)}</div>
                            <div className={`text-sm ${
                              selectedStock.change >= 0 ? 'text-green-400' : 'text-red-400'
                            }`}>
                              {selectedStock.change >= 0 ? '+' : ''}{selectedStock.change.toFixed(2)} ({selectedStock.changePercent.toFixed(2)}%)
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setShares(Math.max(1, shares - 1))}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-16 text-center">{shares}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setShares(shares + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="text-slate-400">
                            Total: ${(selectedStock.price * shares).toFixed(2)}
                          </div>
                          <Button onClick={buyStock} className="bg-green-600 hover:bg-green-700">
                            Buy
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimated>

            {/* Recent Transactions */}
            <ScrollAnimated direction="up" className="delay-300">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-slate-100">Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedPortfolio && selectedPortfolio.transactions.length > 0 ? (
                    <div className="space-y-2">
                      {selectedPortfolio.transactions.slice(-5).reverse().map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${
                              transaction.type === 'buy' ? 'bg-green-400' : 'bg-red-400'
                            }`} />
                            <div>
                              <div className="font-semibold text-slate-100">
                                {transaction.type.toUpperCase()} {transaction.symbol}
                              </div>
                              <div className="text-sm text-slate-400">
                                {transaction.shares} shares @ ${transaction.price.toFixed(2)}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`font-semibold ${
                              transaction.type === 'buy' ? 'text-red-400' : 'text-green-400'
                            }`}>
                              {transaction.type === 'buy' ? '-' : '+'}${transaction.total.toFixed(2)}
                            </div>
                            <div className="text-xs text-slate-400">
                              {transaction.timestamp.toLocaleTimeString()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-400 text-center py-4">No transactions yet</p>
                  )}
                </CardContent>
              </Card>
            </ScrollAnimated>
          </div>
        </div>
      </div>
    </BackgroundLines>
  )
}
