import { useEffect } from 'react';
import { ThemeContext, useTheme } from './hooks/useTheme';
import { LanguageContext, useLanguage } from './hooks/useLanguage';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguageToggle } from './components/LanguageToggle';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Partners } from './components/Partners';
import { Contact } from './components/Contact';
import { Founder } from './components/Founder';
import { Background } from './components/Background';

function App() {
  const themeContext = useTheme(); // Using the theme context
  const languageContext = useLanguage(); // Assuming language context

  // Update the language class when the language changes
  useEffect(() => {
    if (languageContext.currentLanguage === 'ar') {
      document.body.classList.add('font-arabic');
      document.documentElement.lang = 'ar'; // For RTL support
    } else {
      document.body.classList.remove('font-arabic');
      document.documentElement.lang = 'en'; // For LTR support
    }
  }, [languageContext.currentLanguage]);

  return (
    <ThemeContext.Provider value={themeContext}>
      <LanguageContext.Provider value={languageContext}>
        <div className={`min-h-screen ${themeContext.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          <Background />
          <div className="fixed top-1/2 -translate-y-1/2 right-4 z-50 space-y-4 font-arabic">
            <ThemeToggle />
            <LanguageToggle />
          </div>
          <Navbar />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
            <Hero />
            <About />
            <Services />
            <Partners />
            <Contact />
            <Founder />
          </div>
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
