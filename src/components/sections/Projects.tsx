'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  category: string
  description: string
  value: string
  location: string
  image: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'GTS (Garbage Transfer Station)',
    category: 'Infrastructure',
    description: 'Construction of Garbage Transfer Station with modern waste management facilities',
    value: '₹1.5 Crores',
    location: 'Elamanchili',
    image: '/GTS_image.png'
  },
  {
    id: 2,
    title: 'CC Roads & Drains Development',
    category: 'CC Roads',
    description: 'Comprehensive CC roads and drainage network development project',
    value: '₹3 Crores',
    location: 'Samalkot',
    image: '/project_cc_road.png'
  },
  {
    id: 3,
    title: 'CC Roads & Drains Project',
    category: 'CC Drains',
    description: 'CC roads and drainage infrastructure development for urban connectivity',
    value: '₹2 Crores',
    location: 'Peddapuram',
    image: '/project_cc_road_1.png'
  },
  {
    id: 4,
    title: 'Buildings, CC Roads & Drains',
    category: 'Building',
    description: 'Complete infrastructure development including buildings, CC roads, and CC drains',
    value: '₹4 Crores',
    location: 'Yeleswaram',
    image: '/project_cc_road_2.png'
  },
  {
    id: 5,
    title: 'Buildings & CC Roads',
    category: 'Building',
    description: 'Construction of buildings and CC roads infrastructure',
    value: '₹1 Crore',
    location: 'Tuni',
    image: '/project_cc_road_3.png'
  },
]

const categories = ['All', 'CC Roads', 'CC Drains', 'Building', 'Infrastructure']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full 
                          text-sm font-semibold mb-4">
            Our Portfolio
          </span>
          <h2 className="section-title">Popular Projects</h2>
          <p className="section-subtitle">
            A showcase of our completed infrastructure and construction projects 
            across various sectors
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
                  {/* Project Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm 
                                  rounded-full text-xs font-semibold text-gray-800 z-10">
                    {project.category}
                  </div>

                  {/* Dark Blue Overlay - Always Visible */}
                  <div className="absolute inset-0 bg-hero/80 
                                  flex flex-col justify-end p-6">
                    <h3 className="font-archivo text-xl text-white mb-2">{project.title}</h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">{project.location}</span>
                      <span className="text-primary-light font-semibold">{project.value}</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <ExternalLink size={20} className="text-white/80" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 p-6 bg-hero rounded-2xl"
        >
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: '180+', label: 'Projects Completed' },
              { value: '₹80Cr+', label: 'Total Project Value' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={stat.label}>
                <div className="font-archivo text-2xl md:text-3xl text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 
                       flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-lg w-full overflow-hidden"
            >
              {/* Modal Header Image */}
              <div className="aspect-video bg-gradient-to-br from-primary to-hero relative overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm 
                             rounded-full flex items-center justify-center text-white
                             hover:bg-white/30 transition-colors z-10"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 rounded-full 
                                text-xs font-semibold text-gray-800 z-10">
                  {selectedProject.category}
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <h3 className="font-archivo text-2xl text-gray-900 mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="text-sm text-gray-500 mb-1">Project Value</div>
                    <div className="font-semibold text-gray-900">{selectedProject.value}</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="text-sm text-gray-500 mb-1">Location</div>
                    <div className="font-semibold text-gray-900">{selectedProject.location}</div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-3 bg-primary text-white rounded-xl font-medium
                             hover:bg-primary-dark transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
