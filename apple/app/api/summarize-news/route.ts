import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    console.log("API route called");
    
    // Check if API keys are available
    const hasNewsAPIKey = process.env.news_keys && process.env.news_keys !== '';
    const hasGeminiKey = process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== '';
    
    console.log("API keys check:", { hasNewsAPIKey, hasGeminiKey });

    if (!hasNewsAPIKey || !hasGeminiKey) {
      console.log("API keys not available, returning mock data");
      return NextResponse.json({
        summary: "Market shows mixed signals today with technology stocks leading gains while energy sector faces headwinds. Investors remain cautious ahead of key economic data releases. Trading volumes remain moderate with focus on upcoming earnings reports.",
        articles: [
          {
            title: "Tech Stocks Rally as AI Investments Surge",
            url: "https://example.com/tech-rally",
            source: "Financial Times",
            description: "Major technology companies see significant gains as artificial intelligence investments reach record highs, with AI-focused startups attracting billions in funding."
          },
          {
            title: "Energy Sector Faces Pressure from Renewable Transition",
            url: "https://example.com/energy-pressure",
            source: "Bloomberg",
            description: "Traditional energy companies struggle as renewable energy adoption accelerates, with solar and wind power becoming increasingly cost-competitive."
          },
          {
            title: "Central Bank Signals Potential Rate Adjustments",
            url: "https://example.com/central-bank",
            source: "Reuters",
            description: "Federal Reserve officials hint at possible interest rate changes in response to evolving economic conditions and inflation data."
          },
          {
            title: "Cryptocurrency Market Shows Volatility Amid Regulatory News",
            url: "https://example.com/crypto-volatility",
            source: "CoinDesk",
            description: "Digital asset prices fluctuate as regulatory clarity remains uncertain, with major cryptocurrencies experiencing significant price swings."
          },
          {
            title: "Global Markets React to Geopolitical Developments",
            url: "https://example.com/global-markets",
            source: "Wall Street Journal",
            description: "International markets show mixed responses to recent geopolitical events, with investors closely monitoring trade relations and policy changes."
          },
          {
            title: "Banking Sector Reports Strong Q4 Earnings",
            url: "https://example.com/banking-earnings",
            source: "CNBC",
            description: "Major banks exceed expectations with robust quarterly results, driven by increased lending activity and improved interest margins."
          },
          {
            title: "Healthcare Stocks Rise on Drug Approval News",
            url: "https://example.com/healthcare-rise",
            source: "MarketWatch",
            description: "Pharmaceutical companies see significant gains following FDA approval of breakthrough treatments, with biotech sector leading the rally."
          },
          {
            title: "Real Estate Market Shows Signs of Stabilization",
            url: "https://example.com/real-estate",
            source: "Forbes",
            description: "Housing prices begin to stabilize after months of volatility, with mortgage rates showing signs of moderation and inventory levels improving."
          },
          {
            title: "Automotive Industry Faces Supply Chain Challenges",
            url: "https://example.com/automotive",
            source: "Automotive News",
            description: "Car manufacturers report ongoing supply chain disruptions affecting production schedules, with semiconductor shortages continuing to impact deliveries."
          },
          {
            title: "Retail Sector Prepares for Holiday Shopping Season",
            url: "https://example.com/retail-holiday",
            source: "Retail Dive",
            description: "Major retailers announce aggressive holiday promotions and inventory strategies, with e-commerce platforms expecting record online sales volumes."
          },
          {
            title: "Oil Prices Fluctuate on OPEC Production Decisions",
            url: "https://example.com/oil-opec",
            source: "Oil & Gas Journal",
            description: "Crude oil prices experience volatility following OPEC+ production announcements, with energy traders closely monitoring global supply and demand dynamics."
          },
          {
            title: "Telecommunications Sector Invests in 5G Infrastructure",
            url: "https://example.com/telecom-5g",
            source: "Telecoms.com",
            description: "Telecom companies announce major 5G network expansion plans, with significant capital investments expected to drive sector growth and connectivity improvements."
          }
        ]
      });
    }

    // Initialize Gemini client
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // === STEP 1: FETCH NEWS FROM NEWSAPI.ORG ===
    console.log("Fetching news from NewsAPI...");
    const newsResponse = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=5`, // Fetch top 5 headlines from India
      {
        headers: {
          'X-Api-Key': process.env.news_keys || '',
        },
      }
    );

    console.log("NewsAPI response status:", newsResponse.status);

    if (!newsResponse.ok) {
      console.log("NewsAPI failed, falling back to mock data");
      throw new Error(`News API failed with status: ${newsResponse.status}`);
    }

    const newsData = await newsResponse.json();
    console.log("NewsAPI data received:", newsData);
    const articles = newsData.articles;

    if (!articles || articles.length === 0) {
      return NextResponse.json({ summary: "No recent news found." });
    }
    // Summarize each article individually
    console.log("Starting article summarization...");
    const summarizedArticles = await Promise.all(
      articles.map(async (article: any) => {
        try {
          console.log(`Summarizing article: ${article.title}`);
          const prompt = `You are an expert news editor for finance related news. Summarize the following news article into a concise, informative paragraph of about 50-70 words. Be neutral and focus on the key financial implications and market impact.

