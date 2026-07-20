import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  light = false,
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : 'justify-start'}`}>
        <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cong-champagne/40"></span>
        <span className="w-1.5 h-1.5 rotate-45 bg-cong-champagne"></span>
        <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cong-champagne/40"></span>
      </div>
      <h2 className={`text-3xl md:text-5xl font-serif tracking-wide leading-tight ${
        light ? 'text-[#3F4E2A]' : 'text-cong-headline'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl mx-auto font-sans leading-relaxed text-sm md:text-base font-medium ${
          light ? 'text-[#5E5A50]' : 'text-cong-body'
        }`}>
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex justify-center">
        <span className="w-20 h-[1px] bg-cong-champagne/10"></span>
      </div>
    </div>
  );
};
