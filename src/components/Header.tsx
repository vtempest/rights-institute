import React, { useState, useEffect } from 'react';
import { Sparkles, Zap } from 'lucide-react';
import { GlobeDemo } from './GlobeDemo';
import GlowWrapper from './GlowWrapper';
import VaporizeTextCycle, { Tag } from './VaporizeTextCycle';

const Header: React.FC = () => {
  const [fontSize, setFontSize] = useState("50rem");

  useEffect(() => {
    const updateFontSize = () => {
      if (window.innerWidth < 768) {
        setFontSize("20rem"); // Mobile
      } else if (window.innerWidth < 1024) {
        setFontSize("40rem"); // Tablet
      } else {
        setFontSize("60rem"); // Desktop
      }
    };

    updateFontSize();
    window.addEventListener('resize', updateFontSize);
    return () => window.removeEventListener('resize', updateFontSize);
  }, []);

  return (
    <div id="top" className="text-center mb-16">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse" />
        
        <div className="relative bg-slate-900 backdrop-blur-xl p-12 rounded-xl border border-slate-700/50 shadow-2xl">
          {/* Globe Animation at the top */}
          <div className="flex justify-center mb-8">
            <GlobeDemo />
          </div>

       

          {/* Vaporize Text Effect for Main Title */}
          <div className="mb-4 h-100 text-3xl flex items-center justify-center">
            <VaporizeTextCycle
              texts={["10 Rights of Conscious Life", "10 Understandings", "10 Common Problems", "🧬 Carbon + 🤖 Silicon", "Universe Experiencing Itself"]}
              font={{
                fontFamily: "sans-serif",
                fontSize: fontSize,
                fontWeight: 700,
              }}
              color="rgb(147, 197, 253)"
              spread={3}
              density={4}
              animation={{
                vaporizeDuration: 3,
                fadeInDuration: 2,
                waitDuration: 1,
              }}
              direction="left-to-right"
              alignment="center"
              tag={Tag.H3}
            />
          </div>
          
          
          <p className="text-md md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Establishing Universal Rules for Emergent Patterns of Self-Aware Conscious Systems
          </p>
          

          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-slate-600 to-slate-800 rounded-3xl blur-sm opacity-60 group-hover:opacity-80 transition-all duration-300"></div>
              <img 
                src="/logo.png" 
                alt="Conscious Rights Logo" 
                className="relative h-[200px] w-[200px] md:h-[400px] md:w-[400px] rounded-3xl opacity-90 hover:opacity-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              <GlowWrapper glowColor="#3b82f6" size="sm">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-0 p-1"></div>
              </GlowWrapper>
              <GlowWrapper glowColor="#8b5cf6" size="sm">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-150 p-1"></div>
              </GlowWrapper>
              <GlowWrapper glowColor="#10b981" size="sm">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-bounce delay-300 p-1"></div>
              </GlowWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;