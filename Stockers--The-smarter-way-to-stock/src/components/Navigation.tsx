import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo.png';
import TockersLogo from '../Tockers-2.png';
import { motion } from 'framer-motion';
import { Moon, Sun, LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navigation = ({ isDark, toggleTheme }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState('hero');
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const navItems = [
    { id: 'hero', label: 'Front page' },
    { id: 'what-we-do', label: 'What we do' },
    { id: 'how-you-learn', label: 'How will you learn' },
    { id: 'legends', label: 'Legends' },
    { id: 'stalk-us', label: 'Stalk us' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-0 z-50 w-[calc(100%-4rem)] mx-8"
    >
      <div
        className="glass-morphic rounded-2xl pl-0 pr-6 py-4 relative overflow-hidden"
        style={!isDark ? { background: '#D8DEE9' } : {}}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer" />
        </div>

        <div className="flex items-center relative z-10 w-full h-16">
          <div className="flex items-center gap-6 justify-start w-full pl-8">
            {['what-we-do', 'how-you-learn', 'legends', 'stalk-us'].map((id) => {
              const item = navItems.find((nav) => nav.id === id);
              if (!item) return null;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base font-semibold transition-all duration-300 relative whitespace-nowrap ${
                    activeSection === item.id
                      ? 'text-primary'
                      : 'text-foreground/70 hover:text-primary'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          <div
            className="absolute left-1/2 -translate-x-1/2 group cursor-pointer"
            onClick={() => {
              const hero = document.getElementById('hero');
              if (hero) {
                hero.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/';
              }
            }}
          >
            <img
              src={isDark ? TockersLogo : Logo}
              alt="Stockers Logo"
              className={(isDark ? "h-[230px] w-auto" : "h-10 w-auto") + " transition-transform duration-300 group-hover:scale-110"}
            />
          </div>
          <div className="flex items-center ml-auto gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover-lift"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            
            {currentUser ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer hover-lift">
                    <AvatarImage src={currentUser.photoURL || undefined} alt={currentUser.displayName || 'User'} />
                    <AvatarFallback>{currentUser.displayName?.charAt(0).toUpperCase() || 'U'}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>{currentUser.displayName || currentUser.email}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/user-type-selection')}>Dashboard</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="text-red-500">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={handleLogin}
                className="bg-primary/90 hover:bg-primary text-primary-foreground hover-lift"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

