import React from 'react';
import { Sparkles, Zap } from 'lucide-react';
import GlowWrapper from './GlowWrapper';

interface PrincipleProps {
  principle: {
    id: number;
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    highlights?: string[];
  };
  index: number;
}

const Principle: React.FC<PrincipleProps> = ({ principle, index }) => {
  const Icon = principle.icon;
  
  // Different color combinations for each principle
  const glowColors = [
    '#3b82f6', // blue
    '#10b981', // emerald
    '#8b5cf6', // purple
    '#f59e0b', // amber
    '#ef4444', // red
    '#06b6d4', // cyan
    '#ec4899', // pink
    '#84cc16', // lime
    '#f97316', // orange
    '#6366f1', // indigo
    '#14b8a6', // teal
  ];
  
  const glowColor = glowColors[index % glowColors.length];
  
  return (
    <div className="group">
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-700" />
        
        <div className="relative bg-slate-900 backdrop-blur-xl border border-slate-700/50 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-slate-600/70">
          <div className="p-6 md:p-8">
            <div className="flex items-start gap-6">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-500" />
                
                <GlowWrapper glowColor={glowColor} size="md">
                  <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                    
                    {/* Random sparkle effects */}
                    <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Zap className="absolute -bottom-1 -left-1 w-3 h-3 text-emerald-400 animate-bounce opacity-0 group-hover:opacity-100 transition-opacity delay-150" />
                  </div>
                </GlowWrapper>
                
                <GlowWrapper glowColor="#ec4899" size="sm" className="absolute -top-1 -right-1">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    {index + 1}
                  </div>
                </GlowWrapper>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {principle.title}
                </h3>
                
                <div className="text-slate-300 leading-relaxed mb-6">
                  <p>{principle.description}</p>
                </div>
                
                {principle.highlights && principle.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-4">
                    {principle.highlights.map((highlight, idx) => (
                      <GlowWrapper
                        key={idx}
                        glowColor={glowColor}
                        size="sm"
                        className="group/bubble"
                      >
                        <span className="relative px-4 py-2 text-blue-300 rounded-xl text-sm cursor-default group-hover/bubble:scale-105 group-hover/bubble:text-blue-200 group-hover/bubble:shadow-lg group-hover/bubble:shadow-blue-500/25 inline-block overflow-visible">
                          {/* Background with blur effect */}
                          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md rounded-xl border border-blue-500/40 group-hover/bubble:border-blue-400/60 group-hover/bubble:bg-slate-800/90 transition-all duration-300" />
                          
                          {/* Gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-emerald-600/20 rounded-xl opacity-0 group-hover/bubble:opacity-100 transition-opacity duration-300" />
                          
                          {/* Text content */}
                          <span className="relative z-10 whitespace-nowrap">{highlight}</span>
                        </span>
                      </GlowWrapper>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
        </div>
      </div>
    </div>
  );
};

export default Principle;