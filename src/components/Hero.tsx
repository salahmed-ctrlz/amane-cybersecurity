"use client"

import { motion } from "framer-motion"
import { useTranslation } from "../hooks/useLanguage"
import { GlassCard } from "./GlassCard"
import { useThemeContext } from "../hooks/useTheme"

export const Hero = () => {
  const { t } = useTranslation()
  const { theme } = useThemeContext()

  const isLightMode = theme === "light"

  // Use public directory paths for logos
  const logoSrc = isLightMode ? "/assets/Amane logo.svg" : "/assets/Amane logo white.svg"

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <GlassCard
        className={`
          w-full relative p-12 md:p-20 pb-16 md:pb-24 text-center
          bg-white/0 dark:bg-black/0 backdrop-blur-xl
        `}
      >
        <motion.img
          src={logoSrc}
          alt="AMANE Logo"
          className="w-32 h-32 mx-auto mt-16 mb-16 cursor-pointer object-contain"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.5 }}
        />

        {/* Slogan and CTA with Adjusted Spacing */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-16"
        >
          <div className="flex justify-center space-x-10 text-xl md:text-4xl font-bold">
            {t.hero.slogan.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.7 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                whileHover={{ scale: 1.2 }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 8px rgba(75, 0, 130, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-purple-600 rounded-full text-lg font-medium text-white shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer mt-16 mb-16"
          >
            {t.hero.cta}
          </motion.button>
        </motion.div>
      </GlassCard>
    </section>
  )
}

