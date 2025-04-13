'use client'

import Image from 'next/image'

export default function TechnologiesSection() {
  const logos = [
    { src: '/logos/azure.svg', alt: 'Azure' },
    { src: '/logos/docker.svg', alt: 'Docker' },
    { src: '/logos/git.svg', alt: 'git' },
    { src: '/logos/microsoft.svg', alt: 'Microsoft' },
    { src: '/logos/nextjs.svg', alt: 'Next.js' },
    { src: '/logos/nodejs.svg', alt: 'Node.js' },
    { src: '/logos/sanity.svg', alt: 'sanity' },
    { src: '/logos/stripe.svg', alt: 'stripe' },
  ]

  return (
    <section className="bg-gray-700 py-20 px-6 text-white">
      <div className="max-w-[1200px] mx-auto text-center space-y-12">
        <h2 className="text-2xl font-bold text-green-500">Technologie, z których korzystam</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="object-contain hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
