"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermer le dropdown quand on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-md dark:border-zinc-800 dark:bg-black/90">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold tracking-tighter text-red-600">
            NUISIBLE <span className="text-zinc-950 dark:text-zinc-50">MARSEILLE</span>
          </span>
        </Link>

        {/* Navigation Bureau */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold text-zinc-700 hover:text-red-600 dark:text-zinc-300 transition-colors">
            Accueil
          </Link>
          
          {/* Menu déroulant Services */}
          <div 
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-sm font-semibold text-zinc-700 hover:text-red-600 dark:text-zinc-300 flex items-center gap-1 py-2 transition-colors"
            >
              Services
              <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-52 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl p-2 transition-all animate-in fade-in slide-in-from-top-2">
                <Link href="/deratisation" className="block px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-red-600 rounded-lg transition-colors" onClick={() => setIsDropdownOpen(false)}>
                  Dératisation
                </Link>
                <Link href="/punaises" className="block px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-red-600 rounded-lg transition-colors" onClick={() => setIsDropdownOpen(false)}>
                  Punaises de lit
                </Link>
                <Link href="/cafards" className="block px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-red-600 rounded-lg transition-colors" onClick={() => setIsDropdownOpen(false)}>
                  Cafards & Blattes
                </Link>
                <Link href="/pigeons" className="block px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-red-600 rounded-lg transition-colors" onClick={() => setIsDropdownOpen(false)}>
                  Dépigeonnage
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="text-sm font-semibold text-zinc-700 hover:text-red-600 dark:text-zinc-300 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Action Appel & Menu Mobile */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+33762240168"
            className="hidden sm:inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-5 rounded-full text-sm transition-all shadow-md hover:shadow-lg"
          >
            <span> Urgence 24/7</span>
          </a>

          {/* Bouton Hamburger */}
          <button 
            className="md:hidden p-2 text-zinc-700 dark:text-zinc-200 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black px-6 py-6 space-y-4">
          <Link href="/" className="block text-base font-semibold text-zinc-800 dark:text-zinc-100" onClick={() => setIsOpen(false)}>
            Accueil
          </Link>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">Nos Services</span>
            <div className="pl-3 space-y-2 border-l-2 border-red-600/30">
              <Link href="/deratisation" className="block text-sm font-medium text-zinc-600 dark:text-zinc-300" onClick={() => setIsOpen(false)}>Dératisation</Link>
              <Link href="/punaises" className="block text-sm font-medium text-zinc-600 dark:text-zinc-300" onClick={() => setIsOpen(false)}>Punaises de lit</Link>
              <Link href="/cafards" className="block text-sm font-medium text-zinc-600 dark:text-zinc-300" onClick={() => setIsOpen(false)}>Cafards et Blattes</Link>
              <Link href="/pigeons" className="block text-sm font-medium text-zinc-600 dark:text-zinc-300" onClick={() => setIsOpen(false)}>Dépigeonnage</Link>
            </div>
          </div>

          <Link href="/contact" className="block text-base font-semibold text-zinc-800 dark:text-zinc-100" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          <a
            href="tel:+33762240168"
            className="flex items-center justify-center gap-2 w-full bg-red-600 text-white font-bold py-3 rounded-xl text-center shadow-md"
          >
            Appeler le 07 62 24 01 68
          </a>
        </div>
      )}
    </header>
  );
}