Title: ${article.title}
Description: ${article.description || 'No description available'}`;

          const result = await model.generateContent(prompt);
          const response = await result.response;
          const articleSummary = response.text().trim() || article.description || "Summary unavailable.";
          
          return {
            title: article.title,
            url: article.url,
            source: article.source.name,
            description: articleSummary
          };
        } catch (error) {
          console.error(`Error summarizing article: ${article.title}`, error);
          return {
            title: article.title,
            url: article.url,
            source: article.source.name,
            description: article.description || "Summary unavailable."
          };
        }
      })
    );

    // Create overall market summary
    console.log("Creating overall market summary...");
    const marketPrompt = `You are an expert financial analyst. Based on the following news articles, provide a concise market overview of about 80-100 words. Focus on key market trends, sector performance, and overall market sentiment. Be neutral and informative.

Market News Summary:

${summarizedArticles.map(article => `• ${article.title}: ${article.description}`).join('\n')}`;

    const marketResult = await model.generateContent(marketPrompt);
    const marketResponse = await marketResult.response;
    const marketSummary = marketResponse.text().trim() || "Market summary unavailable.";
    
    console.log("Successfully generated summaries, returning data");
    return NextResponse.json({ 
      summary: marketSummary, 
      articles: summarizedArticles 
    });

  } catch (error) {
    console.error("Error in summarize-news API:", error);
    // Return mock data on error
    return NextResponse.json({
      summary: "Market shows mixed signals today with technology stocks leading gains while energy sector faces headwinds. Investors remain cautious ahead of key economic data releases. Trading volumes remain moderate with focus on upcoming earnings reports.",
      articles: [
        {
          title: "Tech Stocks Rally as AI Investments Surge",
          url: "https://example.com/tech-rally",
          source: "Financial Times",
          description: "Major technology companies see significant gains as artificial intelligence investments reach record highs, with AI-focused startups attracting billions in funding."
        },
        {
          title: "Energy Sector Faces Pressure from Renewable Transition",
          url: "https://example.com/energy-pressure",
          source: "Bloomberg",
          description: "Traditional energy companies struggle as renewable energy adoption accelerates, with solar and wind power becoming increasingly cost-competitive."
        },
        {
          title: "Central Bank Signals Potential Rate Adjustments",
          url: "https://example.com/central-bank",
          source: "Reuters",
          description: "Federal Reserve officials hint at possible interest rate changes in response to evolving economic conditions and inflation data."
        },
        {
          title: "Cryptocurrency Market Shows Volatility Amid Regulatory News",
          url: "https://example.com/crypto-volatility",
          source: "CoinDesk",
          description: "Digital asset prices fluctuate as regulatory clarity remains uncertain, with major cryptocurrencies experiencing significant price swings."
        },
        {
          title: "Global Markets React to Geopolitical Developments",
          url: "https://example.com/global-markets",
          source: "Wall Street Journal",
          description: "International markets show mixed responses to recent geopolitical events, with investors closely monitoring trade relations and policy changes."
        },
        {
          title: "Banking Sector Reports Strong Q4 Earnings",
          url: "https://example.com/banking-earnings",
          source: "CNBC",
          description: "Major banks exceed expectations with robust quarterly results, driven by increased lending activity and improved interest margins."
        },
        {
          title: "Healthcare Stocks Rise on Drug Approval News",
          url: "https://example.com/healthcare-rise",
          source: "MarketWatch",
          description: "Pharmaceutical companies see significant gains following FDA approval of breakthrough treatments, with biotech sector leading the rally."
        },
        {
          title: "Real Estate Market Shows Signs of Stabilization",
          url: "https://example.com/real-estate",
          source: "Forbes",
          description: "Housing prices begin to stabilize after months of volatility, with mortgage rates showing signs of moderation and inventory levels improving."
        },
        {
          title: "Automotive Industry Faces Supply Chain Challenges",
          url: "https://example.com/automotive",
          source: "Automotive News",
          description: "Car manufacturers report ongoing supply chain disruptions affecting production schedules, with semiconductor shortages continuing to impact deliveries."
        },
        {
          title: "Retail Sector Prepares for Holiday Shopping Season",
          url: "https://example.com/retail-holiday",
          source: "Retail Dive",
          description: "Major retailers announce aggressive holiday promotions and inventory strategies, with e-commerce platforms expecting record online sales volumes."
        },
        {
          title: "Oil Prices Fluctuate on OPEC Production Decisions",
          url: "https://example.com/oil-opec",
          source: "Oil & Gas Journal",
          description: "Crude oil prices experience volatility following OPEC+ production announcements, with energy traders closely monitoring global supply and demand dynamics."
        },
        {
          title: "Telecommunications Sector Invests in 5G Infrastructure",
          url: "https://example.com/telecom-5g",
          source: "Telecoms.com",
          description: "Telecom companies announce major 5G network expansion plans, with significant capital investments expected to drive sector growth and connectivity improvements."
        }
      ]
    });
  }
}
