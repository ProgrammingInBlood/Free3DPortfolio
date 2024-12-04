import { StaticImageData } from 'next/image';
import { Vector3, Euler } from 'three';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiThreedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiDocker,
  SiAwsamplify,
  SiRedux
} from 'react-icons/si';
import { IconType } from 'react-icons';

// Type Definitions
export interface Project {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: {
    src: string;
    alt?: string;
  };
}

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface SectionConfig {
  position: Vector3;
  rotation: Euler;
  scale: Vector3;
  cameraPosition: Vector3;
  animation: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface NavigationLink {
  text: string;
  href: string;
}

// Site Configuration
export const siteConfig = {
  title: 'Portfolio | Creative Developer',
  description: 'A creative developer portfolio showcasing innovative projects and skills',
  author: 'Your Name',
  email: 'your.email@example.com',
  location: 'City, Country',
  socials: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  },
} as const;

// Theme Configuration
export const themeConfig = {
  colors: {
    primary: '#3B82F6',
    secondary: '#10B981',
    accent: '#8B5CF6',
    background: '#000000',
    text: '#FFFFFF',
  },
  gradients: {
    primary: 'linear-gradient(to right, #3B82F6, #10B981)',
    secondary: 'linear-gradient(to right, #8B5CF6, #EC4899)',
  },
} as const;

// Hero Section
export const heroSection = {
  title: 'Creative Developer',
  subtitle: 'Crafting immersive digital experiences through code and creativity',
  cta: {
    primary: {
      text: 'View Work',
      href: '#work',
    },
    secondary: {
      text: 'Contact',
      href: '#contact',
    },
  },
} as const;

// About Section
export const aboutSection = {
  title: 'About Me',
  description: 'I am a passionate developer with a keen eye for design and a love for creating seamless user experiences. With expertise in modern web technologies, I bring ideas to life through clean code and creative solutions.',
  stats: [
    {
      value: '5+',
      label: 'Years Experience'
    },
    {
      value: '50+',
      label: 'Projects'
    },
    {
      value: '30+',
      label: 'Happy Clients'
    },
    {
      value: '100%',
      label: 'Satisfaction'
    }
  ] satisfies Stat[],
  experience: [
    {
      title: 'Senior Frontend Developer',
      company: 'Company Name',
      period: '2022 - Present',
      description: 'Leading frontend development and implementing modern web solutions.',
    },
    {
      title: 'Web Developer',
      company: 'Previous Company',
      period: '2020 - 2022',
      description: 'Developed and maintained client websites and web applications.',
    },
  ] satisfies Experience[],
} as const;

// Skills Section
export const skillsSection = {
  title: "Skills & Technologies",
  subtitle: "Technologies I've been working with recently",
  skills: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Three.js", icon: SiThreedotjs, color: "#FFFFFF" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "AWS", icon: SiAwsamplify, color: "#FF9900" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" }
  ] satisfies Skill[],
} as const;

// Projects Section
export const projectsSection = {
  title: 'My Projects',
  subtitle: 'A showcase of innovative web applications and creative solutions',
  projects: [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio showcasing my skills and projects',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      demoUrl: 'https://your-portfolio-demo.com',
      githubUrl: 'https://github.com/yourusername/portfolio',
      image: {
        src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
        alt: 'Portfolio Website Screenshot'
      }
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online shopping platform with real-time inventory',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
      demoUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/yourusername/ecommerce',
      image: {
        src: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
        alt: 'E-commerce Platform Screenshot'
      }
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application powered by artificial intelligence',
      tags: ['Python', 'TensorFlow', 'WebSocket', 'React'],
      demoUrl: 'https://ai-chat-demo.com',
      githubUrl: 'https://github.com/yourusername/ai-chat',
      image: {
        src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
        alt: 'AI Chat Application Screenshot'
      }
    }
  ] satisfies Project[],
} as const;

// Contact Form Configuration
export const contactConfig = {
  title: "Let's Connect",
  subtitle: "Have a project in mind or want to discuss opportunities? Feel free to reach out!",
  formspreeId: 'YOUR_FORMSPREE_ID', // Replace with your Formspree form ID
  successMessage: 'Thank you for reaching out. I\'ll get back to you as soon as possible.',
  fields: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      required: true,
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    },
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
  },
} as const;

// Footer Configuration
export const footerConfig = {
  copyright: ` ${new Date().getFullYear()} ${siteConfig.author}. All rights reserved.`,
  links: [
    { text: 'Privacy Policy', href: '/privacy' },
    { text: 'Terms of Service', href: '/terms' },
    { text: 'Sitemap', href: '/sitemap.xml' },
  ] satisfies NavigationLink[],
} as const;

// Navigation Configuration
export const navigationConfig = {
  logo: siteConfig.author,
  links: [
    { text: 'About', href: '#about' },
    { text: 'Skills', href: '#skills' },
    { text: 'Work', href: '#work' },
    { text: 'Contact', href: '#contact' },
  ] satisfies NavigationLink[],
  mobileMenuBreakpoint: 768, // in pixels
} as const;

// 3D Scene Configuration
export const scene3DConfig = {
  camera: {
    fov: 45,
    near: 0.1,
    far: 1000,
    position: { x: 0, y: 1.8, z: 4 },
  },
  controls: {
    minDistance: 2.5,
    maxDistance: 7,
    autoRotateSpeed: 1,
    dampingFactor: 0.05,
    target: { x: 0, y: 0.5, z: 0 },
  },
  lighting: {
    ambient: {
      intensity: 0.5,
      color: '#ffffff',
    },
    directional: {
      intensity: 1,
      color: '#ffffff',
      position: { x: 5, y: 5, z: 5 },
    },
  },
  background: '#111111',
  techIcons: [
    { Icon: SiReact, color: '#61DAFB' },
    { Icon: SiNextdotjs, color: '#ffffff' },
    { Icon: SiTypescript, color: '#3178C6' },
    { Icon: SiJavascript, color: '#F7DF1E' },
    { Icon: SiThreedotjs, color: '#ffffff' },
    { Icon: SiTailwindcss, color: '#06B6D4' },
  ] as const,
} as const;

// Animation Configuration
export const animationConfig = {
  scroll: {
    threshold: 0.1,
    once: true,
  },
  transition: {
    duration: 0.6,
    ease: 'easeOut',
  },
  stagger: {
    children: 0.1,
  },
} as const;
