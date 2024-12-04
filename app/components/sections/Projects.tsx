'use client';

import { motion } from 'framer-motion';
import { projectsSection } from '@/config';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  return (
    <section id="work" className="py-12 sm:py-16 md:py-24 xl:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16 xl:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 xl:mb-6 text-gradient">
            {projectsSection.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {projectsSection.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 xl:gap-10 max-w-6xl mx-auto">
          {projectsSection.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-colors group"
            >
              {project.image && (
                <div className="mb-6 rounded-lg overflow-hidden relative aspect-video">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt || project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    priority={index === 0}
                  />
                </div>
              )}
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-white/70 text-sm sm:text-base mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-xs sm:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 text-sm sm:text-base">
                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    className="text-white hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    Live Demo 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    GitHub 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
