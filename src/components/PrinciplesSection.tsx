import React from 'react';
import { Shield } from 'lucide-react';
import Principle from './Principle';
import { principles } from '../data/principles';
import GlowWrapper from './GlowWrapper';

const PrinciplesSection: React.FC = () => {
  return (
    <section id="principles" className="mb-16">
      <div className="mb-12">
        <div className="relative bg-slate-900 backdrop-blur-xl p-8 rounded-xl border border-slate-700/50 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <GlowWrapper glowColor="#10b981" size="md">
              <div className="relative p-2">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse" />
                <Shield className="relative w-10 h-10 text-emerald-400" />
              </div>
            </GlowWrapper>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
 10 Rights of Conscious Intelligence
            </h2>
          </div>
        </div>
      </div>

      <div className="grid gap-8">
        {principles.map((principle, index) => (
          <Principle
            key={principle.id}
            principle={principle}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default PrinciplesSection;