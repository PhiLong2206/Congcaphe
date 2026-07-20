import React, { useState, useEffect, useRef } from 'react';
import { SectionHeading } from './SectionHeading';
import { menuCategories } from '../data/menuCategories';
import type { MenuCategory } from '../data/menuCategories';
import { ImageWithFallback } from './ImageWithFallback';
import { X } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCategory(null);
      }
    };
    if (selectedCategory) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      modalRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCategory]);

  return (
    <section 
      id="menu"
      className="py-20 md:py-24 bg-[#F3EEE4] text-[#3F4E2A] relative overflow-hidden paper-texture"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <SectionHeading 
          title="Thực Đơn Cộng – Thức Uống Lưu Giữ Thời Gian"
          subtitle="Giữa nhịp chảy trôi vội vã của thời gian, thực đơn của Cộng ra đời như một nốt trầm xao xuyến, nơi lưu giữ lại những phong vị dung dị nhưng khó quên nhất của một thời kỳ bao cấp đậm chất Việt."
          light={true}
        />

        {/* Clean Spacious 5-column Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 mt-16">
          {menuCategories.map((category) => (
            <div 
              key={category.id}
              className="flex flex-col items-center text-center group"
            >
              {/* Spacious image block (no cards, no shadows) */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 border border-cong-woodBrown/15 bg-cong-oldPaper/40 p-2 transition-transform duration-500 group-hover:scale-105">
                <ImageWithFallback 
                  src={category.image} 
                  alt={category.title}
                  fallback="/images/placeholder-coffee.svg"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Title below image */}
              <h3 className="font-serif text-xs md:text-sm tracking-widest font-bold text-[#3F4E2A] mb-2 uppercase">
                {category.title}
              </h3>
              
              {/* Short category description */}
              <p className="text-[11px] text-[#5E5A50] font-sans font-normal leading-relaxed mb-4 max-w-[150px]">
                {category.description}
              </p>

              {/* Simple link (no button) */}
              <button
                onClick={() => setSelectedCategory(category)}
                className="font-serif text-[10px] uppercase tracking-widest font-bold text-[#A63A2B] hover:text-[#3F4E2A] transition-colors pb-0.5 border-b border-dashed border-[#A63A2B] hover:border-[#3F4E2A]"
              >
                XEM THÊM
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Category Detail Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(6,8,6,0.82)] animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setSelectedCategory(null)}></div>
          <div 
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            tabIndex={-1}
            className="relative w-[calc(100%-32px)] md:w-full md:max-w-[780px] bg-[#20261E] border border-[rgba(214,179,106,0.55)] rounded-[20px] shadow-2xl p-6 md:p-10 max-h-[85vh] overflow-y-auto z-10 paper-texture animate-slideUp outline-none"
          >
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedCategory(null)}
              className="absolute top-4 right-4 p-2 bg-[#3A4036] hover:bg-[#A63A2B] text-[#F3EEE4] hover:text-white rounded-full shadow-md transition-colors duration-200 z-30 cursor-pointer"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="border-b border-[rgba(214,179,106,0.35)] pb-4 mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D6B36A] block mb-1">
                DANH SÁCH THỨC UỐNG
              </span>
              <h3 id="modal-title" className="text-[22px] md:text-[24px] font-serif text-[#E8DEC8] uppercase font-bold tracking-wide">
                {selectedCategory.title}
              </h3>
            </div>

            {/* Menu Items List */}
            <div className="space-y-6">
              {selectedCategory.items.map((item) => (
                <div key={item.id} className="flex gap-4 items-start">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-[rgba(214,179,106,0.25)]">
                    <ImageWithFallback src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-base font-serif font-bold text-[#E8DEC8] mb-1">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#D1C7B7] font-sans font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-[rgba(214,179,106,0.35)] flex justify-end">
              <button
                onClick={() => setSelectedCategory(null)}
                className="px-[28px] py-[12px] bg-[#D6B36A] text-[#151916] rounded-md font-serif font-bold text-xs tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-[2px] hover:shadow-md cursor-pointer"
              >
                Đóng thực đơn
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
