# 🚀 Free 3D Portfolio Template

A modern, interactive portfolio website built with Next.js 14, featuring a stunning 3D scene, smooth animations, and responsive design. Create your own professional portfolio in just 5 minutes by customizing the configuration!

## ⚡ Quick Start Guide (5 Minutes to Your Portfolio)

1. **Clone & Install (1 minute)**
   ```bash
   git clone https://github.com/ProgrammingInBlood/Free3DPortfolio.git
   cd Free3DPortfolio
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

## 🎯 One-Click Deploy

Deploy your own portfolio to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ProgrammingInBlood/Free3DPortfolio)

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

## 🛠️ Tech Stack

- Next.js 14
- TypeScript
- Three.js & React Three Fiber
- Framer Motion
- Tailwind CSS
- React Icons

## 📝 Configuration Guide

All customization can be done in the `/config.ts` file. No coding required!

### 1. Site Configuration
Update your personal information and social links in `config.ts`:
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
Each section is fully configurable in `config.ts`:
- **Hero**: Your intro and CTAs
- **About**: Your story and experience
- **Skills**: Your tech stack
- **Projects**: Your work showcase
- **Contact**: Your contact form

### 3. 3D Scene Configuration
Customize the 3D scene in `config.ts`:
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

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Show Your Support

If you find this template helpful, please give it a star on GitHub! ⭐️

## 📧 Contact

For any questions or feedback, please reach out to me:
- GitHub: [@ProgrammingInBlood](https://github.com/ProgrammingInBlood)
- Email: [your-email@example.com](mailto:singheklavya@proton.me)

---
Made with ❤️ by [ProgrammingInBlood](https://github.com/ProgrammingInBlood)