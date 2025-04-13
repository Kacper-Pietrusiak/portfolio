'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white px-6 py-10 w-screen">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">

        {/* Lewa strona: autor i rok */}
        <p className="text-white/70 text-center md:text-left">
          © {new Date().getFullYear()} Kacper Pietrusiak. Wszelkie prawa zastrzeżone.
        </p>

        {/* Linki / social media */}
        <div className="flex items-center gap-6">

          <a href="/KacperPietrusiakCV.pdf" download className="hover:text-green-400 transition">Pobierz CV</a>
          
          <a href="/polityka" className="hover:text-green-400 transition">Polityka prywatności</a>
          

          {/* Social media */}
          <a href="https://github.com/Kacper-Pietrusiak" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-green-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kacper-pietrusiak-b1626722a/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-green-400">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}
