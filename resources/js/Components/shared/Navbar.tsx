import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Icon } from '@iconify/react';
import { navLinks } from '@/Shared/data/nav-link';
import Button from '@/Components/ui/Button'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="shrink-0">
            <Link href="/" className="text-2xl font-extrabold tracking-tight">
              <span className="text-blue-dark">Yayasan</span>{' '}
              <span className="text-red-normal">Jissho</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8 mr-4">
              {navLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  className="text-blue-dark/80 hover:text-red-normal font-medium text-[15px] transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <Button href="/daftar" variant="primary" size="md">
              Daftar Sekarang
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-dark p-2 transition-transform duration-300 active:scale-90"
              aria-label="Toggle Menu"
            >
              <Icon 
                icon={isOpen ? "heroicons:x-mark-20-solid" : "heroicons:bars-3-bottom-right-20-solid"} 
                className={`text-3xl transition-all duration-300 ${isOpen ? 'rotate-90 text-red-normal' : 'rotate-0'}`} 
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-2 flex flex-col">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-blue-dark/80 hover:text-red-normal hover:bg-red-light/30 rounded-lg font-medium transition-all"
            >
              {link.label}
            </Link>
          ))}
          
          <div className="pt-4 px-4">
            <Button 
              href="/daftar" 
              variant="primary" 
              size="md" 
              className="w-full" 
              onClick={() => setIsOpen(false)}
            >
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}