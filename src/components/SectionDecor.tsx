import React from 'react';

interface SectionDecorProps {
  type?: 'stamp' | 'line' | 'postmark';
  className?: string;
}

export const SectionDecor: React.FC<SectionDecorProps> = ({ type = 'stamp', className = '' }) => {
  if (type === 'stamp') {
    return (
      <div className={`absolute select-none pointer-events-none border-2 border-dashed border-cong-champagne/30 text-cong-champagne/30 px-3 py-1.5 rounded-sm font-serif text-[10px] uppercase font-bold tracking-widest rotate-6 ${className}`}>
        KÝ ỨC THỜI GIAN
      </div>
    );
  }

  if (type === 'postmark') {
    return (
      <div className={`absolute select-none pointer-events-none w-24 h-24 border-2 border-double border-cong-champagne/20 rounded-full flex flex-col items-center justify-center font-serif text-[9px] text-cong-champagne/20 tracking-wider rotate-12 ${className}`}>
        <span className="font-bold">2007</span>
        <span className="h-[1px] w-12 bg-cong-champagne/10 my-1"></span>
        <span>HÀ NỘI</span>
      </div>
    );
  }

  return (
    <div className={`h-[1px] bg-gradient-to-r from-transparent via-cong-champagne/30 to-transparent my-6 w-full ${className}`}></div>
  );
};
