import { motion } from "framer-motion"
import { useTranslation } from "../hooks/useLanguage"
import { GlassCard } from "./GlassCard"
import { useThemeContext } from "../hooks/useTheme"

export const Hero = () => {
  const { t, language } = useTranslation()
  const { theme } = useThemeContext()

  const isLightMode = theme === "light"
  const isArabic = language === "ar"

  // Use public directory paths for logos
  const logoSrc = isLightMode ? "./assets/Amane logo.svg" : "./assets/Amane logo white.svg"

  const sloganContent = {
    en: {
      greeting: "Greetings,",
      words: ["Consult", "Assess", "Secure"],
    },
    ar: {
      greeting: "مرحبا",
      words: ["إستشارة", "تقييم", "تأمين"],
    },
  }

  // Get content based on current language
  const currentContent = isArabic ? sloganContent.ar : sloganContent.en

  // Text color based on theme
  const textColor = isLightMode ? "text-black" : "text-white"

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <GlassCard
        className={`
          w-full relative p-12 md:p-20 pb-16 md:pb-24 max-w-7xl mx-auto
          bg-white/0 dark:bg-black/0 backdrop-blur-xl
        `}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-12">
          {/* Left Column - Logo and CTA */}
          <div className="flex flex-col items-center md:items-center justify-center space-y-8">
            <motion.div
              className="backdrop-blur-md rounded-lg p-4 w-full max-w-xs mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(128, 90, 213, 0.4)",
              }}
            >
              <motion.img
                src={logoSrc}
                alt="AMANE Logo"
                className="w-full h-auto mx-auto cursor-pointer object-contain"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", }}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>

            <a href="#about">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 4px 8px rgba(75, 0, 130, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className={`px-12 py-4 ${isLightMode ? "bg-purple-600" : "bg-white text-gray-800"} rounded-md text-lg font-medium ${isLightMode ? "text-white" : "text-gray-800"} shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer w-full max-w-xs`}
              >
                Learn More
              </motion.button>
            </a>
          </div>

          {/* Right Column - Language-based Content */}
          <motion.div
            key={language} // Add key to force re-render when language changes
            initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className={`flex flex-col ${isArabic ? "items-end text-right" : "items-start text-left"} justify-center space-y-6`}
            dir={isArabic ? "rtl" : "ltr"}
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`text-4xl md:text-6xl font-bold ${textColor} ${isArabic ? "font-arabic" : ""}`}
              whileHover={{ scale: 1.05 }}
            >
              {currentContent.greeting}
            </motion.h1>

            <div className={`flex flex-col ${isArabic ? "items-end" : "items-start"} space-y-4`}>
              {currentContent.words.map((word, index) => (
                <motion.span
                  key={`${language}-${word}`} // Add language to key to force re-render
                  initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.7 }}
                  className={`text-3xl md:text-5xl font-bold ${textColor} ${isArabic ? "font-arabic" : ""}`}
                  whileHover={{
                    scale: 1.05,
                    x: isArabic ? -10 : 10,
                    color: isLightMode ? "#9333ea" : "#d8b4fe",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </GlassCard>
    </section>
  )
}

