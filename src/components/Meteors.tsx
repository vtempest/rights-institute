import React from 'react';

interface MeteorsProps {
  number?: number;
}

const Meteors: React.FC<MeteorsProps> = ({ number = 20 }) => {
  const meteors = new Array(number).fill(true);
  
  return (
    <div className="absolute inset-0 overflow-hidden ">
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className="absolute animate-meteor-effect left-1/2 top-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]"
          style={{
            top: Math.random() * (400 - -400) + -400 + "px",
            left: Math.random() * (400 - -400) + -400 + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.random() * (10 - 2) + 2 + "s",
          }}
        >
          <div className=" absolute top-1/2 left-1/2 h-[1px] w-[50px] -translate-y-1/2 -translate-x-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </div>
  );
};

export default Meteors;