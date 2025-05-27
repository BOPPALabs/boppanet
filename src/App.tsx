import React, { Suspense, useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SEO from './components/layout/SEO';
import ParticleBackground from './components/ParticleBackground';

// Lazy load sections for better performance
const HeroSection = React.lazy(() => import('./components/sections/HeroSection'));
const MinecraftSection = React.lazy(() => import('./components/sections/MinecraftSection'));
const DiscordSection = React.lazy(() => import('./components/sections/DiscordSection'));

// Loading component
const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-boppa-primary text-xl">Loading...</div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-boppa-darker flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-boppa-primary to-boppa-accent mb-4">
            BOPPA
          </h1>
          <div className="animate-pulse flex space-x-2 justify-center">
            <div className="w-3 h-3 bg-boppa-primary rounded-full"></div>
            <div className="w-3 h-3 bg-boppa-secondary rounded-full"></div>
            <div className="w-3 h-3 bg-boppa-accent rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="bg-boppa-darker text-boppa-light min-h-screen">
          <SEO />
          <ParticleBackground />
          <Header />
          
          <main>
            <Suspense fallback={<SectionLoader />}>
              <HeroSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
              <MinecraftSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
              <DiscordSection />
            </Suspense>
          </main>
          
          <Footer />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;