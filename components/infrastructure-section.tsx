import React from 'react';
import Image from 'next/image';
import { Mr_Dafoe } from 'next/font/google';

const mrDafoe = Mr_Dafoe({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export function InfrastructureSection() {
  return (
    <section className="pt-12 pb-16 bg-gradient-to-br from-brand-manila to-brand-manila/80">
      <div className="container mx-auto px-4">
        <div className="space-y-8 mb-12">
          <h2 className="text-4xl md:text-5xl text-gray-600 text-left font-semibold">
            Investing in American Infrastructure
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Blurb on the left */}
          <div className="space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              We&apos;re interested in investing and working with the best American companies ran by the best American
              operators. Because we understand that greatness still lives here. If you&apos;re an aligned business
              owner, let&apos;s talk.
            </p>
            <button className="px-8 py-3 bg-black text-white font-semibold border-4 border-yellow-500 hover:bg-gray-800 transition-colors duration-200">
              Contact us
            </button>
          </div>

          {/* Image on the right */}
          <div className="relative">
            <div className="relative w-full h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image src="/aceflag.png" alt="American Infrastructure" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
