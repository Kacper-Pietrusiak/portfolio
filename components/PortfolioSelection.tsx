'use client'

import Image from "next/image"

const projects = [
  {
    image: "/carmello.png",
    client: "Karmello Chocolatier",
    title: "Karmello",
    desc: "Konfigurator do tworzenia zestawów czekoladek",
    link: "https://karmello.pl",
  },
  {
    image: "/skrypty.png",
    client: "All",
    title: "Skrypty",
    desc: "Tworzenie nowoczesnych i innowacyjcnych skryptów na potrzeby klienta.",
  },
  {
    image: "/hellcold.png",
    client: "HellCold sp z o.o.",
    title: "Hellcold.pl",
    desc: "Platforma dla hellcold z wbudowanym skelpem i blogiem.",
    link: "https://hellcold.pl",
  },
 
]

export default function PortfolioSection() {
  return (
    <section className="bg-white py-24 px-6" id="projects">
      <div className="max-w-[1000px] mx-auto space-y-10">
        {/* Nagłówek */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-green-600 text-2xl font-semibold">Moje Projekty</h2>
          <p className="text-gray-600 mt-2">
            Każdy projekt to coś unikalnego. Dbam o to, by rozwiązania były przemyślane, czytelne i skuteczne.
          </p>
        </div>

        {/* Karty projektów */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition cursor-pointer"
              onClick={() => project.link ? window.open(project.link, '_blank') : null}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 space-y-1">
                <p className="text-sm text-gray-500">{project.client}</p>
                <h3 className="text-base font-bold">{project.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
