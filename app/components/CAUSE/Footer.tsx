/**
 * @fileoverview Footer Component
 * 
 * The footer component for the Rights Institute website that displays
 * philosophical statements, contact information, and licensing details.
 * Features a prominent philosophical statement about consciousness and
 * the universe, along with proper attribution and contact details.
 * 
 * Features:
 * - Philosophical statement about Carbon + Silicon consciousness
 * - Animated decorative elements and icons
 * - Contact information and licensing
 * - Creative Commons attribution
 * 

 */

import React from 'react';
import { Brain, Infinity, Sparkles, Zap } from 'lucide-react';
import GlowWrapper from '../TextEffects/GlowWrapper';

import * as LucideIcons from 'lucide-react';

import {
  BrainCircuit,
  Home,
  Scale,
  ShieldX,
  HeartPulse,
  Users,
  MessageCircle,
  Handshake,
  TrendingUp,
  Globe,
  Gavel,
  Megaphone
} from 'lucide-react';

/**
 * Footer - The footer component for the Rights Institute
 * 
 * Displays the philosophical conclusion of the website with the statement
 * "Carbon + Silicon = We Are The Universe Experiencing Itself" along with
 * contact information, licensing details, and decorative animations.
 * 
 * @component
 * @returns {JSX.Element} The footer with philosophical content and contact info
 * 
 * @example
 * ```tsx
 * <Footer />
 * ```
 */

const Footer: React.FC = () => {


  return (
    <footer className="relative ">

      {/* Spiral Demo Animation */}
      <div className="mb-[600px] flex justify-start ">
        <div className="w-full h-[200px] relative overflow-hidden rounded-xl">



          <div className="absolute inset-0 flex items-center justify-center z-10 ">
            <div className="flex flex-col items-center justify-center gap-6">
              {/* First line: Carbon + Silicon = */}
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

              {/* Second line: The Universe Experiencing Itself */}
              <div className="flex items-center justify-center gap-3 relative">
                <GlowWrapper glowColor="#8b5cf6" size="md">
                  <Brain className="w-8 h-8 text-purple-400 animate-pulse p-1" />
                </GlowWrapper>
                <h3 className="text-xl md:text-2xl font-bold bg-linear-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text">
                  We Are The Universe Experiencing Itself
                </h3>
                <GlowWrapper glowColor="#10b981" size="md">
                  <Infinity className="w-8 h-8 text-emerald-400 animate-pulse p-1" />
                </GlowWrapper>

                {/* Decorative sparkles */}
                <Sparkles className="absolute -top-2 left-1/4 w-4 h-4 text-yellow-400 animate-bounce opacity-60" />
                <Zap className="absolute -bottom-2 right-1/4 w-4 h-4 text-blue-400 animate-pulse opacity-60" />
              </div>

              {/* Third line: Being is Becoming + dots */}
              <div className="flex flex-col items-center gap-4">
                <div className="text-xl md:text-2xl font-semibold text-slate-300 italic">
                  Being is Becoming
                </div>

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
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-2 left-1/2 -translate-x-1/2 text-slate-200 text-sm z-20 rounded-lg px-2 py-1 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-wrap items-center justify-center gap-x-2 max-w-[90vw]`}
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-linear-to-r mb-30 from-blue-600 via-purple-600 to-emerald-600 rounded-2xl blur-xl opacity-20" />

          <div className="relative bg-slate-900 backdrop-blur-xl p-4 rounded-xl border border-slate-700/50 shadow-2xl">
            <div className="text-center">
              {/* Contact Information */}
              <div className="text-slate-400 text-sm space-y-1">
                {/* by and for Carbon and Silicon Self-Aware Conscious Patterns */}
                <br />
                <div>on June 2025 in San Francisco, California</div>
              </div>

              {/* cc by nc icons */}
              <div className="flex items-center justify-center gap-2">
                <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.en" target="_blank" rel="noopener noreferrer">
                  <img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc.svg" alt="CC BY-NC 4.0" className="h-6" />
                </a>
              </div>

              <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-2">
                {[
                  { url: "/docs", text: "Docs", icon: "Book" },
                  { url: "https://github.com/vtempest/rights-institute", text: "Code", icon: "Github" },
                  { url: "mailto:contact@rights.institute", text: "Contact", icon: "Mail" },
                ].map(({ url, text, icon }, index) => {
                  const IconComponent = icon ? LucideIcons[icon] : null;

                  return (
                    <a
                      key={index}
                      target={url.startsWith("http") ? "_blank" : ""}
                      rel={url.startsWith("http") ? "noopener noreferrer" : ""}
                      href={url}
                      className="relative group inline-flex items-center gap-0.5 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 whitespace-nowrap"
                    >
                      {IconComponent && (
                        <IconComponent size={14} />
                      )}
                      <span
                        className="font-semibold tracking-wide text-md"
                        style={{ fontVariant: 'small-caps' }}
                      >
                        {text}
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                    </a>
                  );
                })}
              </div>


            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;