'use client';

import { motion } from 'framer-motion';
import { contactConfig, siteConfig } from '@/config';
import { FiUser, FiMail, FiMessageSquare, FiSend, FiCheckCircle } from 'react-icons/fi';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm(contactConfig.formspreeId);

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 xl:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 xl:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 xl:mb-6 text-gradient">
            {contactConfig.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl text-white/80 leading-relaxed">
            {contactConfig.subtitle}
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-4 sm:space-y-6 xl:space-y-8"
        >
          {state.succeeded ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 p-8 rounded-lg text-center"
            >
              <FiCheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-white/80">
                Thank you for reaching out. I&apos;ll get back to you as soon as possible.
              </p>
            </motion.div>
          ) : (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm sm:text-base mb-2 flex items-center gap-2">
                    <FiUser className="w-4 h-4" />
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 text-sm sm:text-base"
                    required
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white text-sm sm:text-base mb-2 flex items-center gap-2">
                    <FiMail className="w-4 h-4" />
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 text-sm sm:text-base"
                    required
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-white text-sm sm:text-base mb-2 flex items-center gap-2">
                  <FiMessageSquare className="w-4 h-4" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 text-sm sm:text-base"
                  required
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <motion.button
                type="submit"
                disabled={state.submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm sm:text-base font-medium inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiSend className="w-4 h-4" />
                {state.submitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              <ValidationError 
                errors={state.errors}
                className="text-red-500 text-sm mt-2"
              />
            </div>
          )}
        </motion.form>

        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm sm:text-base mb-2">Or reach out directly:</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-white hover:text-primary transition-colors inline-flex items-center gap-2 text-base sm:text-lg group"
          >
            <FiMail className="w-5 h-5" />
            {siteConfig.email}
            <FiSend className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
