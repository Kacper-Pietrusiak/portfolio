'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section
      className="w-screen  relative text-white bg-[url('/bg.jpg')] bg-cover bg-center flex items-center"
    >
      {/* Ciemne przyciemnienie tła */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Główna zawartość – max-w-[1440px] */}
      <div className="relative z-10 w-full max-w-[1440px] px-6 md:px-20 mx-auto grid md:grid-cols-2 gap-12 items-center py-20">
        <div className="space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Koduję <span className="text-green-400">pomysły</span> w konkretne<br />rozwiązania.
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Nie potrzebujesz zgody. Potrzebujesz działania. I aplikacji, która działa.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button asChild className="text-base px-6 py-4">
              <a href="#kontakt">Skontaktuj się</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 gap-6 text-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <StatBox number="12+" label="Projektów zrealizowanych" />
          <StatBox number="4" label="Stałych klientów" />
          <StatBox number="2" label="Wdrożenia w toku" />
          <StatBox number="3" label="Wyróżnienia" />
        </motion.div>
      </div>
    </section>
  )
}

function StatBox({ number, label }: { number: string, label: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
      <div className="text-3xl font-bold text-green-400">{number}</div>
      <div className="text-sm text-gray-300 mt-1">{label}</div>
    </div>
  )
}
