import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400 text-sm">© {currentYear}, Ace Holdings</p>
        </div>
      </div>
    </footer>
  );
}
