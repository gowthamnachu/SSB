'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, ChevronDown } from 'lucide-react'
import Image from 'next/image'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.03,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-start md:items-center overflow-hidden">
      {/* Background Image using Next.js Image for better mobile handling */}
      <div className="absolute inset-0">
        <Image
          src="/hero_background.png"
          alt="SSB Constructions Hero Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      
      {/* Animated gradient overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-hero/95 via-hero/85 to-hero/75" 
      />
      
      {/* Animated grid pattern overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating accent shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-white blur-3xl"
      />

      {/* Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom relative z-10 pt-24 sm:pt-28 md:pt-20 pb-20 sm:pb-0 flex flex-col justify-between min-h-[calc(100vh-6rem)] md:min-h-0 md:block"
      >
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md 
                       rounded-full text-white/80 text-[10px] sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8 border border-white/10"
          >
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-400"></span>
            </span>
            Since 2014
          </motion.div>

          {/* Headline with letter animation */}
          <div className="font-archivo text-[2.5rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white 
                       leading-[1.2] sm:leading-[1.2] md:leading-[1.1] mb-4 sm:mb-6 md:mb-8">
            <div className="overflow-visible pb-1 sm:pb-0">
              <AnimatedText text="Building Roads." />
            </div>
            <div className="overflow-visible pb-1 sm:pb-0">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="text-primary-light inline-block"
              >
                Creating
              </motion.span>
            </div>
            <div className="overflow-visible pb-1 sm:pb-0">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                className="text-primary-light inline-block"
              >
                Infrastructure.
              </motion.span>
            </div>
            {/* Powering - separate line on mobile */}
            <div className="overflow-visible pb-1 sm:pb-0 block sm:hidden">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                className="inline-block"
              >
                Powering
              </motion.span>
            </div>
            {/* Progress - separate line on mobile */}
            <div className="overflow-visible pb-1 sm:pb-0 block sm:hidden">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                className="inline-block"
              >
                Progress.
              </motion.span>
            </div>
            {/* Powering Progress - single line on desktop */}
            <div className="overflow-visible pb-1 sm:pb-0 hidden sm:block">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                className="inline-block"
              >
                Powering Progress.
              </motion.span>
            </div>
          </div>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-lg md:text-xl text-white/70 max-w-2xl mb-6 sm:mb-8 md:mb-10 leading-relaxed mt-6 sm:mt-0"
          >
            <span className="text-white font-medium text-base sm:text-lg md:text-xl">SSB Constructions & Roadways</span> delivers 
            excellence in infrastructure development. From CC Roads to modern buildings, 
            we transform visions into reality with precision and dedication.
          </motion.p>
          
          {/* Mobile spacing below SSB text */}
          <div className="h-10 sm:h-0"></div>
        </div>

        {/* CTA Buttons - moved outside max-w-5xl for mobile positioning */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto sm:mt-0 mb-16 md:mb-20 relative z-20"
        >
            <motion.button
              onClick={() => handleNavClick('#projects')}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(46, 94, 127, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-xl
                         overflow-hidden transition-all duration-300 flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                View Projects
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-primary-dark"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <motion.button
              onClick={() => handleNavClick('#contact')}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl
                         backdrop-blur-sm hover:border-white/50 transition-all duration-300 
                         flex items-center justify-center"
            >
              <Phone size={18} className="mr-2 group-hover:rotate-12 transition-transform" />
              Contact Us
            </motion.button>
          </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
