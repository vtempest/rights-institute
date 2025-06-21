import React from 'react';

interface GlowWrapperProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  size?: 'sm' | 'md' | 'lg';
}

const GlowWrapper: React.FC<GlowWrapperProps> = ({ 
  children, 
  className = '', 
  glowColor = '#c2c2c2',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'p-0.5',
    md: 'p-px',
    lg: 'p-1'
  };

  return (
    <div className={`relative inline-flex overflow-hidden ${sizeClasses[size]} ${className}`}>
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]"
        style={{
          background: `conic-gradient(from_90deg_at_50%_50%, ${glowColor}_0%, #505050_50%, ${glowColor}_100%)`
        }}
      />
      <span className="inline-flex h-full w-full items-center justify-center bg-slate-950/90 backdrop-blur-3xl">
        {children}
      </span>
    </div>
  );
};

export default GlowWrapper;