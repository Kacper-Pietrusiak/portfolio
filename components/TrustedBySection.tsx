'use client'

import Image from "next/image"

const logos = [
  { src: "/logos/kontakt-simon-logo.png", alt: "Kontakt-Simon", height: 80, width: 160 },
  { src: "/logos/hellcold_bim_pionowe_ciemne_tlo.png", alt: "Hellcold", height: 80, width: 160 },
]

export default function TrustedBySection() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6 md:px-20 md:mt-10">
      <div className="max-w-[1440px] mx-auto text-center space-y-6">
        <h2 className="text-green-500 text-2xl font-semibold">Współpracuję z</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Zaufanie i zaangażowanie to podstawa — miałem okazję działać w ekosystemach największych firm i technologii.
        </p>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-12">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain opacity-90 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
