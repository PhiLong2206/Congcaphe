import React from 'react';

interface GoogleMapProps {
  embedUrl: string;
  title: string;
}

export const GoogleMap: React.FC<GoogleMapProps> = ({ embedUrl, title }) => {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[450px] bg-cong-surface border border-cong-champagne/20 rounded overflow-hidden relative shadow-md p-1">
      {/* Dynamic IFrame Map Wrapper */}
      <div className="w-full h-full rounded overflow-hidden relative">
        <iframe
          src={embedUrl}
          title={`Bản đồ vị trí cửa hàng ${title}`}
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '300px', height: '100%' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full absolute inset-0"
        ></iframe>
      </div>
    </div>
  );
};
