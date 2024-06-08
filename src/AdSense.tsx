// src/components/AdSense.tsx
import React, { useEffect } from 'react';


interface AdSenseProps {
  client: string;
  slot: string;
  format?: string;
  responsive?: string;
}

const AdSense: React.FC<AdSenseProps> = ({ client, slot, responsive = 'false' }) => {
  useEffect(() => {
    if (window) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('Adsbygoogle push error:', e);
      }
    }

    console.log("here");
    
  }, []);

  return (
    <div className='w-full'>
    <ins
      className="adsbygoogle"
      data-ad-client={client}
      data-ad-slot={slot}
      // data-ad-format={format}
      data-full-width-responsive={responsive}
    ></ins>
    </div>
  );
};

export default AdSense;
