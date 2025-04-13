'use client'

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function ContactSection() {
  return (
    <section className=" py-24 px-6">
      <div className="max-w-[1200px] mx-auto text-center space-y-10">
        
        <h2 className="text-3xl font-bold text-green-600">Skontaktuj się ze mną</h2>
        <p className="max-w-xl mx-auto ">
          Masz pytanie, pomysł na współpracę lub chcesz zbudować coś razem? Napisz – odpowiem tak szybko, jak to możliwe.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-left">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl" />
            <span>pietrusiak02@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-2xl" />
            <span>+48 661 355 309</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-2xl" />
            <span>okolice Bielsko-Biała / zdalnie</span>
          </div>
        </div>

        <a
          href="mailto:pietrusiak02@gmail.com"
          className="inline-block bg-white text-emerald-600 font-semibold px-6 py-3 rounded-xl border border-gray-200 shadow-xl hover:bg-gray-100 transition"
        >
          Napisz wiadomość
        </a>
      </div>
    </section>
  )
}
