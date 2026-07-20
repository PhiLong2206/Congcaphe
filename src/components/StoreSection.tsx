import React, { useState, useMemo } from 'react';
import { SectionHeading } from './SectionHeading';
import { GoogleMap } from './GoogleMap';
import { stores } from '../data/stores';
import { ImageWithFallback } from './ImageWithFallback';
import { Search, MapPin, Clock, Phone, Navigation } from 'lucide-react';

export const StoreSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeStoreId, setActiveStoreId] = useState(stores[0].id);

  // Search filter
  const filteredStores = useMemo(() => {
    return stores.filter(store => 
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      store.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const activeStore = useMemo(() => {
    return stores.find(store => store.id === activeStoreId) || stores[0];
  }, [activeStoreId]);

  return (
    <section 
      id="stores"
      className="py-20 md:py-24 bg-cong-secondaryBg text-cong-body border-y border-cong-champagne/10 relative overflow-hidden paper-texture"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading 
          title="Ghé Cộng Nơi Góc Phố – Trạm Dừng Chân Quen Thuộc"
          subtitle="Trải dài khắp các ngõ ngách và những khu phố nhộn nhịp, Cộng luôn hiện diện thật gần để chờ bạn ghé thăm."
        />

        {/* Search Input Box */}
        <div className="max-w-md mx-auto mb-12 relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-cong-champagne/60">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Tìm chi nhánh hoặc địa chỉ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-cong-primaryBg border border-cong-champagne/25 focus:border-cong-champagne rounded-sm text-xs font-sans placeholder-cong-muted/40 text-cong-body shadow-inner transition-colors duration-200 outline-none"
          />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Stores scrollable cards list (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-3 no-scrollbar">
            {filteredStores.length > 0 ? (
              filteredStores.map((store) => {
                const isActive = store.id === activeStoreId;
                return (
                  <div
                    key={store.id}
                    onClick={() => setActiveStoreId(store.id)}
                    className={`p-5 rounded-sm border cursor-pointer transition-all duration-300 flex gap-4 ${
                      isActive
                        ? 'bg-cong-surface border-cong-champagne shadow-lg translate-x-1'
                        : 'bg-cong-surface/40 border-cong-champagne/10 text-cong-body hover:bg-cong-surface hover:border-cong-champagne/30'
                    }`}
                  >
                    {/* Store Cover image */}
                    <div className="w-20 h-20 rounded-sm overflow-hidden flex-shrink-0 border border-cong-champagne/20 hidden sm:block relative">
                      <ImageWithFallback 
                        src={store.image} 
                        alt={store.name} 
                        fallback="/images/placeholder-store.svg"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-0 inset-x-0 bg-black/75 text-[7px] text-cong-oldPaper text-center py-0.5 select-none font-sans block">
                        Không gian minh họa
                      </span>
                    </div>

                    {/* Store Meta */}
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-serif font-bold text-cong-headline mb-2 leading-tight">
                        {store.name}
                      </h3>
                      
                      <div className="space-y-1.5 font-sans text-xs text-cong-body/80 font-light">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-3.5 h-3.5 text-cong-champagne flex-shrink-0 mt-0.5" />
                          <span>{store.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-cong-champagne flex-shrink-0" />
                          <span>{store.openTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-cong-champagne flex-shrink-0" />
                          <span>{store.phone}</span>
                        </div>
                      </div>

                      {/* Map buttons */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveStoreId(store.id);
                          }}
                          className={`px-4 py-1.5 rounded-sm font-serif text-[10px] uppercase font-bold tracking-widest transition-colors border ${
                            isActive 
                              ? 'bg-cong-champagne text-cong-charcoal border-cong-champagne shadow-md'
                              : 'bg-cong-primaryBg border-cong-champagne/20 text-cong-champagne hover:bg-cong-champagne hover:text-cong-charcoal'
                          }`}
                        >
                          Xem Bản Đồ
                        </button>
                        
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(store.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-4 py-1.5 bg-transparent border border-cong-champagne/30 hover:border-cong-champagne hover:bg-cong-champagne/10 rounded-sm font-serif text-[10px] uppercase tracking-widest text-cong-champagne flex items-center gap-1.5 transition-all duration-300"
                        >
                          <Navigation className="w-3 h-3" />
                          <span>Chỉ Đường</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center bg-cong-surface/40 border border-dashed border-cong-champagne/20 rounded-sm font-serif text-cong-muted">
                Không tìm thấy cửa hàng nào phù hợp.
              </div>
            )}
          </div>

          {/* Right: Map Embed (7 cols) */}
          <div className="lg:col-span-7 h-[350px] md:h-auto min-h-[380px]">
            <GoogleMap 
              embedUrl={activeStore.mapUrl} 
              title={activeStore.name} 
            />
          </div>

        </div>
      </div>
    </section>
  );
};
