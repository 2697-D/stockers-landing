import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { 
  Twitter, 
  Linkedin, 
  Instagram, 
  MapPin, 
  Mail, 
  Phone,
  ExternalLink
} from 'lucide-react';

const StalkUsSection = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      handle: '@StockersHQ',
      url: '#',
      color: 'hover:text-blue-400',
      description: 'Daily market insights & tips'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      handle: 'Stockers Education',
      url: '#',
      color: 'hover:text-blue-600',
      description: 'Professional networking & content'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      handle: '@stockers_official',
      url: '#',
      color: 'hover:text-pink-500',
      description: 'Behind the scenes & success stories'
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Financial District\nNew York, NY 10004\nUnited States',
      multiline: true
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@stockers.com',
      action: 'mailto:hello@stockers.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-STOCK',
      action: 'tel:+15551237862'
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
  <section id="stalk-us" className="min-h-screen h-full flex items-center py-20 px-4 relative overflow-hidden">
      {/* Animated beams background for this section only */}
  <BackgroundBeams className="absolute inset-0 w-full h-full min-h-full z-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Stalk Us</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8"
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay connected with us across all platforms. Join our community, 
            get the latest updates, and never miss out on market insights.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Left - Social Media */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Follow Our Journey
              </h3>
              <p className="text-muted-foreground mb-8">
                Connect with us on social media for daily insights, market updates, 
                and exclusive content from our community of learners and experts.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="group"
                >
                  <Card className="glass-morphic hover-lift border-0 transition-all duration-300 group-hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center text-foreground transition-colors ${social.color}`}
                        >
                          <social.icon size={24} />
                        </motion.div>
                        
                        <div className="flex-grow">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-foreground">
                              {social.name}
                            </h4>
                            <span className="text-sm text-primary font-medium">
                              {social.handle}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {social.description}
                          </p>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover:opacity-100 transition-opacity hover-lift"
                        >
                          <ExternalLink size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-8">
                Have questions? Want to partner with us? Or just want to say hello? 
                We'd love to hear from you. Reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="glass-morphic border-0 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0"
                        >
                          <contact.icon size={20} />
                        </motion.div>
                        
                        <div className="flex-grow">
                          <h4 className="font-semibold text-foreground mb-2">
                            {contact.label}
                          </h4>
                          {contact.action ? (
                            <a
                              href={contact.action}
                              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <div className="text-muted-foreground">
                              {contact.multiline ? (
                                contact.value.split('\n').map((line, i) => (
                                  <div key={i}>{line}</div>
                                ))
                              ) : (
                                contact.value
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Newsletter Signup */}
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StalkUsSection;