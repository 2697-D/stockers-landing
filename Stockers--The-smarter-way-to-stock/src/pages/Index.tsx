import { useTheme } from '@/components/ThemeProvider';
import ClickSpark from '../components/ClickSpark';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import HowYouLearnSection from '@/components/sections/HowYouLearnSection';
import LegendsSection from '@/components/sections/LegendsSection';
import StalkUsSection from '@/components/sections/StalkUsSection';

const Index = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ClickSpark>
      <div className="min-h-screen bg-background">
        <Navigation isDark={theme === 'dark'} toggleTheme={toggleTheme} />
        <main>
          <HeroSection />
          <WhatWeDoSection />
          <HowYouLearnSection />
          <LegendsSection />
          <StalkUsSection />
        </main>
      </div>
    </ClickSpark>
  );
};

export default Index;
