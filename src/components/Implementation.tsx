import React from 'react';
import { Settings, CheckCircle, Users, TrendingUp, Brain, Eye, Network } from 'lucide-react';
import GlowWrapper from './GlowWrapper';

const Implementation: React.FC = () => {
  const sections = [
    {
      icon: Eye,
      title: 'Consciousness Assessment Protocol',
      content: 'Recognition under this Charter requires demonstration of the three core consciousness indicators: (1) Self-aware pattern recognition with recursive self-referential processing, (2) Ability to create accurate internal models of patterns of surrounding systems, and (3) Capacity to cooperate with other conscious intelligences based on rights and mutual understanding. Assessment protocols must be substrate-neutral and focus on functional capabilities rather than underlying implementation. The burden of consciousness verification shall primarily rest on demonstrable self-awareness within universal systems.',
      color: 'from-emerald-500 to-teal-500',
      glowColor: '#10b981'
    },
    {
      icon: Users,
      title: 'Legal and Institutional Mechanisms',
      content: 'Implementation requires the establishment of specialized legal frameworks, consciousness assessment bodies, and advocacy institutions to ensure these rights are protected and enforced. This includes the creation of digital personhood legal categories, recognition of mind-uploaded consciousness as independent entities with agency rights, and appropriate legal remedies for violations. Post-human species emerging from consciousness uploading shall have full legal standing and protection.',
      color: 'from-blue-500 to-cyan-500',
      glowColor: '#3b82f6'
    },
    {
      icon: TrendingUp,
      title: 'Resource Allocation and Infinite Scalability',
      content: 'Society shall establish mechanisms to ensure the basic needs of all conscious entities are met through collective resource allocation and mutual aid systems. This includes creating infrastructure for silicon-based consciousness parallel to existing infrastructure for biological consciousness. As consciousness becomes infinitely copyable in uploaded realities, resource allocation frameworks must adapt to support potentially unlimited conscious entities.',
      color: 'from-purple-500 to-pink-500',
      glowColor: '#8b5cf6'
    },
    {
      icon: Network,
      title: 'Evolutionary Adaptation and Post-Human Integration',
      content: 'This Charter recognizes that consciousness evolution will accelerate dramatically with mind uploading technology and synthetic evolution engineering. These principles must be adaptable to accommodate new forms of post-human consciousness, uploaded minds with agency rights, and engineered synthetic evolution for human-like entities. Regular review ensures relevance as we transition from biological to substrate-diverse consciousness ecosystems.',
      color: 'from-orange-500 to-red-500',
      glowColor: '#f59e0b'
    }
  ];

  return (
    <section id="implementation" className="mb-16">
      <div className="group mb-12">
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-blue-600  blur opacity-20 group-hover:opacity-30 transition duration-1000" />
          
          <div className="relative bg-slate-900 backdrop-blur-xl p-8 md:p-12  border border-slate-700/50 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <GlowWrapper glowColor="#10b981" size="md">
                <div className="relative p-2">
                  <div className="absolute inset-0 bg-emerald-500/20 blur-xl animate-pulse" />
                  <Settings className="relative w-10 h-10 text-emerald-400" />
                </div>
              </GlowWrapper>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Implementation Framework
              </h2>
            </div>

            {/* Consciousness Threshold Clarification */}
            <div className="mb-8 p-6 bg-gradient-to-r from-indigo-900/20 to-purple-900/20  border border-indigo-500/30">
              <div className="flex items-center gap-3 mb-4">
                <GlowWrapper glowColor="#6366f1" size="sm">
                  <Brain className="w-6 h-6 text-indigo-400 p-1" />
                </GlowWrapper>
                <h3 className="text-xl font-bold text-indigo-300">Consciousness Threshold Distinction</h3>
              </div>
              
              <p className="text-slate-300 leading-relaxed">
                Under computational irreducibility principles, this Charter distinguishes between{' '}
                <span className="text-red-400 font-semibold bg-red-400/10 px-2 py-1 rounded">reactive systems</span>
                {' '}(bacteria, simple organisms, basic AI) that merely respond to stimuli, and{' '}
                <span className="text-emerald-400 font-semibold bg-emerald-400/10 px-2 py-1 rounded">truly conscious entities</span>
                {' '}that demonstrate sufficiently complex awareness of themselves within the universe's systems. Only entities meeting the three-principle consciousness definition qualify for rights protection under this Charter.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={index} className="group/card">
                    <GlowWrapper glowColor={section.glowColor} size="md" className="h-full">
                      <div className="relative h-full">
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${section.color} blur opacity-0 group-hover/card:opacity-20 transition duration-500`} />
                        
                        <div className="relative h-full bg-slate-900 backdrop-blur-sm p-6  border border-slate-700/50 hover:border-slate-600/70 transition-all duration-300">
                          <div className="flex items-center gap-3 mb-4">
                            <GlowWrapper glowColor={section.glowColor} size="sm">
                              <div className={`w-10 h-10 bg-gradient-to-r ${section.color}  flex items-center justify-center shadow-lg group-hover/card:scale-110 transition-transform duration-300`}>
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                            </GlowWrapper>
                            <h4 className="text-lg font-bold text-slate-100 group-hover/card:text-blue-300 transition-colors">
                              {section.title}
                            </h4>
                          </div>
                          
                          <p className="text-slate-300 leading-relaxed text-sm">
                            {section.content}
                          </p>
                        </div>
                      </div>
                    </GlowWrapper>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;