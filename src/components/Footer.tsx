import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
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
    <footer className="bg-cong-armyDark text-cong-oldPaper border-t border-cong-champagne/15 pt-20 pb-8 relative paper-texture">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Brand Details (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-serif text-2xl font-extrabold tracking-wider border-2 border-cong-champagne px-3 py-0.5 rounded-sm text-cong-champagne">
              CỘNG
            </span>
            <span className="font-sans text-[10px] uppercase tracking-widest text-cong-oldPaper mt-1.5 font-bold">
              CÀ PHÊ
            </span>
          </div>
          
          <p className="text-xs md:text-sm text-cong-oldPaper/70 max-w-sm font-sans leading-relaxed font-light mb-6">
            Ra đời từ năm 2007, Cộng Cà Phê mong muốn mang lại một không gian Việt Nam thời kỳ bao cấp mộc mạc, bình yên và giữ trọn hương vị truyền thống tinh tế.
          </p>

          <div className="flex items-center gap-3">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Theo dõi Cộng Cà Phê trên Facebook"
              className="p-2 border border-cong-champagne/20 text-cong-champagne/70 rounded-full hover:border-cong-champagne hover:text-cong-champagne hover:scale-105 transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Theo dõi Cộng Cà Phê trên Instagram"
              className="p-2 border border-cong-champagne/20 text-cong-champagne/70 rounded-full hover:border-cong-champagne hover:text-cong-champagne hover:scale-105 transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Theo dõi Cộng Cà Phê trên TikTok"
              className="px-2 py-1.5 border border-cong-champagne/20 text-cong-champagne/70 rounded-full hover:border-cong-champagne hover:text-cong-champagne hover:scale-105 transition-all text-[8px] font-bold font-sans"
            >
              dT
            </a>
          </div>
        </div>

        {/* Quick Links (3 cols) */}
        <div className="lg:col-span-3">
          <h4 className="font-serif text-xs uppercase tracking-widest font-bold mb-6 text-cong-champagne">
            Liên Kết Nhanh
          </h4>
          <ul className="space-y-3 font-sans text-xs md:text-sm text-cong-oldPaper/80 font-light">
            <li>
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-cong-champagne transition-colors">
                Trang Chủ
              </a>
            </li>
            <li>
              <a href="#story" onClick={(e) => handleNavClick(e, '#story')} className="hover:text-cong-champagne transition-colors">
                Câu Chuyện Cộng
              </a>
            </li>
            <li>
              <a href="#menu" onClick={(e) => handleNavClick(e, '#menu')} className="hover:text-cong-champagne transition-colors">
                Thực Đơn Đặc Trưng
              </a>
            </li>
            <li>
              <a href="#grocery" onClick={(e) => handleNavClick(e, '#grocery')} className="hover:text-cong-champagne transition-colors">
                Góc Tạp Hoá
              </a>
            </li>
            <li>
              <a href="#stores" onClick={(e) => handleNavClick(e, '#stores')} className="hover:text-cong-champagne transition-colors">
                Hệ Thống Cửa Hàng
              </a>
            </li>
          </ul>
        </div>

        {/* Contact info (4 cols) */}
        <div className="lg:col-span-4">
          <h4 className="font-serif text-xs uppercase tracking-widest font-bold mb-6 text-cong-champagne">
            Liên Hệ Với Cộng
          </h4>
          <ul className="space-y-4.5 font-sans text-xs md:text-sm text-cong-oldPaper/80 font-light">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cong-champagne flex-shrink-0" />
              <a href="mailto:info@congcaphe.com" className="hover:underline hover:text-cong-champagne transition-colors">info@congcaphe.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cong-champagne flex-shrink-0" />
              <a href="tel:02838220838" className="hover:underline hover:text-cong-champagne transition-colors">Hotline: 028 3822 0838</a>
            </li>
            <li className="text-[10px] leading-relaxed text-cong-oldPaper/50 pt-4 border-t border-cong-champagne/10">
              Trụ sở chính: Hà Nội, Việt Nam. Bản quyền nội dung và thương hiệu thuộc sở hữu của Công ty Cổ phần Cộng Cà Phê.
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom copyright and up-to-top */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-6 border-t border-cong-champagne/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sans text-[11px] text-cong-oldPaper/40 font-light">
          © Bản quyền thương hiệu Cộng Cà Phê. Xây dựng hoàn chỉnh bởi Antigravity.
        </p>

        <button 
          onClick={handleScrollToTop}
          aria-label="Cuộn lên đầu trang"
          className="flex items-center gap-2 bg-cong-armyDark border border-cong-champagne/30 hover:border-cong-champagne text-cong-champagne hover:text-cong-armyDark hover:bg-cong-champagne px-4 py-2 rounded-sm transition-all duration-300 text-[10px] font-serif font-bold uppercase tracking-widest"
        >
          <span>Lên đầu trang</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
