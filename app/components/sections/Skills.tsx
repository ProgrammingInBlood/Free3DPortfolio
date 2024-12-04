'use client';

import { motion } from 'framer-motion';
import { skillsSection } from '@/config';
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
      staggerChildren: 0.1
    }
  }
};

export default function Skills() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 xl:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16 xl:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 xl:mb-6 text-gradient">
            {skillsSection.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {skillsSection.subtitle}
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          {skillsSection.skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="mb-3" style={{ color: skill.color }}>
                {skill.icon && <skill.icon className="w-12 h-12" />}
              </div>
              <p className="text-white/60 text-sm text-center">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
