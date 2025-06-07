<h1 align="center">
  BOPPAnet
</h1>

<p align="center">
  <img width="153" height="126" src="/src/img/boppa_icon.png">
</p>

<p align="center">
  <a href="https://boppa.net">boppa.net</a>
</p>

A modern, interactive website for the BOPPA gaming community built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Beautiful UI with custom color schemes and animations
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Elements**: Particle background and smooth scroll animations
- **Gaming Integration**: Direct links to Minecraft server and Discord community
- **Performance Optimized**: Lazy loading and code splitting for fast load times

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Build Tool**: Vite for fast development and building
- **Icons**: Lucide React for consistent iconography

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/BOPPALabs/BOPPAnet.git
cd BOPPAnet
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎨 Design System

The website uses a custom color palette defined in [`tailwind.config.js`](tailwind.config.js):

- **Primary**: Purple (#6D28D9)
- **Secondary**: Indigo (#4F46E5)
- **Accent**: Pink (#EC4899)
- **Dark**: Custom dark backgrounds for gaming aesthetic

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, SEO components
│   ├── sections/        # Main page sections (Hero, Minecraft, Discord)
│   └── ui/             # Reusable UI components
├── types/              # TypeScript type definitions
└── App.tsx            # Main application component
```

## 🔧 Configuration

- **Vite Config**: [`vite.config.ts`](vite.config.ts)
- **TypeScript**: [`tsconfig.json`](tsconfig.json)
- **Tailwind**: [`tailwind.config.js`](tailwind.config.js)
- **ESLint**: [`eslint.config.js`](eslint.config.js)

## 📱 Features

### Interactive Elements

- **Particle Background**: Animated particle system using HTML5 Canvas
- **Smooth Animations**: Page transitions and scroll-triggered animations
- **Responsive Navigation**: Mobile-friendly hamburger menu

### SEO Optimized

- Meta tags for social media sharing
- Semantic HTML structure
- Optimized loading performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
