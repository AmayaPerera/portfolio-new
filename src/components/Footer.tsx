import React from 'react';
export function Footer() {
  return <footer className="py-8 px-6 border-t border-white/5 bg-black relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} AmayaPerera. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="transition-colors">
            Designing with purpose. Building with passion 💻
          </a>
          
        </div>
      </div>
    </footer>;
}