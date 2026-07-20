import React, { useEffect, useRef } from 'react';
import { X, ShoppingBag } from 'lucide-react';
import type { SouvenirItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface ProductModalProps {
  product: SouvenirItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      modalRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(6,8,6,0.82)] animate-fadeIn">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true"></div>

      <div 
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        className="relative w-[calc(100%-32px)] md:w-full md:max-w-[780px] bg-[#20261E] border border-[rgba(214,179,106,0.55)] rounded-[20px] overflow-y-auto md:overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[85vh] paper-texture animate-slideUp p-6 md:p-10 outline-none"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Đóng chi tiết sản phẩm"
          className="absolute top-4 right-4 p-2 bg-[#3A4036] hover:bg-[#A63A2B] text-[#F3EEE4] hover:text-white rounded-full shadow-md transition-colors duration-200 z-30 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Cover */}
        <div className="w-full md:w-1/2 h-60 md:h-auto min-h-[200px] relative overflow-hidden bg-cong-primaryBg rounded-lg flex-shrink-0 border border-[rgba(214,179,106,0.25)]">
          <ImageWithFallback 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Product Details Column */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D6B36A] block mb-2">
              SẢN PHẨM LƯU NIỆM
            </span>
            <h3 id="modal-title" className="text-[22px] md:text-[24px] font-serif text-[#E8DEC8] mb-4 font-bold leading-tight">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-[16px] leading-[1.6] font-normal text-[#F3EEE4] mb-6 italic pl-4 border-l border-[#D6B36A]">
              "{product.description}"
            </p>

            {/* Detailed Description */}
            <div className="border-t border-[rgba(214,179,106,0.35)] pt-5 mt-5">
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#E8DEC8] mb-2">Chi tiết sản phẩm:</h4>
              <p className="text-[14px] text-[#D1C7B7] leading-relaxed font-sans font-normal text-justify">
                {product.details}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[rgba(214,179,106,0.35)] flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs text-[#D1C7B7] font-sans">
              <ShoppingBag className="w-4 h-4 text-[#D6B36A] flex-shrink-0" />
              <span>Sản phẩm trưng bày tại hệ thống cửa hàng Cộng Cà Phê.</span>
            </div>
            
            <div className="flex justify-end">
              <button 
                onClick={onClose}
                className="px-[28px] py-[12px] bg-[#D6B36A] text-[#151916] rounded-md font-serif font-bold text-xs tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-[2px] hover:shadow-md cursor-pointer"
              >
                Đóng chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
