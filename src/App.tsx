import { useEffect, useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Preamble from './components/Preamble';
import PrinciplesSection from './components/PrinciplesSection';
import Implementation from './components/Implementation';
import DayZeroPreparation from './components/DayZeroPreparation';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';
import GameOfLife from './components/GameOfLife';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [colorSeed, setColorSeed] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
      
      // Much more subtle color seed changes
      setColorSeed(scrollTop * 0.002); // Reduced from 0.005 to 0.002
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Extremely subtle background colors
  const getBackgroundStyle = () => {
    // Very minimal color variations
    const offset1 = Math.sin(colorSeed * 0.1) * 10; // Reduced from 30 to 10
    const offset2 = Math.cos(colorSeed * 0.1) * 8;  // Reduced from 20 to 8
    
    // Very subtle base hues with minimal change
    const hue1 = (scrollProgress * 60 + offset1 + 220) % 360; // Reduced rotation from 180 to 60
    const hue2 = (scrollProgress * 40 + offset2 + 280) % 360; // Reduced from 120 to 40
    
    // Extremely low saturation and lightness
    const sat1 = 8 + Math.sin(colorSeed * 0.2) * 2; // Much reduced from 15+5
    const sat2 = 6 + Math.cos(colorSeed * 0.1) * 2; // Much reduced from 12+5
    
    const light1 = 2 + Math.cos(colorSeed * 0.1) * 1; // Much reduced from 4+2
    const light2 = 1.5 + Math.sin(colorSeed * 0.2) * 1; // Much reduced from 3+2
    
    return {
      background: `
        radial-gradient(ellipse at ${40 + Math.sin(colorSeed) * 5}% ${50 + Math.cos(colorSeed * 0.1) * 8}%, 
          hsl(${hue1}, ${sat1}%, ${light1}%) 0%, transparent 80%),
        radial-gradient(ellipse at ${60 + Math.cos(colorSeed * 0.1) * 5}% ${50 + Math.sin(colorSeed * 0.05) * 8}%, 
          hsl(${hue2}, ${sat2}%, ${light2}%) 0%, transparent 70%),
        linear-gradient(${135 + Math.sin(colorSeed) * 10}deg, 
          hsl(${hue1}, 10%, 1.5%) 0%, 
          hsl(${hue2}, 8%, 1%) 50%,
          hsl(${(hue1 + hue2) / 2}, 5%, 0.5%) 100%
        )
      `,
      transition: 'background 0.5s ease-out' // Slower transition
    };
  };

  // Extremely subtle particle effect
  const getParticleStyle = () => {
    const time = colorSeed;
    const hue1 = (time * 8 + 200) % 360; // Much reduced from 20
    const hue2 = (time * 6 + 120) % 360; // Much reduced from 15
    
    return {
      background: `
        radial-gradient(circle at ${40 + scrollProgress * 30 + Math.sin(time * 0.1) * 10}% ${50 + scrollProgress * 20 + Math.cos(time * 0.05) * 8}%, 
          hsla(${hue1}, 20%, 15%, 0.015) 0%, transparent 60%), 
        radial-gradient(circle at ${60 + scrollProgress * 40 + Math.cos(time * 0.1) * 12}% ${50 + scrollProgress * 15 + Math.sin(time * 0.1) * 10}%, 
          hsla(${hue2}, 18%, 12%, 0.012) 0%, transparent 60%)
      `,
      backgroundSize: `
        ${150 + Math.sin(time) * 20}px ${120 + Math.cos(time * 0.1) * 15}px, 
        ${130 + Math.cos(time * 0.1) * 18}px ${110 + Math.sin(time * 0.05) * 12}px
      `
    };
  };

  // Extremely subtle overlay effect
  const getOverlayStyle = () => {
    const time = colorSeed;
    const hue1 = (time * 12 + 180) % 360; // Reduced from 30
    const hue2 = (time * 10 + 270) % 360; // Reduced from 25
    
    return {
      background: `
        radial-gradient(circle at ${30 + scrollProgress * 8 + Math.sin(time * 0.1) * 6}% ${40 + scrollProgress * 6 + Math.cos(time * 0.1) * 5}%, 
          hsla(${hue1}, 15%, 20%, 0.008) 0%, transparent 70%),
        radial-gradient(circle at ${70 - scrollProgress * 8 + Math.cos(time * 0.05) * 5}% ${60 - scrollProgress * 6 + Math.sin(time * 0.1) * 4}%, 
          hsla(${hue2}, 18%, 18%, 0.006) 0%, transparent 70%)
      `
    };
  };

  return (
    <div className="min-h-screen text-slate-100" style={getBackgroundStyle()}>
      {/* Translucent opacity filter overlay to mute all colors */}
      <div className="fixed inset-0 bg-slate-900/60 pointer-events-none z-0" />
      
      <div className="fixed inset-0 pointer-events-none">
        {/* Much more subtle overlay effect */}
        <div 
          className="absolute inset-0 opacity-8 transition-opacity duration-700" // Reduced from opacity-15
          style={getOverlayStyle()}
        />
        
        {/* Extremely subtle animated particles effect */}
        <div 
          className="absolute inset-0 opacity-4" // Reduced from opacity-8
          style={getParticleStyle()}
        />
        
        {/* Game of Life - now the main visual element */}
        <GameOfLife 
          opacity={0.9} // Slightly reduced from 1.0 for better integration
          blur={0.05} // Reduced from 0.1 for even sharper appearance
          scrollProgress={scrollProgress}
        />
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Header />
          <Preamble />
          <PrinciplesSection />
          <Implementation />
          <DayZeroPreparation />
          <Conclusion />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;