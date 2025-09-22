import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const WhatWeDoSection = () => {
  // Dummy stock data for chart
  const stockData = [
    { time: '9:00', price: 150 },
    { time: '10:00', price: 155 },
    { time: '11:00', price: 148 },
    { time: '12:00', price: 162 },
    { time: '1:00', price: 158 },
    { time: '2:00', price: 171 },
    { time: '3:00', price: 165 },
    { time: '4:00', price: 178 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const chartVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="what-we-do" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-5xl lg:text-6xl font-bold mb-6"
              >
                <span className="gradient-text">What We Do</span>
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mb-8"
              />
            </div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xl lg:text-2xl text-foreground/90 leading-relaxed">
                We teach the stock market through{' '}
                <span className="text-primary font-semibold">video lectures</span>,{' '}
                <span className="text-primary font-semibold">interactive quizzes</span>, and{' '}
                <span className="text-primary font-semibold">engaging games</span>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our comprehensive approach makes complex financial concepts accessible 
                and enjoyable, transforming the way you learn about investing.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              {[
                { label: 'Video Lectures', icon: '🎥' },
                { label: 'Interactive Quizzes', icon: '🧩' },
                { label: 'Engaging Games', icon: '🎮' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -5 }}
                  className="text-center p-4 glass-morphic rounded-lg hover-lift"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-sm font-medium text-foreground/80">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Chart */}
          <motion.div
            variants={chartVariants}
            className="relative group"
          >
            <div className="glass-morphic rounded-2xl p-8 hover-lift">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground/90 mb-2">
                  STOCKERS INDEX
                </h3>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-primary">$178.42</span>
                  <span className="text-green-500 text-sm bg-green-500/10 px-2 py-1 rounded-full">
                    +12.3%
                  </span>
                </div>
              </div>
              
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={stockData}>
                    <XAxis 
                      dataKey="time" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ 
                        r: 6, 
                        fill: 'hsl(var(--primary))',
                        stroke: 'hsl(var(--background))',
                        strokeWidth: 2
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
                <span>Market Hours: 9:00 AM - 4:00 PM</span>
                <span>Real-time data simulation</span>
              </div>
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;