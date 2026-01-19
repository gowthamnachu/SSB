'use client'

import { motion } from 'framer-motion'
import { 
  Target, 
  Shield, 
  Award, 
  Users,
  CheckCircle2,
  TrendingUp,
  FileCheck
} from 'lucide-react'

const highlights = [
  'Government & Private Sector Projects',
  'ISO Quality Standards',
  'Skilled Engineering Team',
  'Projects Across India',
]

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To deliver world-class infrastructure that stands the test of time, contributing to the nation\'s growth and development.'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Every project undergoes rigorous quality checks to ensure compliance with industry standards and client expectations.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Recognized for delivering projects that exceed expectations in quality, safety, and timely completion.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our team of experienced engineers, architects, and skilled workers bring expertise to every project.'
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-accent-offwhite">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full 
                            text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="section-title mb-6">
              Building Trust Through
              <span className="text-primary"> Excellence</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              SSB Constructions & Roadways has been a cornerstone of infrastructure 
              development for over a decade. Founded with a vision to build roads 
              that connect communities and structures that stand the test of time, 
              we have grown into a trusted name in the construction industry across India.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              With over ₹80 Crores worth of completed projects spanning multiple states, 
              our portfolio speaks to our commitment to quality and our capability to 
              handle projects of any scale. From government contracts to private developments, 
              we bring the same level of dedication and expertise to every endeavor nationwide.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={20} className="text-primary shrink-0" />
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Stats Cards */}
              <div className="space-y-4">
                {/* Years of Excellence */}
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary via-primary-dark to-hero
                             flex flex-col items-center justify-center p-6 text-white text-center
                             shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
                  <div className="relative z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="font-archivo text-5xl lg:text-6xl mb-3 font-bold"
                    >
                      11+
                    </motion.div>
                    <div className="text-base font-medium opacity-90">Years of Excellence</div>
                    <div className="mt-2 text-xs opacity-70">Since 2014</div>
                  </div>
                </motion.div>
                
                {/* Project Value */}
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square rounded-2xl bg-white shadow-lg hover:shadow-xl
                             flex flex-col items-center justify-center p-6 text-center
                             border border-gray-100 transition-all relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent 
                                 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 
                                   flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <TrendingUp size={24} className="text-primary" />
                    </div>
                    <div className="font-archivo text-3xl font-bold text-gray-900 mb-1">₹80Cr+</div>
                    <div className="text-sm text-gray-600 font-medium">Total Project Value</div>
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-4 pt-8">
                {/* Client Satisfaction */}
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square rounded-2xl bg-white shadow-lg hover:shadow-xl
                             flex flex-col items-center justify-center p-6 text-center
                             border border-gray-100 transition-all relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent 
                                 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-green-100 
                                   flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <FileCheck size={24} className="text-green-600" />
                    </div>
                    <div className="font-archivo text-3xl font-bold text-gray-900 mb-1">100%</div>
                    <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
                  </div>
                </motion.div>
                
                {/* Projects Delivered */}
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-accent-blue via-primary to-primary-dark
                             flex flex-col items-center justify-center p-6 text-white text-center
                             shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)]" />
                  <div className="relative z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="font-archivo text-5xl lg:text-6xl mb-3 font-bold"
                    >
                      180+
                    </motion.div>
                    <div className="text-base font-medium opacity-90">Projects Delivered</div>
                    <div className="mt-2 text-xs opacity-70">Nationwide Success</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 
                         flex items-center gap-4 border border-gray-100 cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-400 to-green-600 
                             flex items-center justify-center shadow-lg">
                <Award size={28} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-base">Certified Quality</div>
                <div className="text-sm text-gray-600 font-medium">ISO Standards</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-12 md:mb-16">
            <h3 className="font-archivo text-3xl md:text-4xl text-gray-900 mb-4">
              What Drives Us
            </h3>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Our core values shape every decision we make and every project we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-8 md:p-10"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-2xl bg-primary/10 
                                  flex items-center justify-center">
                    <Icon size={40} className="md:w-12 md:h-12 text-primary" />
                  </div>
                  <h4 className="font-archivo text-xl md:text-2xl text-gray-900 mb-3 font-semibold">{value.title}</h4>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
