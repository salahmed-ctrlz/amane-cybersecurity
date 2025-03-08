"use client"

import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useLanguage';
import { GlassCard } from './GlassCard';
import { LightbulbIcon, SearchIcon, ShieldIcon } from 'lucide-react';
import { useThemeContext } from '../hooks/useTheme';

export const About = () => {
  const { t, currentLanguage } = useTranslation();
  const { theme } = useThemeContext();
  
  const isLightMode = theme === 'light';
  const isArabic = currentLanguage === 'ar';

  // Handle different data structures between English and Arabic translations
  let aboutPoints = [];
  
  if (isArabic && t.about.points) {
    // For Arabic, the points are in an object format
    aboutPoints = Object.entries(t.about.points).map(([key, value]) => ({
      key,
      title: value.title,
      description: value.description
    }));
  } else if (!isArabic && Array.isArray(t.about.points)) {
    // For English, the points are in an array format
    aboutPoints = t.about.points.map((point, index) => ({
      key: ['consult', 'assess', 'secure'][index],
      title: point.title,
      description: point.description
    }));
  } else {
    // Fallback data if translation structure is unexpected
    aboutPoints = [
      {
        key: 'consult',
        title: '1. Consult',
        description: 'Engage with clients to understand their specific cybersecurity challenges and provide expert guidance.'
      },
      {
        key: 'assess',
        title: '2. Assess',
        description: 'Perform rigorous vulnerability assessments to identify weaknesses and anticipate emerging threats.'
      },
      {
        key: 'secure',
        title: '3. Secure',
        description: 'Implement robust, customized security solutions to protect sensitive data and build long-term resilience.'
      }
    ];
  }

  return (
    <section id="about" className="min-h-screen py-20 flex items-center justify-center bg-white/0 dark:bg-black/0 font-arabic">
      <GlassCard className="w-full p-12 md:p-16 text-center rounded-lg bg-white/0 dark:bg-black/0vc font-arabic">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ color: isLightMode ? '#000000' : '#FFFFFF' }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          {t.about.title}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{ color: isLightMode ? '#000000' : '#D1D5DB' }}
          className="text-lg md:text-xl text-center mb-12"
        >
          {t.about.description}
        </motion.p>

        {/* Points Section */}
        <div className="grid md:grid-cols-3 gap-8 font-arabic">
          {aboutPoints.map((point, index) => {
            return (
              <motion.div
                key={point.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 border-2 border-purple-500 rounded-xl hover:scale-105 transition-transform"
              >
                <div className="mb-4 flex justify-center">
                  {point.key === 'consult' && (
                    <LightbulbIcon 
                      style={{ color: isLightMode ? '#6b21a8' : '#ec4899' }} 
                      className="w-12 h-12 transform transition-all duration-300 hover:scale-125" 
                    />
                  )}
                  {point.key === 'assess' && (
                    <SearchIcon 
                      style={{ color: isLightMode ? '#6b21a8' : '#ec4899' }} 
                      className="w-12 h-12 transform transition-all duration-300 hover:scale-125" 
                    />
                  )}
                  {point.key === 'secure' && (
                    <ShieldIcon 
                      style={{ color: isLightMode ? '#6b21a8' : '#ec4899' }} 
                      className="w-12 h-12 transform transition-all duration-300 hover:scale-125" 
                    />
                  )}
                </div>
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: isLightMode ? '#000000' : '#FFFFFF' }}
                >
                  {point.title}
                </h3>
                <p className='font-arabic'
                  style={{ color: isLightMode ? '#000000' : '#D1D5DB' }}
                >
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </GlassCard>
    </section>
  );
};
