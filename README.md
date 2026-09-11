# 🚀 Modern Portfolio Website

A beautiful and responsive portfolio website built with modern web technologies. Showcase your projects, skills, and professional experience with smooth animations and elegant design.

## ✨ Features

- **Responsive Design** - Fully responsive from mobile (320px) to desktop (1200px+)
- **Smooth Animations** - Beautiful, fluid animations with cubic-bezier easing
- **Modern UI** - Gradient backgrounds, glass morphism effects, and elegant shadows
- **Projects Showcase** - Display your past work with technologies used and project links
- **Resume Section** - Organize your skills by categories and showcase work experience
- **Navigation** - Sticky navigation with smooth scroll to sections and mobile hamburger menu
- **Contact Section** - Footer with contact information and social media links
- **TypeScript** - Fully typed React components with TypeScript
- **Optimized** - Built with Vite for fast development and production builds

## 🛠️ Tech Stack

- **React 19** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite 8** - Lightning-fast build tool
- **CSS3** - Advanced CSS with animations and gradients
- **Responsive Design** - CSS clamp() and flexible layouts

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd my-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The portfolio will open at `http://localhost:5173`

## 🚀 Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Welcome section with CTA
│   ├── Projects.tsx      # Project showcase grid
│   ├── Resume.tsx        # Skills and work experience
│   ├── Navigation.tsx    # Sticky navbar with smooth scroll
│   └── Footer.tsx        # Contact info and social links
├── styles/
│   ├── portfolio.css     # All section styles and animations
│   ├── Navigation.css    # Navbar styling
│   └── index.css         # Global styles and CSS variables
├── App.tsx               # Main app component
└── main.tsx              # React entry point
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit [src/components/Hero.tsx](src/components/Hero.tsx)
   - Change the main heading and description
   - Update the CTA button text and link

2. **Projects** - Edit [src/components/Projects.tsx](src/components/Projects.tsx)
   - Replace sample projects with your own
   - Add technology badges and links

3. **Resume** - Edit [src/components/Resume.tsx](src/components/Resume.tsx)
   - Update skills by category
   - Add your work experience

4. **Navigation** - Edit [src/components/Navigation.tsx](src/components/Navigation.tsx)
   - Change the logo text
   - Modify navigation links

5. **Footer** - Edit [src/components/Footer.tsx](src/components/Footer.tsx)
   - Update contact information
   - Add social media links

### Styling

- **Main Styles** - [src/styles/portfolio.css](src/styles/portfolio.css)
- **Navigation Styles** - [src/styles/Navigation.css](src/styles/Navigation.css)
- **Global Styles** - [src/styles/index.css](src/styles/index.css)

#### Color Scheme
- Primary Purple: `#667eea`
- Secondary Purple: `#764ba2`
- Text Dark: `#1a1a2e`
- Light Gray: `#b0b5c0`

### Animations

All animations use smooth cubic-bezier easing:
- **Smooth easing**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Elastic easing**: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- **Default duration**: 0.3s - 0.6s for interactions
- **Float animation**: 8s - 10s for background elements

## 📱 Responsive Breakpoints

- **320px** - Ultra-small devices
- **480px** - Mobile phones
- **768px** - Tablets (navigation switches to hamburger)
- **1024px** - Large tablets
- **1200px** - Desktop and larger

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Deploy Options

1. **Vercel** (Recommended)
   - Connect your repository
   - Auto-deploys on push

2. **GitHub Pages**
   - Update `vite.config.ts` base path
   - Push to `gh-pages` branch

3. **Netlify**
   - Connect repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

4. **Any Static Host**
   - Upload contents of `dist/` folder

## 📄 License

This project is open source and available for personal use.

## 💡 Tips

- **Performance**: All animations use GPU-accelerated properties (transform, opacity)
- **Accessibility**: Semantic HTML and smooth scroll behavior for better UX
- **Mobile-First**: Responsive design adapts beautifully to all screen sizes
- **SEO Ready**: Proper heading hierarchy and semantic structure

---

**Happy coding!** 🎉 Feel free to customize and make this portfolio your own.
