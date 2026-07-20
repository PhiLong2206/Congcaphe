import React from 'react';

export const FinalCTA: React.FC = () => {
  const handleScrollTo = (targetId: string) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      className="relative py-28 bg-cong-primaryBg text-cong-body text-center overflow-hidden border-t border-cong-champagne/15"
    >
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 transition-transform duration-10000 scale-105"
        style={{ 
          backgroundImage: `url('/images/posters/video-poster.jpg')`,
        }}
      ></div>

      {/* Luxury Radial Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,179,106,0.06)_0%,transparent_70%)] pointer-events-none"></div>

      {/* Editorial texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none paper-texture"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Gold Accent Stamp */}
        <div className="mb-6 inline-block border border-dashed border-cong-champagne/40 px-4 py-1.5 text-[9px] uppercase tracking-widest font-bold text-cong-champagne">
          CỘNG CÀ PHÊ • 2007
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-serif text-cong-headline mb-6 leading-tight max-w-2xl mx-auto tracking-wide">
          Một Tách Cà Phê, <br />
          <span className="text-cong-champagne italic font-light">Một Khoảng Ký Ức Riêng</span>
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-cong-body/80 max-w-xl mx-auto mb-10 font-sans leading-relaxed font-light">
          Ghé Cộng để tìm lại một góc bình yên giữa lòng thành phố náo nhiệt, lưu giữ những buổi hò hẹn ấm áp bằng hương vị thân thuộc.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleScrollTo('#stores')}
            className="w-full sm:w-auto px-8 py-3.5 bg-cong-champagne text-black hover:bg-white hover:-translate-y-0.5 rounded-sm font-serif font-extrabold text-xs tracking-widest uppercase transition-all duration-300 shadow-xl"
          >
            Tìm Cộng gần bạn
          </button>
          
          <button
            onClick={() => handleScrollTo('#menu')}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-cong-champagne hover:bg-cong-champagne/10 rounded-sm font-serif font-extrabold text-xs tracking-widest uppercase transition-all duration-300 border border-cong-champagne"
          >
            Khám phá thực đơn
          </button>
        </div>
      </div>
    </section>
  );
};
