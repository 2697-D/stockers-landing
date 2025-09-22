import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { Trophy, TrendingUp, Target, Zap } from 'lucide-react';

const LegendsSection = () => {
  const legends = [
    {
      name: 'Sarah Chen',
      achievement: 'Top Performer 2024',
      description: 'Achieved 240% portfolio growth using advanced options strategies learned in our intermediate course.',
      image: '/placeholder.svg',
      stats: { roi: '240%', time: '8 months', badge: 'Options Master' },
      icon: Trophy,
      color: 'from-yellow-500/20 to-orange-500/20'
    },
    {
      name: 'Marcus Rodriguez',
      achievement: 'Risk Management Expert',
      description: 'Successfully navigated market volatility with disciplined risk management, protecting capital during downturns.',
      image: '/placeholder.svg',
      stats: { roi: '185%', time: '1 year', badge: 'Risk Guru' },
      icon: Target,
      color: 'from-blue-500/20 to-primary/20'
    },
    {
      name: 'Emily Watson',
      achievement: 'Fastest Learner',
      description: 'From complete beginner to profitable trader in just 6 months through dedicated learning and practice.',
      image: '/placeholder.svg',
      stats: { roi: '165%', time: '6 months', badge: 'Speed Demon' },
      icon: Zap,
      color: 'from-primary/20 to-purple-500/20'
    },
    {
      name: 'David Kim',
      achievement: 'Sector Rotation Specialist',
      description: 'Mastered sector analysis and rotation strategies, consistently outperforming market benchmarks.',
      image: '/placeholder.svg',
      stats: { roi: '320%', time: '14 months', badge: 'Sector Pro' },
      icon: TrendingUp,
      color: 'from-green-500/20 to-primary/20'
    },
    // More random cards
    {
      name: 'Priya Singh',
      achievement: 'Swing Trade Star',
      description: 'Generated consistent returns with disciplined swing trading and technical analysis.',
      image: '/placeholder.svg',
      stats: { roi: '150%', time: '10 months', badge: 'Swing Star' },
      icon: Trophy,
      color: 'from-pink-500/20 to-yellow-500/20'
    },
    {
      name: 'Alex Johnson',
      achievement: 'ETF Innovator',
      description: 'Built a diversified ETF portfolio that outperformed the S&P 500.',
      image: '/placeholder.svg',
      stats: { roi: '110%', time: '1.5 years', badge: 'ETF Pro' },
      icon: TrendingUp,
      color: 'from-blue-400/20 to-green-400/20'
    },
    {
      name: 'Fatima Noor',
      achievement: 'Dividend Dynamo',
      description: 'Created a passive income stream through high-yield dividend stocks.',
      image: '/placeholder.svg',
      stats: { roi: '95%', time: '2 years', badge: 'Dividend Dynamo' },
      icon: Target,
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      name: 'Liam O’Connor',
      achievement: 'Crypto Visionary',
      description: 'Early adopter of blockchain, achieved exponential growth in crypto assets.',
      image: '/placeholder.svg',
      stats: { roi: '400%', time: '3 years', badge: 'Crypto Visionary' },
      icon: Zap,
      color: 'from-yellow-400/20 to-blue-500/20'
    },
    {
      name: 'Sofia Rossi',
      achievement: 'Momentum Master',
      description: 'Specialized in momentum trading, capturing trends for maximum gains.',
      image: '/placeholder.svg',
      stats: { roi: '210%', time: '9 months', badge: 'Momentum Master' },
      icon: Trophy,
      color: 'from-red-400/20 to-orange-400/20'
    },
    {
      name: 'Chen Wei',
      achievement: 'Value Investor',
      description: 'Identified undervalued stocks and held for long-term growth.',
      image: '/placeholder.svg',
      stats: { roi: '175%', time: '2 years', badge: 'Value Investor' },
      icon: Target,
      color: 'from-green-400/20 to-blue-400/20'
    },
    {
      name: 'Maya Patel',
      achievement: 'Options Strategist',
      description: 'Mastered complex options strategies for risk-managed profits.',
      image: '/placeholder.svg',
      stats: { roi: '220%', time: '1 year', badge: 'Options Pro' },
      icon: Zap,
      color: 'from-purple-400/20 to-yellow-400/20'
    },
    {
      name: 'Lucas Müller',
      achievement: 'Growth Stock Guru',
      description: 'Focused on high-growth tech stocks for rapid portfolio expansion.',
      image: '/placeholder.svg',
      stats: { roi: '300%', time: '15 months', badge: 'Growth Guru' },
      icon: TrendingUp,
      color: 'from-blue-500/20 to-green-500/20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="legends" className="min-h-screen py-20 px-4">
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
            <span className="gradient-text">Legends</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8"
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our top achievers who transformed their financial futures through dedication, 
            learning, and smart investing strategies.
          </p>
        </motion.div>

        {/* Legends Infinite Moving Cards */}
        <div className="legend-moving-cards-wrapper">
          <InfiniteMovingCards
            items={legends.map((legend) => ({
              quote: legend.description,
              name: legend.name,
              title: legend.achievement + ' | ROI: ' + legend.stats.roi + ' | ' + legend.stats.badge,
              image: legend.image
            }))}
            direction="left"
            speed="slow"
            className="legend-moving-cards"
          />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block glass-morphic rounded-2xl p-8 hover-lift"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Ready to Join Our Legends?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Start your journey today and see your name among our top achievers. 
              Every expert was once a beginner.
            </p>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl mb-4"
            >
              🚀
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegendsSection;