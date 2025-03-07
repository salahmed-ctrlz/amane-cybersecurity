"use client"

import { motion } from "framer-motion"
import { GlassCard } from "./GlassCard"
import { Github, Linkedin, Globe } from "lucide-react"

export const Founder = () => {
  return (
    <section id="founder" className="py-20">
      <GlassCard className="p-8 md:p-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="public/assets/salaheddinemedkour.jpg"
              alt="Medkour Salah Eddine"
              className="w-48 h-48 rounded-full object-cover border-4 border-purple-500/30"
            />

            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Medkour Salah Eddine</h2>
              <p className="text-xl text-purple-600 dark:text-purple-300 mb-6">Founder & Lead Developer</p>

              <div className="space-y-4">
                <a
                  href="https://github.com/salahmed-ctrlz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>github.com/salahmed-ctrlz</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/salah-eddine-medkour/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>linkedin.com/in/salah-eddine-medkour</span>
                </a>

                <a
                  href="https://salahmed-ctrlz.github.io/salaheddine-medkour-portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  <span>Portfolio</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </GlassCard>
    </section>
  )
}

