import React from 'react';

interface BorderBeamProps {
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

const BorderBeam: React.FC<BorderBeamProps> = ({
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  colorFrom = '#ffaa40',
  colorTo = '#9c40ff',
  delay = 0,
}) => {
  return (
    <div
      className=" absolute inset-0 rounded-xl"
      style={{
        '--size': size,
        '--duration': duration,
        '--border-width': borderWidth,
        '--color-from': colorFrom,
        '--color-to': colorTo,
        '--delay': `-${delay}s`,
      } as React.CSSProperties}
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `
            conic-gradient(
              from 0deg,
              transparent,
              ${colorFrom},
              ${colorTo},
              transparent
            )
          `,
          animation: `border-beam ${duration}s linear infinite`,
          animationDelay: 'var(--delay)',
          mask: `
            radial-gradient(
              calc(var(--size) * 1px) circle at center,
              transparent calc(var(--size) * 1px - var(--border-width) * 1px),
              black calc(var(--size) * 1px)
            )
          `,
          WebkitMask: `
            radial-gradient(
              calc(var(--size) * 1px) circle at center,
              transparent calc(var(--size) * 1px - var(--border-width) * 1px),
              black calc(var(--size) * 1px)
            )
          `,
        }}
      />
    </div>
  );
};

export default BorderBeam;