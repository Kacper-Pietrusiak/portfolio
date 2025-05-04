'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { FaChartLine, FaMicrosoft } from "react-icons/fa"
import { MdEmail, MdBuild, MdAutorenew } from "react-icons/md"

export default function AboutSection() {
  return (
    <section className="bg-white text-black py-24 px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 items-center gap-16 sm:gap-40 relative">
        {/* Lewa strona: zdjęcie + box */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Image
            src="/kacper.jpeg"
            alt="Kacper"
            width={600}
            height={600}
            className="rounded-2xl object-cover shadow-xl"
          />

          {/* Zielony box – absolute z responsywnym pozycjonowaniem */}
          <div
            className="bg-gradient-to-r from-emerald-500 to-lime-500 text-white p-6 rounded-2xl w-60 md:w-80 shadow-lg
            absolute top-[75%] left-1/2 -translate-x-1/2 md:top-auto md:bottom-[-100px] md:left-[-40px] md:translate-x-0 z-20
            text-center md:text-left"
          >
            <p className="text-sm text-white/80 mb-1">Ponad 2 lata</p>
            <h4 className="text-xl font-bold mb-4">Doświadczenia</h4>

            <div className="text-sm space-y-1 mb-4">
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <MdBuild /> Frontend i Backend
              </p>
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <MdAutorenew /> Automatyzacje
              </p>
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <FaMicrosoft /> Aplikacje Microsoft
              </p>
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <MdEmail /> pietrusiak02@gmail.com
              </p>
            </div>

            {/* Wewnętrzny box: Postępy */}
            <div
              className="bg-gradient-to-r from-emerald-500 to-lime-500 p-4 rounded-xl mt-4
              absolute right-[-50px] top-[40%] flex flex-col items-center w-24 mx-auto md:mx-0"
            >
              <FaChartLine />
              <p className="text-xs font-semibold">Postępy</p>
              <p className="text-[10px] text-white/70">+100 ulepszeń</p>
            </div>
          </div>
        </motion.div>

        {/* Prawa strona: tekst */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-20 sm:pt-0 space-y-6"
        >
          <h2 className="text-gray-500 uppercase tracking-widest text-sm font-medium">
            O mnie
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-green-600">KACPER</h3>
          <p className="text-gray-700 text-lg">
            Jestem programistą i pasjonatem technologii. Tworzę nowoczesne aplikacje webowe i uczę innych programowania oraz matematyki. Wierzę, że edukacja może być ciekawa i praktyczna.
          </p>
          <p className="text-gray-600">
            Na co dzień rozwijam się w technologiach webowych, automatyzuję procesy i tworzę narzędzia, które realnie pomagają ludziom i firmom.  
          </p>
          <Button asChild>
            <a href="#projects">Zobacz moje projekty</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
