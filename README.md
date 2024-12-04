# 🚀 Next.js Portfolio with 3D Elements

A modern, interactive portfolio website built with Next.js 14, featuring a stunning 3D scene, smooth animations, and responsive design. Create your own professional portfolio in just 5 minutes by customizing the configuration!

## ⚡ Quick Start Guide (5 Minutes to Your Portfolio)

1. **Clone & Install (1 minute)**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   npm install
   ```

2. **Customize Configuration (3 minutes)**
   - Open `/config.ts`
   - Update your personal information:
     ```typescript
     export const siteConfig = {
       title: 'Your Name | Portfolio',
       description: 'Your portfolio description',
       author: 'Your Name',
       email: 'your.email@example.com',
       socials: {
         github: 'your-github',
         linkedin: 'your-linkedin',
         twitter: 'your-twitter'
       }
     };
     ```
   - Add your projects, skills, and experience
   - Customize the 3D scene icons and colors

3. **Deploy (1 minute)**
   - Push to GitHub
   - Deploy on Vercel with one click
   - Your portfolio is live! 🎉

## ✨ Key Features

- 🎮 Interactive 3D Scene with Three.js
  - Floating tech stack icons
  - Customizable through configuration
  - Smooth animations
- 📱 Fully Responsive Design
- 🎯 Smooth Page Transitions & Animations
- 🎨 Clean & Modern UI with Tailwind CSS
- 🔍 SEO Optimized
- 🚄 Fast Loading & Performance

## 🎯 One-Click Deploy

Deploy your own portfolio to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

## 🛠️ Tech Stack

- Next.js 14
- TypeScript
- Three.js & React Three Fiber
- Framer Motion
- Tailwind CSS
- React Icons

## 🚀 Getting Started

1. **Clone & Install**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   - Visit [http://localhost:3000](http://localhost:3000)

## 📝 Configuration Overview

All customization can be done in the `/config.ts` file. No coding required!

### 1. Site Configuration (`/config.ts`)
Update your personal information and social links:
```typescript
export const siteConfig = {
  title: 'Your Name | Portfolio',
  description: 'Your portfolio description',
  author: 'Your Name',
  email: 'your.email@example.com',
  socials: {
    github: 'your-github',
    linkedin: 'your-linkedin',
    twitter: 'your-twitter',
  }
};
```

### 2. Content Sections
Each section is fully configurable:
- **Hero**: Your intro and CTAs
- **About**: Your story and experience
- **Skills**: Your tech stack
- **Projects**: Your work showcase
- **Contact**: Your contact form

Just update the corresponding section in `config.ts`:
```typescript
export const heroSection = {
  title: 'Your Headline',
  subtitle: 'Your Catchphrase',
  // ...
};

export const projectsSection = {
  title: 'My Work',
  projects: [
    {
      title: 'Project Name',
      description: 'Project Description',
      // ...
    },
    // Add more projects...
  ]
};
```

## 🎨 Customization Guide

### 1. Site Configuration (`/config.ts`)

```typescript
export const siteConfig = {
  title: 'Your Name | Portfolio',
  description: 'Your portfolio description',
  author: 'Your Name',
  email: 'your.email@example.com',
  socials: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  }
};
```

### 2. Section Content (`/config.ts`)

- **Hero Section**: Update title, subtitle, and CTA buttons
- **About Section**: Modify description and stats
- **Skills Section**: Add/remove technologies
- **Projects Section**: Showcase your work
- **Contact Section**: Customize contact form and info

### 3. 3D Scene (`/components/Scene3DClient.tsx`)

- Change 3D model
- Adjust camera position
- Modify lighting
- Update animations

### 4. 3D Scene Configuration (`/config.ts`)

```typescript
export const scene3DConfig = {
  // Camera settings
  camera: {
    fov: 45,
    position: [0, 1.8, 4]
  },
  // Tech icons floating around the scene
  techIcons: [
    { Icon: SiReact, color: '#61DAFB' },
    { Icon: SiNextdotjs, color: '#ffffff' },
    // Add or remove icons as needed
  ],
  // Other scene settings
  background: '#111111'
};
```

You can:
- Add/remove floating tech icons
- Customize icon colors
- Adjust camera settings
- Change background color
- Modify animation parameters

### 5. Styling

- **Colors**: Edit `tailwind.config.js`
- **Fonts**: Update in `app/layout.tsx`
- **Spacing**: Modify padding/margin in components
- **Animations**: Adjust Framer Motion settings

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/     # React components
│   │   ├── sections/  # Page sections
│   │   └── ui/       # UI components
│   ├── hooks/        # Custom hooks
│   └── layout.tsx    # Root layout
├── config.ts         # Site configuration
├── public/          # Static assets
└── styles/         # Global styles
```

## ⚡ Performance Tips

1. **Image Optimization**
   - Use Next.js Image component
   - Compress images before import
   - Use appropriate image formats

2. **3D Scene**
   - Optimize 3D model file size
   - Use proper pixel ratio
   - Implement lazy loading

3. **Code Splitting**
   - Use dynamic imports
   - Lazy load components
   - Optimize bundle size

## 🚀 Deployment

1. **Build Project**
   ```bash
   npm run build
   ```

2. **Deploy Options**
   - Vercel (Recommended)
   - Netlify
   - GitHub Pages

## 📝 License

This project is open source and available under the MIT License.

## 🌟 Show Your Support

If you found this project helpful, give it a ⭐️ on GitHub!