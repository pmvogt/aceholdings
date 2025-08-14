import React from 'react';
import Image from 'next/image';

interface BusinessCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export function BusinessCard({ title, description, imageSrc, imageAlt }: BusinessCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
