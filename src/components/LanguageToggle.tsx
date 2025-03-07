import { Languages } from 'lucide-react';
import { useTranslation } from '../hooks/useLanguage';
import { motion } from 'framer-motion';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useTranslation();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="fixed right-4 top-20 z-50 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
      aria-label="Toggle language"
    >
      <Languages className="w-6 h-6" />
      <span className="sr-only">
        {language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
      </span>
    </motion.button>
  );
};