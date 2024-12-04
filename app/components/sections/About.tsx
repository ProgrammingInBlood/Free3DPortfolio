'use client';

import { aboutSection } from '@/config';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  const { ref } = useScrollAnimation();

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 xl:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center"
        >
          {/* Text Content */}
          <motion.div variants={fadeInUp} className="w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 xl:mb-8 text-gradient">
              {aboutSection.title}
            </h2>
            <div className="text-sm sm:text-base md:text-lg xl:text-xl text-white/80 space-y-3 sm:space-y-4 xl:space-y-6 leading-relaxed">
              {aboutSection.description}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeInUp} className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 sm:gap-4 xl:gap-6">
              {aboutSection.stats.map(stat => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
