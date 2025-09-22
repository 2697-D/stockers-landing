// Module data based on Zerodha Varsity content
export const modules = {
  beginner: [
    {
      id: 1,
      title: "Introduction to Stock Markets",
      description: "Understanding the basics of stock markets and how they work",
      concepts: ["What is a stock market", "Primary vs Secondary markets", "Stock exchanges", "Market participants"],
      gamifiedContent: {
        type: "interactive_timeline",
        title: "Market Evolution Journey",
        description: "Follow the evolution of stock markets from the 1600s to today"
      },
      flashcards: [
        {
          front: "What is a stock market?",
          back: "A stock market is a marketplace where buyers and sellers trade shares of publicly listed companies."
        },
        {
          front: "What is the difference between primary and secondary markets?",
          back: "Primary market is where new securities are issued (IPOs), while secondary market is where existing securities are traded between investors."
        },
        {
          front: "Name the major stock exchanges in India",
          back: "BSE (Bombay Stock Exchange) and NSE (National Stock Exchange) are the two major stock exchanges in India."
        }
      ],
      quiz: 
        [
          {
              "question": "What is a stock market?",
              "options": [
                  "A place to buy groceries",
                  "A platform to trade shares of companies",
                  "A government tax system",
                  "A money-lending agency"
              ],
              "correct": 1,
              "explanation": "The stock market is where investors buy and sell company shares. It allows companies to raise funds and investors to grow wealth."
          },
          {
              "question": "Why do companies issue shares?",
              "options": [
                  "To donate to charity",
                  "To raise capital",
                  "To repay investors directly",
                  "To avoid paying taxes"
              ],
              "correct": 1,
              "explanation": "Companies issue shares mainly to raise funds for expansion, new projects, or reducing debt."
          },
          {
              "question": "Which market deals with already listed shares?",
              "options": [
                  "Primary market",
                  "Secondary market",
                  "IPO market",
                  "Money market"
              ],
              "correct": 1,
              "explanation": "The secondary market is where existing shares are traded between investors. The primary market handles fresh issues like IPOs."
          },
          {
              "question": "How do investors participate in stock markets?",
              "options": [
                  "By directly visiting company offices",
                  "Through brokers and trading platforms",
                  "By government allocation",
                  "By central bank approval"
              ],
              "correct": 1,
              "explanation": "Investors must use brokers or online platforms linked to exchanges like NSE and BSE to buy or sell shares."
          },
          {
              "question": "What role do stock exchanges play?",
              "options": [
                  "They lend money to companies",
                  "They set company profit targets",
                  "They provide a trading platform",
                  "They give loans to investors"
              ],
              "correct": 2,
              "explanation": "Stock exchanges (like NSE/BSE) act as regulated marketplaces where trades between buyers and sellers are executed."
          }
    ]
  },
    {
      id: 2,
      title: "Understanding Bull and Bear Markets",
      description: "Learn about market cycles and what drives them",
      concepts: ["Bull market characteristics", "Bear market characteristics", "Market cycles", "Economic indicators"],
      gamifiedContent: {
        type: "market_simulator",
        title: "Market Mood Simulator",
        description: "Experience how different market conditions affect your investments"
      },
      flashcards: [
        {
          front: "What is a bull market?",
          back: "A bull market is a period when stock prices are rising or expected to rise, typically lasting months or years."
        },
        {
          front: "What is a bear market?",
          back: "A bear market is a period when stock prices are falling or expected to fall, typically lasting months or years."
        }
      ],
      quiz: [
      {
          "question": "What is a bull market?",
          "options": [
              "Market with falling prices",
              "Market with stable prices",
              "Market with rising prices",
              "Market with no activity"
          ],
          "correct": 2,
          "explanation": "A bull market is marked by rising stock prices, optimism, and investor confidence."
      },
      {
          "question": "What is a bear market?",
          "options": [
              "Prices rise sharply",
              "Prices fall consistently",
              "Prices remain constant",
              "Prices move randomly"
          ],
          "correct": 1,
          "explanation": "A bear market is when prices fall significantly for a long period, usually due to pessimism and weak conditions."
      },
      {
          "question": "Which of the following can cause market cycles?",
          "options": [
              "Economic conditions",
              "Weather patterns",
              "Sports events",
              "Family income"
          ],
          "correct": 0,
          "explanation": "Market cycles are driven by economic growth, interest rates, company earnings, and global events."
      },
      {
          "question": "Which investor emotion drives markets upward unnaturally?",
          "options": [
              "Fear",
              "Greed",
              "Confidence",
              "Confusion"
          ],
          "correct": 1,
          "explanation": "Greed often pushes investors to overbuy, creating inflated prices and fueling bull runs."
      },
      {
          "question": "Can markets quickly change from bull to bear?",
          "options": [
              "No, it takes decades",
              "Yes, sudden events can trigger shifts",
              "Only if investors agree",
              "Only if SEBI orders it"
          ],
          "correct": 1,
          "explanation": "Unexpected events like global crises, policy changes, or big news can quickly switch market sentiment."
      }
  ]
    },
    {
      id: 3,
      title: "Stock Market Orders",
      description: "Understanding different types of orders and when to use them",
      concepts: ["Market orders", "Limit orders", "Stop-loss orders", "Order execution"],
      gamifiedContent: {
        type: "order_placer",
        title: "Order Placement Simulator",
        description: "Practice placing different types of orders in various market conditions"
      },
      flashcards: [
        {
          front: "What is a market order?",
          back: "A market order is an instruction to buy or sell a security immediately at the best available current price."
        },
        {
          front: "What is a limit order?",
          back: "A limit order is an instruction to buy or sell a security at a specific price or better."
        }
      ],
      quiz: [
        {
          question: "Which order type guarantees execution but not price?",
          options: ["Limit order", "Market order", "Stop-loss order", "Stop-limit order"],
          correct: 1,
          explanation: "A market order guarantees execution at the best available price but doesn't guarantee a specific price."
        }
      ]
    },
    {
      id: 4,
      title: "P/E Ratio and Valuation",
      description: "Learn how to evaluate stocks using fundamental metrics",
      concepts: ["Price-to-Earnings ratio", "Valuation methods", "Earnings per share", "Market capitalization"],
      gamifiedContent: {
        type: "valuation_calculator",
        title: "Stock Valuation Calculator",
        description: "Calculate and compare P/E ratios of different companies"
      },
      flashcards: [
        {
          front: "What does P/E ratio stand for?",
          back: "P/E ratio stands for Price-to-Earnings ratio, which compares a company's stock price to its earnings per share."
        },
        {
          front: "How do you calculate P/E ratio?",
          back: "P/E ratio = Current stock price / Earnings per share (EPS)"
        }
      ],
      quiz: [
        {
          question: "A stock with a P/E ratio of 15 means:",
          options: ["The stock is overvalued", "Investors pay ₹15 for every ₹1 of earnings", "The stock will rise 15%", "The company has 15% profit margin"],
          correct: 1,
          explanation: "A P/E ratio of 15 means investors are willing to pay ₹15 for every ₹1 of the company's earnings."
        }
      ]
    },
    {
      id: 5,
      title: "Diversification and Risk Management",
      description: "Learn how to spread risk across different investments",
      concepts: ["Portfolio diversification", "Risk types", "Asset allocation", "Correlation"],
      gamifiedContent: {
        type: "portfolio_builder",
        title: "Portfolio Diversification Game",
        description: "Build a diversified portfolio and see how it performs in different market conditions"
      },
      flashcards: [
        {
          front: "What is diversification?",
          back: "Diversification is a risk management strategy that spreads investments across different assets to reduce overall risk."
        },
        {
          front: "What is the main benefit of diversification?",
          back: "The main benefit is reducing portfolio risk without necessarily reducing expected returns."
        }
      ],
      quiz: [
        {
          question: "The main purpose of diversification is to:",
          options: ["Maximize returns", "Minimize risk", "Avoid all losses", "Beat the market"],
          correct: 1,
          explanation: "The main purpose of diversification is to minimize risk by spreading investments across different assets."
        }
      ]
    },
    {
      id: 6,
      title: "Blue Chip Stocks",
      description: "Understanding large, stable companies and their characteristics",
      concepts: ["Blue chip characteristics", "Large cap stocks", "Dividend stocks", "Defensive stocks"],
      gamifiedContent: {
        type: "company_classifier",
        title: "Blue Chip Identifier",
        description: "Identify which companies qualify as blue chip stocks"
      },
      flashcards: [
        {
          front: "What are blue chip stocks?",
          back: "Blue chip stocks are shares of large, well-established, financially sound companies with a history of stable earnings and reliable dividends."
        },
        {
          front: "Examples of blue chip stocks in India",
          back: "Reliance Industries, TCS, HDFC Bank, Infosys, Hindustan Unilever are examples of blue chip stocks in India."
        }
      ],
      quiz: [
        {
          question: "Blue chip stocks are typically characterized by:",
          options: ["High volatility", "Large market capitalization and stable earnings", "New companies", "High growth potential"],
          correct: 1,
          explanation: "Blue chip stocks are characterized by large market capitalization, stable earnings, and reliable dividend payments."
        }
      ]
    },
    {
      id: 7,
      title: "Market Indices",
      description: "Understanding how market indices work and what they represent",
      concepts: ["Sensex and Nifty", "Index calculation", "Market representation", "Index funds"],
      gamifiedContent: {
        type: "index_tracker",
        title: "Index Performance Tracker",
        description: "Track how different indices perform over time"
      },
      flashcards: [
        {
          front: "What is the Sensex?",
          back: "Sensex is the benchmark index of BSE, consisting of 30 large, liquid stocks representing various sectors."
        },
        {
          front: "What is the Nifty?",
          back: "Nifty is the benchmark index of NSE, consisting of 50 large, liquid stocks representing various sectors."
        }
      ],
      quiz: [
        {
          question: "How many stocks are included in the Sensex?",
          options: ["25", "50","30", "100"],
          correct: 2,
          explanation: "The Sensex includes 30 large, liquid stocks from various sectors of the Indian economy."
        }
      ]
    },
    {
      id: 8,
      title: "Dividends and Returns",
      description: "Understanding how investors earn returns from stocks",
      concepts: ["Dividend payments", "Capital gains", "Total returns", "Dividend yield"],
      gamifiedContent: {
        type: "return_calculator",
        title: "Investment Return Calculator",
        description: "Calculate different types of returns on your investments"
      },
      flashcards: [
        {
          front: "What are the two main ways to earn returns from stocks?",
          back: "Capital gains (price appreciation) and dividends (regular payments from company profits)."
        },
        {
          front: "What is dividend yield?",
          back: "Dividend yield is the annual dividend payment divided by the stock price, expressed as a percentage."
        }
      ],
      quiz: [
        {
          question: "If a stock pays ₹10 dividend annually and trades at ₹200, the dividend yield is:",
          options: ["5%", "10%", "20%", "2%"],
          correct: 0,
          explanation: "Dividend yield = (₹10 / ₹200) × 100 = 5%"
        }
      ]
    },
    {
      id: 9,
      title: "Market Hours and Trading",
      description: "Understanding when and how trading happens",
      concepts: ["Trading hours", "Pre-market and after-hours", "Settlement cycles", "Trading volumes"],
      gamifiedContent: {
        type: "trading_schedule",
        title: "Trading Schedule Simulator",
        description: "Learn about different trading sessions and their characteristics"
      },
      flashcards: [
        {
          front: "What are the normal trading hours for Indian stock markets?",
          back: "Normal trading hours are 9:15 AM to 3:30 PM (Monday to Friday), with pre-market session from 9:00 AM to 9:15 AM."
        },
        {
          front: "What is T+1 settlement?",
          back: "T+1 settlement means trades are settled one business day after the trade date."
        }
      ],
      quiz: [
        {
          question: "In T+1 settlement, if you buy a stock on Monday, when is it settled?",
          options: ["Monday", "Tuesday", "Wednesday", "Same day"],
          correct: 1,
          explanation: "T+1 settlement means the trade is settled one business day after the trade date, so Monday's trade settles on Tuesday."
        }
      ]
    },
    {
      id: 10,
      title: "Basic Chart Reading",
      description: "Introduction to reading stock price charts",
      concepts: ["Price charts", "Volume analysis", "Support and resistance", "Trend lines"],
      gamifiedContent: {
        type: "chart_reader",
        title: "Chart Reading Practice",
        description: "Practice reading different types of charts and identifying patterns"
      },
      flashcards: [
        {
          front: "What does a candlestick chart show?",
          back: "A candlestick chart shows the open, high, low, and close prices for a specific time period."
        },
        {
          front: "What is support in technical analysis?",
          back: "Support is a price level where a stock tends to find buying interest and bounce back up."
        }
      ],
      quiz: [
        {
          question: "In a candlestick chart, a green candle typically indicates:",
          options: ["Price went down", "Price went up", "No price change", "High volume"],
          correct: 1,
          explanation: "A green candle typically indicates the closing price was higher than the opening price."
        }
      ]
    }
  ],
  intermediate: [
    {
      id: 1,
      title: "Impact Cost and Market Liquidity",
      description: "Understanding how large orders affect market prices",
      concepts: ["Impact cost calculation", "Market liquidity", "Bid-ask spread", "Order book depth"],
      gamifiedContent: {
        type: "liquidity_simulator",
        title: "Market Impact Simulator",
        description: "See how different order sizes affect market prices"
      },
      flashcards: [
        {
          front: "What is impact cost?",
          back: "Impact cost measures the market impact of a trade, representing the cost of executing a large order in terms of price movement."
        },
        {
          front: "How is impact cost calculated?",
          back: "Impact cost = (Actual execution price - Ideal price) / Ideal price × 100"
        }
      ],
      quiz: [
        {
          question: "Impact cost is higher when:",
          options: ["Market is very liquid", "Market is illiquid", "Order size is small", "Stock is blue chip"],
          correct: 1,
          explanation: "Impact cost is higher in illiquid markets where large orders can significantly move prices."
        }
      ]
    },
    {
      id: 2,
      title: "Futures and Margin Trading",
      description: "Understanding derivatives and leverage",
      concepts: ["Futures contracts", "Margin requirements", "Leverage effects", "Mark-to-market"],
      gamifiedContent: {
        type: "futures_trader",
        title: "Futures Trading Simulator",
        description: "Experience trading futures with different margin requirements"
      },
      flashcards: [
        {
          front: "What is margin in futures trading?",
          back: "Margin is the initial deposit required to open a futures position, acting as a security deposit to cover potential losses."
        },
        {
          front: "What is mark-to-market?",
          back: "Mark-to-market is the process of adjusting the margin account daily based on the current market price of the futures contract."
        }
      ],
      quiz: [
        {
          question: "In futures trading, margin serves as:",
          options: ["Profit", "Initial deposit and security", "Commission", "Tax"],
          correct: 1,
          explanation: "Margin serves as both an initial deposit to open a position and security to cover potential losses."
        }
      ]
    },
    {
      id: 3,
      title: "Clearing and Settlement Process",
      description: "Understanding how trades are processed and settled",
      concepts: ["Clearing process", "Settlement cycles", "NSCCL and ICCL", "Risk management"],
      gamifiedContent: {
        type: "settlement_tracker",
        title: "Trade Settlement Tracker",
        description: "Follow a trade through the entire clearing and settlement process"
      },
      flashcards: [
        {
          front: "What is clearing?",
          back: "Clearing is the process of confirming, matching, and completing trades between buyers and sellers."
        },
        {
          front: "What is settlement?",
          back: "Settlement is the process of transferring securities and funds between parties to complete a trade."
        }
      ],
      quiz: [
        {
          question: "The clearing process ensures:",
          options: ["Higher prices", "Trade completion and risk management", "Lower taxes", "Faster execution"],
          correct: 1,
          explanation: "The clearing process ensures trade completion and manages counterparty risk in the market."
        }
      ]
    },
    {
      id: 4,
      title: "Asset Allocation Strategies",
      description: "Learning how to distribute investments across different asset classes",
      concepts: ["Asset classes", "Allocation strategies", "Risk-return tradeoff", "Rebalancing"],
      gamifiedContent: {
        type: "allocation_optimizer",
        title: "Portfolio Allocation Optimizer",
        description: "Optimize your portfolio allocation based on risk tolerance and goals"
      },
      flashcards: [
        {
          front: "What is asset allocation?",
          back: "Asset allocation is the process of dividing investments among different asset categories like stocks, bonds, and cash."
        },
        {
          front: "What is the 60-40 rule?",
          back: "A common asset allocation strategy of 60% stocks and 40% bonds for balanced risk-return profile."
        }
      ],
      quiz: [
        {
          question: "Asset allocation primarily helps with:",
          options: ["Maximizing returns", "Risk management and diversification", "Avoiding taxes", "Timing the market"],
          correct: 1,
          explanation: "Asset allocation primarily helps with risk management and diversification across different asset classes."
        }
      ]
    },
    {
      id: 5,
      title: "Portfolio Risk and Variance",
      description: "Understanding portfolio risk measurement and management",
      concepts: ["Portfolio variance", "Standard deviation", "Risk metrics", "Correlation effects"],
      gamifiedContent: {
        type: "risk_analyzer",
        title: "Portfolio Risk Analyzer",
        description: "Analyze and visualize portfolio risk using different metrics"
      },
      flashcards: [
        {
          front: "What does variance measure?",
          back: "Variance measures the spread of returns around the mean, indicating the volatility or risk of an investment."
        },
        {
          front: "How does correlation affect portfolio risk?",
          back: "Lower correlation between assets reduces portfolio risk through diversification benefits."
        }
      ],
      quiz: [
        {
          question: "Portfolio variance is reduced when:",
          options: ["All stocks move together", "Stocks have low correlation", "Portfolio is concentrated", "High-risk stocks are added"],
          correct: 1,
          explanation: "Portfolio variance is reduced when stocks have low correlation, providing diversification benefits."
        }
      ]
    },
    {
      id: 6,
      title: "Options Basics",
      description: "Introduction to options trading and strategies",
      concepts: ["Call and put options", "Option premiums", "Intrinsic and time value", "Basic strategies"],
      gamifiedContent: {
        type: "options_simulator",
        title: "Options Trading Simulator",
        description: "Practice trading options with different strategies"
      },
      flashcards: [
        {
          front: "What is a call option?",
          back: "A call option gives the holder the right (but not obligation) to buy an underlying asset at a predetermined price."
        },
        {
          front: "What is option premium?",
          back: "Option premium is the price paid by the buyer to the seller for the right to buy or sell the underlying asset."
        }
      ],
      quiz: [
        {
          question: "A call option gives the holder the right to:",
          options: ["Sell at strike price", "Buy at strike price", "Receive dividends", "Vote in company meetings"],
          correct: 1,
          explanation: "A call option gives the holder the right to buy the underlying asset at the strike price."
        }
      ]
    },
    {
      id: 7,
      title: "Technical Analysis Fundamentals",
      description: "Learning chart patterns and technical indicators",
      concepts: ["Chart patterns", "Moving averages", "RSI and MACD", "Support and resistance"],
      gamifiedContent: {
        type: "pattern_recognizer",
        title: "Chart Pattern Recognition",
        description: "Identify and trade different chart patterns"
      },
      flashcards: [
        {
          front: "What is RSI?",
          back: "RSI (Relative Strength Index) is a momentum oscillator that measures the speed and change of price movements."
        },
        {
          front: "What does MACD stand for?",
          back: "MACD stands for Moving Average Convergence Divergence, a trend-following momentum indicator."
        }
      ],
      quiz: [
        {
          question: "RSI above 70 typically indicates:",
          options: ["Oversold condition", "Overbought condition", "Strong uptrend", "Market crash"],
          correct: 1,
          explanation: "RSI above 70 typically indicates an overbought condition, suggesting the stock may be due for a correction."
        }
      ]
    },
    {
      id: 8,
      title: "Fundamental Analysis",
      description: "Analyzing companies using financial statements and ratios",
      concepts: ["Financial statements", "Ratio analysis", "Valuation methods", "Industry analysis"],
      gamifiedContent: {
        type: "financial_analyzer",
        title: "Company Financial Analyzer",
        description: "Analyze company financials and make investment decisions"
      },
      flashcards: [
        {
          front: "What are the three main financial statements?",
          back: "Income Statement, Balance Sheet, and Cash Flow Statement are the three main financial statements."
        },
        {
          front: "What is ROE?",
          back: "ROE (Return on Equity) measures how efficiently a company uses shareholders' equity to generate profits."
        }
      ],
      quiz: [
        {
          question: "A high ROE indicates:",
          options: ["High debt", "Efficient use of equity", "Low profitability", "High expenses"],
          correct: 1,
          explanation: "A high ROE indicates the company is efficiently using shareholders' equity to generate profits."
        }
      ]
    },
    {
      id: 9,
      title: "Market Psychology and Behavioral Finance",
      description: "Understanding how emotions and biases affect trading",
      concepts: ["Market psychology", "Behavioral biases", "Herd mentality", "Emotional trading"],
      gamifiedContent: {
        type: "psychology_simulator",
        title: "Trading Psychology Simulator",
        description: "Experience how emotions affect trading decisions"
      },
      flashcards: [
        {
          front: "What is herd mentality in markets?",
          back: "Herd mentality is the tendency of investors to follow the crowd rather than make independent decisions."
        },
        {
          front: "What is confirmation bias?",
          back: "Confirmation bias is the tendency to search for information that confirms existing beliefs while ignoring contradictory evidence."
        }
      ],
      quiz: [
        {
          question: "Herd mentality in markets often leads to:",
          options: ["Rational decisions", "Market bubbles and crashes", "Stable prices", "Higher liquidity"],
          correct: 1,
          explanation: "Herd mentality often leads to market bubbles and crashes as investors follow the crowd rather than fundamentals."
        }
      ]
    },
    {
      id: 10,
      title: "Risk Management Strategies",
      description: "Advanced techniques for managing portfolio risk",
      concepts: ["Position sizing", "Stop-loss strategies", "Portfolio hedging", "Risk metrics"],
      gamifiedContent: {
        type: "risk_manager",
        title: "Advanced Risk Manager",
        description: "Implement various risk management strategies in your portfolio"
      },
      flashcards: [
        {
          front: "What is position sizing?",
          back: "Position sizing is determining how much capital to allocate to each trade based on risk tolerance and account size."
        },
        {
          front: "What is portfolio hedging?",
          back: "Portfolio hedging involves taking offsetting positions to reduce overall portfolio risk."
        }
      ],
      quiz: [
        {
          question: "Position sizing helps with:",
          options: ["Maximizing profits", "Managing risk per trade", "Timing the market", "Avoiding taxes"],
          correct: 1,
          explanation: "Position sizing helps manage risk per trade by determining appropriate capital allocation."
        }
      ]
    }
  ],
}
