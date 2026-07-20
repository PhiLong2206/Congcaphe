import React from 'react';
import { ArrowDown } from 'lucide-react';
import { SectionDecor } from './SectionDecor';

export const Hero: React.FC = () => {
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
      id="home"
      className="relative h-[90vh] min-h-[550px] w-full flex items-center justify-center overflow-hidden bg-cong-armyDark"
    >
      {/* Background Video Banner */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src="/videos/videoQC.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay to ensure readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Decorative Stamps */}
      <SectionDecor type="postmark" className="top-24 right-8 md:right-16 scale-75 md:scale-90 text-cong-oldPaper/30 border-cong-oldPaper/20 z-20" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-cong-ivoryWhite flex flex-col items-center">
        {/* Eyebrow */}
        <span className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-cong-oldPaper/90 mb-4">
          CỘNG CÀ PHÊ
        </span>

        {/* H1 Title */}
        <h1 className="text-4xl md:text-6xl font-serif text-cong-headline leading-tight max-w-3xl drop-shadow-md mb-6 uppercase tracking-wide">
          MỘT KHOẢNG KÝ ỨC <br />
          <span className="text-cong-champagne italic font-normal text-3xl md:text-5xl">GIỮA PHỐ THỊ</span>
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base text-cong-oldPaper/80 max-w-xl mb-10 font-sans leading-relaxed font-light">
          Không chỉ là một nơi thưởng thức cà phê, Cộng là không gian để những ký ức Việt Nam cũ được kể lại bằng hương vị, màu sắc và những câu chuyện bình dị.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => handleScrollTo('#story')}
            className="w-full sm:w-auto px-8 py-3.5 bg-cong-accent text-white hover:bg-white hover:text-cong-accent rounded-sm font-serif font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-md"
          >
            KHÁM PHÁ CỘNG
          </button>
          
          <button
            onClick={() => handleScrollTo('#stores')}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-cong-champagne hover:bg-cong-champagne/10 rounded-sm font-serif font-bold text-xs tracking-widest uppercase transition-all duration-300 border border-cong-champagne/45"
          >
            TÌM CỬA HÀNG GẦN BẠN
          </button>
        </div>

        <span className="mt-8 font-sans text-[10px] uppercase tracking-widest text-cong-champagne/40">
          TỪ HÀ NỘI, 2007.
        </span>
      </div>

      {/* Down Scroll Button */}
      <div 
        onClick={() => handleScrollTo('#story')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-cong-champagne/60 hover:text-cong-champagne transition-colors z-20"
      >
        <span className="font-sans text-[8px] uppercase tracking-[0.2em] font-bold">CUỘN ĐỂ XEM</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
};
