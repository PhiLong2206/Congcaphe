import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ImageWithFallback } from './ImageWithFallback';

interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  sizeClass: string;
}

export const GallerySection: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: 'space-1',
      image: '/images/gallery/space-1.jpg',
      caption: 'Không gian trầm mặc dưới ánh đèn vàng ấm áp',
      sizeClass: 'md:col-span-2 md:row-span-2'
    },
    {
      id: 'chair-2',
      image: '/images/gallery/chair-2.jpg',
      caption: 'Chiếc ghế gỗ sờn màu cùng kỷ vật thời gian',
      sizeClass: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 'coffee-3',
      image: '/images/gallery/coffee-3.jpg',
      caption: 'Giọt cà phê phin đậm đà ngấm chậm thời gian',
      sizeClass: 'md:col-span-1 md:row-span-2'
    },
    {
      id: 'street-4',
      image: '/images/gallery/street-4.jpg',
      caption: 'Những góc phố xưa cũ lưu lại giữa dòng đời hối hả',
      sizeClass: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 'latte-5',
      image: '/images/gallery/latte-5.jpg',
      caption: 'Một tách cà phê, một khoảng thời gian chậm lại',
      sizeClass: 'md:col-span-2 md:row-span-1'
    }
  ];

  return (
    <section 
      id="gallery" 
      className="py-20 md:py-28 bg-cong-primaryBg text-cong-body relative overflow-hidden paper-texture"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading 
          title="Những Góc Nhỏ Ký Ức"
          subtitle="Từng hiện vật gỗ sờn, từng hoa văn chăn công rực rỡ được bài trí chỉn chu tái hiện những ký ức bao cấp hoài niệm đầy thương nhớ."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 auto-rows-[280px] md:auto-rows-[220px]">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className={`relative overflow-hidden rounded-sm group border border-cong-champagne/15 hover:border-cong-champagne shadow-2xl p-1.5 bg-cong-surface/20 hover-luxury ${item.sizeClass}`}
            >
              {/* Inner card frame */}
              <div className="relative w-full h-full overflow-hidden rounded-sm border border-cong-champagne/25">
                <ImageWithFallback 
                  src={item.image} 
                  alt={item.caption} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
                />
                
                {/* Cinematic dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cong-primaryBg via-cong-primaryBg/30 to-transparent flex flex-col justify-end p-5 opacity-95 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {/* Small gold line accent */}
                  <span className="h-[1.5px] w-8 bg-cong-champagne mb-3.5 block"></span>
                  <p className="text-cong-headline font-serif text-xs md:text-sm font-semibold tracking-wide leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
