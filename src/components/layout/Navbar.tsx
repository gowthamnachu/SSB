'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#why-us', label: 'Why Choose Us' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    // Small delay to allow mobile menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        const navbarHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home')
            }}
            className="flex items-center gap-1.5 sm:gap-2"
          >
            <div className={`font-archivo text-3xl sm:text-4xl lg:text-5xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              SSB
            </div>
            <div className={`flex flex-col text-[10px] sm:text-xs lg:text-sm font-medium leading-tight transition-colors duration-300 ${
              isScrolled ? 'text-gray-600' : 'text-white/80'
            }`}>
              <span>Constructions</span>
              <span>& Roadways</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className={`text-sm font-medium transition-colors duration-300 hover:opacity-100 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-primary'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact')
              }}
              className={`px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-300 ${
                isScrolled
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'bg-white text-hero hover:bg-white/90'
              }`}
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 z-50 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden shadow-lg ${
              isScrolled 
                ? 'bg-white border-t' 
                : 'bg-hero border-t border-white/10'
            }`}
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`block w-full text-left py-3 font-medium transition-colors ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-primary border-b border-gray-100' 
                      : 'text-white/90 hover:text-white border-b border-white/10'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                type="button"
                onClick={() => handleNavClick('#contact')}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className={`block w-full text-center py-3 rounded-md font-medium transition-colors ${
                  isScrolled 
                    ? 'bg-primary text-white hover:bg-primary-dark' 
                    : 'bg-white text-hero hover:bg-white/90'
                }`}
              >
                Get Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
