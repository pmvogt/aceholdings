import React from 'react';
import { BusinessCard } from './business-card';

const businesses = [
  {
    title: 'All Current',
    description: 'Licensed and grey market electrical products, primarily for need-it-now applications.',
    imageSrc: '/aclogo.png',
    imageAlt: 'All Current electrical products',
    url: 'https://www.allcurrent.com',
  },
  {
    title: 'FORGD',
    description: '1200 amp and below quick ship national UL panel shop network',
    imageSrc: '/forgd.png',
    imageAlt: 'FORGD panel shop network',
    // No URL yet
  },
  {
    title: 'InPower Solutions',
    description: 'Custom engineered manufacturer of switchboards, 1200-5000 amps',
    imageSrc: '/ips.png',
    imageAlt: 'InPower Solutions switchboards',
    url: 'https://www.inpowersolutions.com',
  },
  {
    title: 'GAFCO',
    description: 'OEM coated products for niche applications',
    imageSrc: '/gafco.png',
    imageAlt: 'GAFCO coated products',
    url: 'https://www.gafcoindustries.com',
  },
  {
    title: 'ACP',
    description: 'Private label import electrical parts',
    imageSrc: '/acp.png',
    imageAlt: 'ACP electrical parts',
    url: 'https://www.allcurrent.com/all-products/acp-electrical-fittings',
  },
];

export function BusinessesSection() {
  return (
    <section className="pt-12 pb-16 bg-gray-800">
      <div className="container mx-auto px-4 space-y-6">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl text-gray-200 text-left font-semibold">
            We buy and scale <span className="text-orange-400">mission-critical businesses.</span>
          </h2>
          <p className="text-xl text-gray-4 00">Our specialty is electrical products and infrastructure:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <BusinessCard
              key={index}
              title={business.title}
              description={business.description}
              imageSrc={business.imageSrc}
              imageAlt={business.imageAlt}
              url={business.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
