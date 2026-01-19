'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Route, 
  Building2, 
  Clock, 
  Trophy, 
  IndianRupee,
  Waves
} from 'lucide-react'

interface MetricProps {
  icon: React.ElementType
  value: number
  suffix: string
  label: string
  prefix?: string
  delay: number
}

const metrics: Omit<MetricProps, 'delay'>[] = [
  { icon: Route, value: 7000, suffix: ' meters', label: 'CC Roads', prefix: '' },
  { icon: Waves, value: 15000, suffix: ' meters', label: 'CC Drains', prefix: '' },
  { icon: Building2, value: 80000, suffix: ' sq.ft', label: 'Buildings', prefix: '' },
  { icon: Clock, value: 11, suffix: '+ Years', label: 'Experience', prefix: '' },
  { icon: Trophy, value: 180, suffix: '+', label: 'Projects Completed', prefix: '' },
  { icon: IndianRupee, value: 80, suffix: '+ Crores', label: 'Project Value', prefix: '₹' },
]

function AnimatedCounter({ 
  icon: Icon, 
  value, 
  suffix, 
  label, 
  prefix = '', 
  delay 
}: MetricProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += stepValue
        if (current >= value) {
          setCount(value)
          clearInterval(interval)
        } else {
          setCount(Math.floor(current))
        }
      }, stepDuration)
      
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [isInView, value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="group"
    >
      <div className="card text-center h-full hover:border-primary/20 border border-transparent">
        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 
                        flex items-center justify-center
                        group-hover:bg-primary group-hover:scale-110 
                        transition-all duration-300">
          <Icon 
            size={28} 
            className="text-primary group-hover:text-white transition-colors duration-300" 
          />
        </div>
        <div className="font-archivo text-3xl md:text-4xl text-gray-900 mb-2">
          {prefix}{count.toLocaleString()}{suffix}
        </div>
        <div className="text-gray-600 font-medium">{label}</div>
      </div>
    </motion.div>
  )
}

export default function Metrics() {
  return (
    <section className="section-padding bg-accent-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
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
            Our Impact
          </span>
          <h2 className="section-title">Building by the Numbers</h2>
          <p className="section-subtitle">
            Over a decade of delivering infrastructure excellence, one project at a time
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <AnimatedCounter
              key={metric.label}
              {...metric}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
