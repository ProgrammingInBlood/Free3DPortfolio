'use client';

import { footerConfig, siteConfig } from '@/config';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

export default function Footer() {
  const socialLinks = [
    {
      platform: 'GitHub',
      href: siteConfig.socials.github,
      icon: <FiGithub className="w-6 h-6" />
    },
    {
      platform: 'LinkedIn',
      href: siteConfig.socials.linkedin,
      icon: <FiLinkedin className="w-6 h-6" />
    },
    {
      platform: 'Twitter',
      href: siteConfig.socials.twitter,
      icon: <FiTwitter className="w-6 h-6" />
    },
    {
      platform: 'Email',
      href: `mailto:${siteConfig.email}`,
      icon: <FiMail className="w-6 h-6" />
    }
  ];

  return (
    <footer className="py-8 sm:py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-white hover:text-primary transition-colors">
              {siteConfig.author}
            </Link>
            <p className="mt-2 text-white/60 text-sm sm:text-base">
              {footerConfig.copyright}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {footerConfig.links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors text-sm sm:text-base"
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4 sm:gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                aria-label={link.platform}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
