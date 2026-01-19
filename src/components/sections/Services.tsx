'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Route, 
  Waves, 
  Building2, 
  Landmark,
  ArrowRight
} from 'lucide-react'

interface Service {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  image?: string
}

const services: Service[] = [
  {
    icon: Route,
    title: 'CC Roads',
    description: 'High-quality cement concrete roads built to withstand heavy traffic and extreme weather conditions. Our roads are engineered for durability and longevity.',
    features: ['Reinforced concrete', 'Heavy load capacity', 'Weather resistant', 'Minimal maintenance'],
    image: '/CC_roads.png'
  },
  {
    icon: Waves,
    title: 'CC Drains',
    description: 'Efficient drainage systems designed for optimal water flow management. Our CC drains prevent waterlogging and protect infrastructure.',
    features: ['Optimal flow design', 'Anti-corrosion', 'Easy maintenance', 'Long lifespan'],
    image: '/CC_drains.png'
  },
  {
    icon: Building2,
    title: 'Building Construction',
    description: 'From residential complexes to commercial buildings, we deliver construction excellence with modern techniques and premium materials.',
    features: ['Modern architecture', 'Quality materials', 'Timely delivery', 'Cost-effective'],
    image: '/building_construction.png'
  },
  {
    icon: Landmark,
    title: 'Infrastructure Development',
    description: 'Comprehensive infrastructure solutions including bridges, culverts, and public amenities that serve communities for generations.',
    features: ['Bridges & culverts', 'Public amenities', 'Urban development', 'Sustainable design'],
    image: '/infra_construction.png'
  },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full border border-white/20 hover:border-primary-light/50 
                      relative overflow-hidden rounded-lg md:rounded-xl bg-hero/70 backdrop-blur-lg 
                      shadow-lg md:shadow-xl hover:shadow-2xl md:hover:scale-[1.02] transition-all duration-500">
        {/* Background Image for CC Roads and CC Drains */}
        {service.image && (
          <>
            <div className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            {/* Fixed dark blue overlay matching project cards */}
            <div className="absolute inset-0 bg-hero/80" />
          </>
        )}
        
        <div className="relative z-10 p-4 sm:p-5 md:p-8">
          {/* Icon */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl 
                          bg-white/15 backdrop-blur-md flex items-center justify-center
                          group-hover:bg-primary-light
                          transition-all duration-500 mb-3 sm:mb-4 md:mb-5 border border-white/30 shadow-lg">
            <Icon 
              size={20} 
              className="sm:w-6 sm:h-6 md:w-[26px] md:h-[26px] text-white group-hover:text-hero transition-colors duration-300" 
            />
          </div>

          {/* Title */}
          <h3 className="font-archivo text-lg sm:text-xl md:text-2xl text-white mb-2 sm:mb-3 font-semibold">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-white/90 mb-3 sm:mb-4 md:mb-5 leading-relaxed text-xs sm:text-sm">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-1.5 sm:space-y-2 md:space-y-2.5 mb-0">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/75">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary-light shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-primary/10 text-primary rounded-full 
                          text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            What We Do
          </span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive construction and infrastructure solutions tailored to meet 
            the highest standards of quality and safety
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-6 sm:mt-8"
        >
          <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
            Need a custom solution for your infrastructure project?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
          >
            Discuss Your Project
            <ArrowRight size={20} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
