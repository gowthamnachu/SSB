'use client'

import { motion } from 'framer-motion'
import { 
  Clock, 
  Award, 
  Users, 
  Shield, 
  Truck, 
  ThumbsUp,
  CheckCircle
} from 'lucide-react'

interface Feature {
  icon: React.ElementType
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Clock,
    title: '11+ Years Experience',
    description: 'Over a decade of proven expertise in construction and infrastructure development'
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: '180+ successfully completed projects with 100% client satisfaction'
  },
  {
    icon: Users,
    title: 'Skilled Workforce',
    description: 'Team of experienced engineers, architects, and trained professionals'
  },
  {
    icon: Shield,
    title: 'Quality & Safety',
    description: 'ISO certified processes ensuring highest quality and safety standards'
  },
  {
    icon: Truck,
    title: 'Modern Equipment',
    description: 'State-of-the-art machinery and technology for efficient execution'
  },
  {
    icon: ThumbsUp,
    title: 'On-Time Delivery',
    description: 'Committed to completing projects within agreed timelines'
  },
]

const achievements = [
  'Government Approved Contractor',
  'ISO 9001:2015 Certified',
  'Zero Safety Incidents Record',
  'Environmental Compliance',
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-gradient-to-b from-accent-light to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232e5e7f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full 
                          text-sm font-semibold mb-4">
            Why SSB
          </span>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Partner with a construction company that delivers excellence, 
            reliability, and unmatched expertise
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 h-full border border-gray-100
                               hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 shrink-0 rounded-xl bg-primary/10 
                                    flex items-center justify-center
                                    group-hover:bg-primary group-hover:scale-110 
                                    transition-all duration-300">
                      <Icon 
                        size={28} 
                        className="text-primary group-hover:text-white transition-colors" 
                      />
                    </div>
                    <div>
                      <h3 className="font-archivo text-lg text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Achievements Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-hero rounded-3xl p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h3 className="font-archivo text-2xl md:text-3xl text-white mb-4">
                Trusted by Government & Private Sector
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Our commitment to quality and timely delivery has earned us the trust 
                of both government agencies and private enterprises across the region.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={18} className="text-green-400 shrink-0" />
                    <span className="text-white/90 text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '₹80Cr+', label: 'Project Value' },
                { value: '180+', label: 'Projects' },
                { value: '100%', label: 'Success Rate' },
                { value: '11+', label: 'Years' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <div className="font-archivo text-2xl md:text-3xl text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
