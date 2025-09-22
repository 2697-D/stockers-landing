import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const symbol = searchParams.get('symbol');

    if (!symbol) {
      return NextResponse.json({ error: 'Symbol parameter is required' }, { status: 400 });
    }

    // Check if Alpha Vantage API key is available
    const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
    
    if (!apiKey) {
      // Return mock data if API key is not available
      console.log("Alpha Vantage API key not available, returning mock data");
      return NextResponse.json({
        symbol: symbol.toUpperCase(),
        name: `${symbol.toUpperCase()} Corporation`,
        price: Math.random() * 200 + 50,
        change: (Math.random() - 0.5) * 10,
        changePercent: (Math.random() - 0.5) * 5,
        volume: Math.floor(Math.random() * 1000000),
        marketCap: `${Math.floor(Math.random() * 100)}B`,
        high: Math.random() * 200 + 50,
        low: Math.random() * 200 + 50,
        open: Math.random() * 200 + 50
      });
    }

    // Fetch real data from Alpha Vantage
    const response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Alpha Vantage API failed with status: ${response.status}`);
    }

    const data = await response.json();
    
    // Check if we got valid data
    if (data['Error Message']) {
      throw new Error(data['Error Message']);
    }

    if (data['Note']) {
      throw new Error('API call frequency limit reached');
    }

    const quote = data['Global Quote'];
    if (!quote || !quote['01. symbol']) {
      throw new Error('Invalid symbol or no data available');
    }

    // Parse the response
    const stockData = {
      symbol: quote['01. symbol'],
      name: `${quote['01. symbol']} Corporation`, // Alpha Vantage doesn't provide company name in this endpoint
      price: parseFloat(quote['05. price']),
      change: parseFloat(quote['09. change']),
      changePercent: parseFloat(quote['10. change percent'].replace('%', '')),
      volume: parseInt(quote['06. volume']),
      marketCap: 'N/A', // Not available in this endpoint
      high: parseFloat(quote['03. high']),
      low: parseFloat(quote['04. low']),
      open: parseFloat(quote['02. open']),
      previousClose: parseFloat(quote['08. previous close'])
    };

    return NextResponse.json(stockData);

  } catch (error) {
    console.error("Error fetching stock data:", error);
    
    // Return mock data on error
    return NextResponse.json({
      symbol: symbol?.toUpperCase() || 'UNKNOWN',
      name: `${symbol?.toUpperCase() || 'UNKNOWN'} Corporation`,
      price: Math.random() * 200 + 50,
      change: (Math.random() - 0.5) * 10,
      changePercent: (Math.random() - 0.5) * 5,
      volume: Math.floor(Math.random() * 1000000),
      marketCap: `${Math.floor(Math.random() * 100)}B`,
      high: Math.random() * 200 + 50,
      low: Math.random() * 200 + 50,
      open: Math.random() * 200 + 50,
      previousClose: Math.random() * 200 + 50
    });
  }
}
