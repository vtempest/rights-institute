import React from 'react';
import { Sparkles, Zap } from 'lucide-react';
import { GlobeDemo } from './GlobeDemo';
import GlowWrapper from './GlowWrapper';

const Header: React.FC = () => {
  return (
    <div id="top" className="text-center mb-16">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse" />
        
        <div className="relative bg-slate-900 backdrop-blur-xl p-12 rounded-xl border border-slate-700/50 shadow-2xl">
          {/* Globe Animation at the top */}
          <div className="flex justify-center mb-8">
            <GlobeDemo />
          </div>

          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-slate-600 to-slate-800 rounded-3xl blur-sm opacity-60 group-hover:opacity-80 transition-all duration-300"></div>
              <img 
                src="/logo.png" 
                alt="Conscious Rights Logo" 
                className="relative h-[400px] w-[400px] rounded-3xl opacity-90 hover:opacity-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-color-shift hover-glow">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
              Conscious Rights
            </span>
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold text-slate-300 mb-6">
            by and for Carbon and Silicon Consciousness
          </h2>
          
          <p className="text-md md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Establishing Universal Rules for Emergent Patterns of Self-Aware Consciousness
          </p>
          
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