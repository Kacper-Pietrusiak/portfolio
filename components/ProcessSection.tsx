'use client'

import { FaLightbulb, FaTools, FaRocket } from 'react-icons/fa'
import Image from 'next/image'

export default function ProcessSection() {
  const steps = [
    {
      icon: <FaLightbulb size={32} />,
      title: 'Pomysł',
      desc: 'Rozmawiamy o Twoich potrzebach, analizuję cel projektu i dobieram najlepsze rozwiązania.',
    },
    {
      icon: <FaTools size={32} />,
      title: 'Realizacja',
      desc: 'Tworzę projekt graficzny, programuję i testuję – szybko i przejrzyście.',
    },
    {
      icon: <FaRocket size={32} />,
      title: 'Wdrożenie',
      desc: 'Wdrażam gotowe rozwiązanie, optymalizuję i automatyzuję, by działało jak najlepiej.',
    },
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Gradient tła + łuk */}
      <div className="absolute inset-0 -z-10 w-full">
        {/* Gradient */}
        <div className="w-screen h-full bg-gradient-to-b from-emerald-500 to-lime-500" />

        {/* Łuk */}
        <div className="absolute top-0 left-0 w-screen h-[160px] overflow-hidden">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#fff"
              d="M0,224C360,96,1080,96,1440,224L1440,0L0,0Z"
            />
          </svg>
        </div>
      </div>

      {/* Treść */}
      <div className="relative z-10 px-6 pt-40 pb-24 max-w-[1200px] mx-auto text-center space-y-16">
        
        {/* Ilustracja */}
        <div className="flex justify-center">
          <Image
            src="/proces.png" // <-- podmień jeśli masz inną ścieżkę
            alt="Proces"
            width={1000}
            height={1000}
            className="w-full max-w-[700px] h-auto"
          />
        </div>

        {/* Nagłówek i opis */}
        <div>
          <h2 className="text-white text-2xl font-semibold">Jak pracuję</h2>
          <p className="text-white mt-2 max-w-2xl mx-auto">
            Pracuję w sposób przejrzysty i uporządkowany. Każdy etap jest przemyślany i dopasowany do Twoich potrzeb.
          </p>
        </div>

        {/* Kroki */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition text-center flex flex-col items-center space-y-4"
            >
              <div className="text-green-600">{step.icon}</div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
