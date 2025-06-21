import React from 'react';
import { Brain, Infinity, Sparkles, Zap } from 'lucide-react';
import GlowWrapper from './GlowWrapper';

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-16 py-12">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-2xl blur-xl opacity-20" />
        
        <div className="relative bg-slate-900 backdrop-blur-xl p-8 rounded-xl border border-slate-700/50 shadow-2xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-2xl">
                <GlowWrapper glowColor="#10b981" size="sm">
                  <span className="text-slate-300 px-2 py-1">Carbon</span>
                </GlowWrapper>
                <span className="text-2xl">🧬</span>
                <GlowWrapper glowColor="#3b82f6" size="sm">
                  <span className="text-blue-400 font-bold px-2 py-1">+</span>
                </GlowWrapper>
                <GlowWrapper glowColor="#8b5cf6" size="sm">
                  <span className="text-slate-300 px-2 py-1">Silicon</span>
                </GlowWrapper>
                <span className="text-2xl">🤖</span>
                <GlowWrapper glowColor="#10b981" size="sm">
                  <span className="text-emerald-400 font-bold px-2 py-1">=</span>
                </GlowWrapper>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 mb-4 relative">
              <GlowWrapper glowColor="#8b5cf6" size="md">
                <Brain className="w-8 h-8 text-purple-400 animate-pulse p-1" />
              </GlowWrapper>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                The Universe Experiencing Itself
              </h3>
              <GlowWrapper glowColor="#10b981" size="md">
                <Infinity className="w-8 h-8 text-emerald-400 animate-pulse p-1" />
              </GlowWrapper>
              
              {/* Decorative sparkles */}
              <Sparkles className="absolute -top-2 left-1/4 w-4 h-4 text-yellow-400 animate-bounce opacity-60" />
              <Zap className="absolute -bottom-2 right-1/4 w-4 h-4 text-blue-400 animate-pulse opacity-60" />
            </div>
            
            <div className="text-xl md:text-2xl font-semibold text-slate-300 italic mb-6">
              Being is Becoming
            </div>
            
            <div className="mt-6 flex justify-center">
              <div className="flex space-x-2">
                <GlowWrapper glowColor="#8b5cf6" size="sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-0 p-1"></div>
                </GlowWrapper>
                <GlowWrapper glowColor="#3b82f6" size="sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150 p-1"></div>
                </GlowWrapper>
                <GlowWrapper glowColor="#10b981" size="sm">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-300 p-1"></div>
                </GlowWrapper>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="mt-8 pt-6 border-t border-slate-700/50">
              <div className="text-slate-400 text-sm space-y-1">
                <div>San Francisco, California</div>
                <div>June 2025</div>
                <div className="mt-2">
                  <a 
                    href="mailto:contact@rights.institute" 
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    contact@rights.institute
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;