import { motion } from 'framer-motion';
import { Home, Info, Settings, Users, Phone, User } from 'lucide-react';
import { useTranslation } from '../hooks/useLanguage';
import { useThemeContext } from '../hooks/useTheme';

const navIcons = {
  home: Home,
  about: Info,
  services: Settings,
  partners: Users,
  contact: Phone,
  founder: User,
};

export const Navbar = () => {
  const { t, language } = useTranslation();
  const { theme } = useThemeContext();

  const navItems = [
    { key: 'home', label: t.navbar.home },
    { key: 'about', label: t.navbar.about },
    { key: 'services', label: t.navbar.services },
    { key: 'partners', label: t.navbar.partners },
    { key: 'contact', label: t.navbar.contact },
    { key: 'founder', label: t.navbar.founder },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 backdrop-blur-sm rounded-full ${
        theme === 'dark'
          ? 'bg-black/20 border-white/10'
          : 'bg-white/20 border-black/10'
      } border-b ${language === 'ar' ? 'rtl' : 'ltr'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Desktop Navigation: Text-Only Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ key, label }) => {
              const Icon = navIcons[key as keyof typeof navIcons];
              return (
                <motion.a
                  key={key}
                  href={`#${key}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 font-heading hover:text-purple-400 transition-colors"
                >
                  <span>{label}</span>
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Navigation: Icon-Only Links */}
          <div className="md:hidden flex items-center space-x-4">
            {navItems.map(({ key }) => {
              const Icon = navIcons[key as keyof typeof navIcons];
              return (
                <motion.a
                  key={key}
                  href={`#${key}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 hover:text-purple-400 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
