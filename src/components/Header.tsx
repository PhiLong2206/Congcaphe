import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Trang chủ', target: '#home' },
    { label: 'Câu chuyện Cộng', target: '#home' },
    { label: 'Thực đơn', target: '#menu' },
    { label: 'Góc tạp hoá', target: '#grocery' },
    { label: 'Cửa hàng', target: '#stores' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetElement = document.querySelector(target);
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
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[rgba(18,22,18,0.92)] backdrop-blur-md py-4 shadow-md border-b border-cong-champagne/20' 
          : 'bg-[rgba(18,22,18,0.7)] backdrop-blur-sm py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group"
        >
          <span className="font-serif text-2xl md:text-3xl font-extrabold tracking-wider border-2 border-cong-champagne px-3 py-0.5 rounded-sm text-cong-champagne">
            CỘNG
          </span>
          <span className="hidden sm:inline-block font-sans text-[10px] uppercase tracking-[0.25em] text-cong-oldPaper mt-2 font-semibold">
            CÀ PHÊ
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-10" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={link.target}
              onClick={(e) => handleNavClick(e, link.target)}
              className="font-sans text-xs font-bold uppercase tracking-widest text-cong-oldPaper hover:text-cong-champagne transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-cong-champagne transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#stores"
            onClick={(e) => handleNavClick(e, '#stores')}
            className="flex items-center gap-2 bg-transparent text-cong-champagne hover:bg-cong-champagne hover:text-cong-armyDark px-5 py-2.5 rounded-sm font-serif font-bold text-xs tracking-widest uppercase transition-all duration-300 border border-cong-champagne/60 hover:border-cong-champagne"
          >
            <span>Tìm cửa hàng</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Mở menu"
          className="lg:hidden p-2 rounded hover:bg-white/5 transition-colors text-cong-oldPaper"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-cong-secondaryBg border-b border-cong-champagne/20 shadow-2xl py-8 px-6 animate-fadeIn paper-texture">
          <nav className="flex flex-col gap-5 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={link.target}
                onClick={(e) => handleNavClick(e, link.target)}
                className="font-sans text-sm font-bold uppercase tracking-wider text-cong-body hover:text-cong-champagne py-2 border-b border-cong-champagne/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#stores"
            onClick={(e) => handleNavClick(e, '#stores')}
            className="block text-center bg-transparent text-cong-champagne hover:bg-cong-champagne hover:text-black py-3.5 rounded-sm font-serif font-bold text-xs tracking-widest uppercase transition-colors border border-cong-champagne"
          >
            Tìm cửa hàng
          </a>
        </div>
      )}
    </header>
  );
};
