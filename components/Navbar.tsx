"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-bg-0/80 backdrop-blur-md border-b border-border-custom">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-brand-blue">
          Geodr.
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
          <Link href="/" className="hover:text-brand-blue transition">Home</Link>
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-brand-blue transition"
            >
              Dashboard <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full mt-2 w-48 bg-bg-1 border border-border-custom rounded-lg shadow-lg py-2">
                <Link href="/projects" className="block px-4 py-2 hover:bg-bg-2">Projects</Link>
                <Link href="/about" className="block px-4 py-2 hover:bg-bg-2">About</Link>
              </div>
            )}
          </div>
          <Link href="/about" className="hover:text-brand-blue transition">About</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bg-1 border-t border-border-custom p-6 space-y-4">
          <Link href="/" className="block">Home</Link>
          <Link href="/projects" className="block">Projects</Link>
          <Link href="/about" className="block">About</Link>
        </div>
      )}
    </nav>
  );
}
