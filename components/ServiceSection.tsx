'use client'

import { FaLaptopCode, FaBuilding, FaShoppingCart, FaNewspaper, FaProjectDiagram, FaLightbulb } from 'react-icons/fa'

export default function ServicesSection() {
  const services = [
    {
      icon: <FaLaptopCode size={40} />,
      title: 'Sales Landing',
      desc: 'Tworzę nowoczesne landing page, które skutecznie konwertują odwiedzających w klientów.',
    },
    {
      icon: <FaBuilding size={40} />,
      title: 'Corporate site',
      desc: 'Buduję firmowe strony www – przejrzyste, szybkie i zgodne z celami biznesowymi.',
    },
    {
      icon: <FaShoppingCart size={40} />,
      title: 'E-Commerce',
      desc: 'Tworzę sklepy internetowe nastawione na sprzedaż, zoptymalizowane pod UX i SEO.',
    },
    {
      icon: <FaNewspaper size={40} />,
      title: 'News portal',
      desc: 'Projektuję portale z dużą ilością treści – responsywne, skalowalne i łatwe w obsłudze.',
    },
    {
      icon: <FaProjectDiagram size={40} />,
      title: 'CRM, ERP, automatyzacje',
      desc: 'Integruję rozwiązania usprawniające zarządzanie firmą – automatyzacje, Power Platform, API.',
    },
    {
      icon: <FaLightbulb size={40} />,
      title: 'Indywidualne rozwiązania',
      desc: 'Realizuję niestandardowe projekty – od pomysłu po wdrożenie, z nastawieniem na efekt.',
    },
  ]

  return (
    <section className="py-24 px-6 bg-white text-center">
      <div className="max-w-[1200px] mx-auto space-y-12">
        <div>
          <h2 className="text-green-600 text-3xl font-bold">Co potrafię</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Oferuję kompleksowe usługi programistyczne i projektowe – od prostych stron po zaawansowane systemy.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="text-green-600">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-600 text-sm text-center">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
