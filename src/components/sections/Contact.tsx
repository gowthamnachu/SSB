'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  Loader2,
  Building2
} from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Samalkot, East Godavari', 'Andhra Pradesh, India']
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 87469 66999']
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['ssbsamalkot@gmail.com']
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed']
  },
]

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        alert('Failed to send message. Please try again or contact us directly.')
        console.error('Error:', data)
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('An error occurred. Please try again or call us at +91 87469 66999')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* CTA Banner - White Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-accent-offwhite border border-gray-100 rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden shadow-sm"
        >
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Image 
                src="/SSB_LOGO_Transp.png" 
                alt="SSB Constructions Logo" 
                width={60} 
                height={60}
                className="object-contain"
              />
              <h2 className="font-archivo text-3xl md:text-4xl text-gray-900">
                Ready to Build Your Vision?
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-6">
              Partner with SSB Constructions for quality, reliability, and excellence. 
              Let&apos;s discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+918746966999" className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">
                <Phone size={18} />
                Call Now
              </a>
              <a href="mailto:ssbsamalkot@gmail.com" className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors">
                <Mail size={18} />
                Email Us
              </a>
            </div>
          </div>
        </motion.div>

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
            Get In Touch
          </span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have a project in mind? Our team is ready to provide a detailed 
            consultation and competitive quote
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-hero rounded-2xl p-6 md:p-8 h-full">
              <h3 className="font-archivo text-2xl text-white mb-6">Get In Touch</h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 shrink-0 rounded-lg bg-white/10 
                                      flex items-center justify-center">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-white/70 text-sm">{detail}</p>
                        ))}
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Google Map - Hyderabad */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="aspect-video rounded-xl overflow-hidden mt-6"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160tried!2d78.24323!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SSB Constructions Location - Hyderabad"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-hero rounded-2xl p-6 md:p-8 h-full">
              <h3 className="font-archivo text-2xl text-white mb-2">
                Request a Quote
              </h3>
              <p className="text-white/70 mb-6">
                Fill out the form below and we&apos;ll get back to you within 24 hours
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 
                                  flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h4 className="font-archivo text-xl text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-white/70">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10
                                   focus:border-white/40 focus:ring-2 focus:ring-white/20 
                                   outline-none transition-all duration-200 text-white placeholder:text-white/50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10
                                   focus:border-white/40 focus:ring-2 focus:ring-white/20 
                                   outline-none transition-all duration-200 text-white placeholder:text-white/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10
                                   focus:border-white/40 focus:ring-2 focus:ring-white/20 
                                   outline-none transition-all duration-200 text-white placeholder:text-white/50"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10
                                   focus:border-white/40 focus:ring-2 focus:ring-white/20 
                                   outline-none transition-all duration-200 text-white"
                      >
                        <option value="" className="bg-hero text-white">Select a subject</option>
                        <option value="CC Roads" className="bg-hero text-white">CC Roads Project</option>
                        <option value="CC Drains" className="bg-hero text-white">CC Drains Project</option>
                        <option value="Building" className="bg-hero text-white">Building Construction</option>
                        <option value="Infrastructure" className="bg-hero text-white">Infrastructure Development</option>
                        <option value="Other" className="bg-hero text-white">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10
                                 focus:border-white/40 focus:ring-2 focus:ring-white/20 
                                 outline-none transition-all duration-200 resize-none text-white placeholder:text-white/50"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-white text-hero font-semibold rounded-xl
                               hover:bg-white/90 transition-colors duration-300
                               flex items-center justify-center gap-2
                               disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
