import { useState, createContext, useContext } from 'react';
import { Translation } from '../types/i18n';
import { en } from '../i18n/en';
import { ar } from '../i18n/ar';

type Language = 'en' | 'ar';
type LanguageContextType = {
  language: Language;
  t: Translation;
  toggleLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  t: en,
  toggleLanguage: () => {},
});

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');
  const t = language === 'en' ? en : ar;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return {
    language,
    t,
    toggleLanguage,
  };
};

export const useTranslation = () => {
  return useContext(LanguageContext);
};