'use client';

import { heroSection } from '@/config';
import dynamic from 'next/dynamic';
import { HiArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';

const Scene3D = dynamic(() => import('../Scene3D'), {
  ssr: false,
  loading: () => null
});

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

export default function Hero() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="min-h-[100svh] w-full relative pt-20 md:pt-0">
      <div className="container mx-auto h-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100svh] gap-8 items-center">
          {/* Content */}
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="order-2 lg:order-1 py-12 md:py-0"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              {heroSection.title}
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-white/80 text-base sm:text-lg md:text-xl max-w-xl mb-8"
            >
              {heroSection.subtitle}
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a 
                href={heroSection.cta.primary.href}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors text-center inline-flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {heroSection.cta.primary.text}
                <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a 
                href={heroSection.cta.secondary.href}
                className="px-6 py-3 border border-white/20 hover:bg-white/10 text-white rounded-full transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {heroSection.cta.secondary.text}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 3D Scene */}
          <motion.div 
            className="order-1 lg:order-2 h-[250px] sm:h-[350px] lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Scene3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
