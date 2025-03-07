import { motion } from "framer-motion"
import { useTranslation } from "../hooks/useLanguage"
import { GlassCard } from "./GlassCard"

export const Partners = () => {
  const { t } = useTranslation()

  const partners = [
    {
      name: "Sonatrach",
      logo: "public/assets/Sonatrach.png", // Using Amane logo as placeholder for Sonatrach
    },
    {
      name: "Université Badji Mokhtar Annaba",
      logo: "public/assets/badjimokhtarannaba.png",
    },
    {
      name: "Google Cloud",
      logo: "public/assets/Google-Cloud-Symbol.png",
    },
    {
      name: "Algérie Télécom",
      logo: "public/assets/Logo_Algérie_Télécom.svg",
    },
    {
      name: "Ooredoo",
      logo: "public/assets/Ooredoo.png", // Using Amane logo as placeholder for Ooredoo
    },
  ]

  return (
    <section id="partners" className="py-20">
      <GlassCard className="p-8 md:p-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          {t.partners.title}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </section>
  )
}

