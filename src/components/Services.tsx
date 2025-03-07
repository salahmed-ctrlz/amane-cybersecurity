"use client"

import { motion } from "framer-motion"
import { useTranslation } from "../hooks/useLanguage"
import { GlassCard } from "./GlassCard"
import { ShieldIcon, CloudIcon, CodeIcon, AlertTriangleIcon } from "lucide-react"
import { useThemeContext } from "../hooks/useTheme"

export const Services = () => {
  const { t } = useTranslation()
  const { theme } = useThemeContext()

  const isLightMode = theme === "light"

  // Icons for each service
  const serviceIcons = [ShieldIcon, CloudIcon, CodeIcon, AlertTriangleIcon]

  // Service-specific subtitles
  const subtitles = ["COMPREHENSIVE ASSESSMENT", "ELEVATE YOUR DEFENSE", "BUILD WITH SECURITY", "STAY VIGILANT"]

  return (
    <section id="services" className="min-h-screen py-20 flex items-center justify-center bg-white/0 dark:bg-black/0">
      <GlassCard className="w-full p-8 md:p-12 text-center rounded-lg bg-white/0 dark:bg-black/0">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ color: isLightMode ? "#000000" : "#FFFFFF" }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          {t.services.title}
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ color: isLightMode ? "#000000" : "#FFFFFF" }}
          className="text-2xl md:text-3xl font-semibold mb-12 text-center"
        >
          The Perfect Solution For all Protection
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.list.map((service, index) => {
            const Icon = serviceIcons[index]

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border-2 border-purple-500 rounded-xl hover:scale-105 transition-transform"
                style={{
                  backgroundColor: isLightMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="flex items-center justify-center mb-4">
                  <Icon
                    className="w-12 h-12 transform transition-all duration-300 hover:scale-125"
                    style={{ color: isLightMode ? "#6b21a8" : "#ec4899" }}
                  />
                </div>

                <h3
                  className="text-xl font-bold mb-2 text-center"
                  style={{ color: isLightMode ? "#6b21a8" : "#ec4899" }}
                >
                  {service.title.toUpperCase()}
                </h3>

                <h4
                  className="text-sm font-semibold mb-4 text-center"
                  style={{ color: isLightMode ? "#000000" : "#FFFFFF" }}
                >
                  {subtitles[index]}
                </h4>

                <p className="mb-6 text-center" style={{ color: isLightMode ? "#000000" : "#D1D5DB" }}>
                  {service.description}
                </p>

                <ul className="space-y-2 text-left">
                  {index === 0 &&
                    ["Vulnerability Assessment", "Security Testing", "Risk Analysis"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span style={{ color: isLightMode ? "#6b21a8" : "#ec4899" }} className="mr-2">
                          •
                        </span>
                        <span style={{ color: isLightMode ? "#000000" : "#D1D5DB" }}>{item}</span>
                      </li>
                    ))}
                  {index === 1 &&
                    ["Cloud Infrastructure", "Data Protection", "Access Management"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span style={{ color: isLightMode ? "#6b21a8" : "#ec4899" }} className="mr-2">
                          •
                        </span>
                        <span style={{ color: isLightMode ? "#000000" : "#D1D5DB" }}>{item}</span>
                      </li>
                    ))}
                  {index === 2 &&
                    ["Secure Coding", "Code Reviews", "Security Testing"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span style={{ color: isLightMode ? "#6b21a8" : "#ec4899" }} className="mr-2">
                          •
                        </span>
                        <span style={{ color: isLightMode ? "#000000" : "#D1D5DB" }}>{item}</span>
                      </li>
                    ))}
                  {index === 3 &&
                    ["Threat Monitoring", "Incident Response", "Security Awareness"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span style={{ color: isLightMode ? "#6b21a8" : "#ec4899" }} className="mr-2">
                          •
                        </span>
                        <span style={{ color: isLightMode ? "#000000" : "#D1D5DB" }}>{item}</span>
                      </li>
                    ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </GlassCard>
    </section>
  )
}

